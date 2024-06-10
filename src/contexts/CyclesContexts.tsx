import {
  ReactNode,
  createContext,
  useEffect,
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
import { differenceInSeconds } from 'date-fns'

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
  const [cyclesState, dispatch] = useReducer(
    CyclesReduce,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const oldStorage = localStorage.getItem('@ignite-timer:historyList-1.0.0')

      if (oldStorage) {
        return JSON.parse(oldStorage)
      }

      return initialState
    },
  ) /* o primeiro parâmetro de um reducer é uma funcão, o segundo o valor inicial e o terceiro um valor recebe uma função, usada para pegar os dados iniciais do reducer de algum outro lugar - no caso do localStorage. Essa função sempre recebe dois parâmetros. o primeiro é o state, que é o valor atual/inicial da váriavel (que no caso é a cycles) e a action, que indica uma alteração que o usuário está tentando fazer no estado. */

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find(({ id }) => id === activeCycleId)

  const [secondsPassedOfThisCycle, setSecondsPassedOfThisCycle] = useState(
    () => {
      if (activeCycle) {
        return differenceInSeconds(
          new Date(),
          new Date(activeCycle.startedDate),
        )
      }

      return 0
    },
  )

  useEffect(() => {
    localStorage.setItem(
      '@ignite-timer:historyList-1.0.0',
      JSON.stringify(cyclesState),
    )
  }, [cyclesState])

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
