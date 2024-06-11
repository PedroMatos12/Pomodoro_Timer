import { CyclesProps } from '../../pages/Home/home'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  CLEAR_HISTORY = 'CLEAR_HISTORY',
}

export function addNewCycleAction(newCycle: CyclesProps) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    }, // isso é feito para que a ação que deve ser executada fique mais facilmente encontrada futuramente. Se enviar apenas algo como dispatch(newCycle); futuramente será difícil interromper esse ciclo, por exemplo, uma vez que nada o identifica facilmente.
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CYCLE,
  }
}

export function clearHistoryAction() {
  return {
    type: ActionTypes.CLEAR_HISTORY,
  }
}
