import { useContext, useEffect } from 'react'
import { CounterStyles } from './style'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../../../contexts/CyclesContexts'

export function CountDown() {
  const {
    activeCycle,
    activeCycleId,
    secondsPassedOfThisCycle,
    setSecondsPassedOfThisCycle,
    markCurrentCycleAsFinished,
    cycles,
  } = useContext(CyclesContext)

  const timeOfWorkTotalSeconds = activeCycle ? activeCycle.timeOfWork * 60 : 0

  const currentSeconds = activeCycle
    ? timeOfWorkTotalSeconds - secondsPassedOfThisCycle
    : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const charactersOfMinutesAmount = String(minutesAmount).padStart(2, '0')
  const charactersOfSecondsAmount = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      const intervalCountDown = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startedDate,
        )

        if (secondsDifference > timeOfWorkTotalSeconds) {
          markCurrentCycleAsFinished()

          clearInterval(intervalCountDown)
        } else {
          setSecondsPassedOfThisCycle(secondsDifference)
        }
      }, 1000)

      return () => {
        clearInterval(intervalCountDown)
      }
    }
  }, [
    activeCycle,
    timeOfWorkTotalSeconds,
    activeCycleId,
    cycles,
    markCurrentCycleAsFinished,
    setSecondsPassedOfThisCycle,
  ])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutesAmount}:${secondsAmount}`
    }
  }, [activeCycle, minutesAmount, secondsAmount])

  return (
    <CounterStyles className="flexReset">
      <p className="numberOfCounter">{charactersOfMinutesAmount[0]}</p>
      <p className="numberOfCounter">{charactersOfMinutesAmount[1]}</p>
      <p className="pointsOfCounter flexReset">:</p>
      <p className="numberOfCounter">{charactersOfSecondsAmount[0]}</p>
      <p className="numberOfCounter">{charactersOfSecondsAmount[1]}</p>
    </CounterStyles>
  )
}
