import {
  ReactNode,
  createContext,
  // useEffect,
  useReducer,
  useState,
} from 'react'
import { CyclesProps } from '../pages/Home/home'
import { CyclesReduce } from '../reducers/cycles/reducer'
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'

interface CycleFormDataProps {
  task: string
  timeOfWork: number
}

interface CyclesContextProps {
  activeCycle: CyclesProps | undefined
  cycles: CyclesProps[]
  activeCycleId: string | null
  secondsPassedOfThisCycle: number
  setSecondsPassedOfThisCycle: React.Dispatch<React.SetStateAction<number>>
  markCurrentCycleAsFinished: () => void
  createNewCycle: (data: CycleFormDataProps) => void
  interruptCurrentCycle: () => void
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextProps)

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(CyclesReduce, {
    cycles: [],
    activeCycleId: null,
  }) /* o primeiro parâmetro de um reducer é uma funcão, e o segundo o valor inicial. Essa função sempre recebe dois parâmetros. o primeiro é o state, que é o valor atual/inicial da váriavel (que no caso é a cycles) e a action, que indica uma alteração que o usuário está tentando fazer no estado. */

  const [secondsPassedOfThisCycle, setSecondsPassedOfThisCycle] = useState(0)

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find(({ id }) => id === activeCycleId)

  const storageLocal = localStorage.getItem('@ignite-timer:historyList-1.0.0')

  if (storageLocal === null) {
    localStorage.setItem('@ignite-timer:historyList-1.0.0', JSON.stringify([]))
  }

  function createNewCycle(data: CycleFormDataProps) {
    const newCycle: CyclesProps = {
      id: String(new Date().getTime()),
      task: data.task,
      timeOfWork: data.timeOfWork,
      startedDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))
    setSecondsPassedOfThisCycle(0)
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction())
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        secondsPassedOfThisCycle,
        setSecondsPassedOfThisCycle,
        markCurrentCycleAsFinished,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
