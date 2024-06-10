import { CyclesProps } from '../../pages/Home/home'
import { ActionTypes } from './actions'
import { produce } from 'immer'

interface CyclesStateProps {
  cycles: CyclesProps[]
  activeCycleId: string | null
}

// interface ActionProps {
//   type: string
//   payload?: {
//     newCycle: CyclesProps
//   }
// }

export function CyclesReduce(state: CyclesStateProps, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
      break

    case ActionTypes.INTERRUPT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        ({ id }) => id === state.activeCycleId,
      )
      if (currentCycleIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].isInterrupted = 'Interrompida'
        draft.cycles[currentCycleIndex].interruptedDate = new Date()

        draft.activeCycleId = null
      })
      break
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex(
        ({ id }) => id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].isConcluded = 'Concluída'

        draft.activeCycleId = null
      })
      break
    }

    default:
      return state
  }
}
