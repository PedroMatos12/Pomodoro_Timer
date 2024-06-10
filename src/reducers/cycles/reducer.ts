import { CyclesProps } from '../../pages/Home/home'
import { ActionTypes } from './actions'
import { produce } from 'immer'

interface CyclesStateProps {
  cycles: CyclesProps[]
  activeCycleId: string | null
}

function setNewStorage(draft: CyclesStateProps, currentCycleIndex: number) {
  const newStorage = Array.from(
    JSON.parse(localStorage.getItem('@ignite-timer:historyList-1.0.0')),
  )

  const findIndexToRemove = newStorage.findIndex(
    ({ id }) => id === draft.activeCycleId,
  )

  newStorage.splice(findIndexToRemove, 1)

  newStorage.push(draft.cycles[currentCycleIndex])

  return newStorage
}

export function CyclesReduce(state: CyclesStateProps, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id

        const oldStorage = Array.from(
          JSON.parse(localStorage.getItem('@ignite-timer:historyList-1.0.0')),
        )

        localStorage.setItem(
          '@ignite-timer:historyList-1.0.0',
          JSON.stringify([...oldStorage, action.payload.newCycle]),
        )
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

        localStorage.setItem(
          '@ignite-timer:historyList-1.0.0',
          JSON.stringify([...setNewStorage(draft, currentCycleIndex)]),
        )

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

        localStorage.setItem(
          '@ignite-timer:historyList-1.0.0',
          JSON.stringify([...setNewStorage(draft, currentCycleIndex)]),
        )

        draft.activeCycleId = null
      })
      break
    }

    default:
      return state
  }
}
