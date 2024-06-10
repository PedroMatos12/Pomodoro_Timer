import {
  HomeFormStyles,
  StartButtonStyles,
  StopButtonStyles,
} from './Home.styles'

import { HandPalm, Play } from '@phosphor-icons/react'
import { ToolTipComponent } from '../../components/ToolTipComponent/toolTip'
import { useContext } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { CountDown } from './components/CountDown'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod' /* serve para importar tudo do 'zod' como: zod. isso foi feito pois a biblioteca zod não faz um export */
import { zodResolver } from '@hookform/resolvers/zod'
import { CyclesContext } from '../../contexts/CyclesContexts'

export interface CyclesProps {
  id: string
  task: string
  timeOfWork: number
  startedDate: Date
  interruptedDate?: Date
  isInterrupted?: string
  isConcluded?: string
}

interface NewCycleFormProps {
  task: string
  timeOfWork: number
}

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    timeOfWork: zod
      .number()
      .max(60, 'O tempo deve ser menor ou igual a 60 minutos.')
      .min(0, 'O tempo deve ser maior ou igual a 1 minutos.'),
  })

  const newCycleForm = useForm<NewCycleFormProps>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      timeOfWork: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormProps) {
    createNewCycle(data)
    reset()
  }

  const isSubmitDisabled = watch('task') && watch('timeOfWork')

  return (
    <HomeFormStyles onSubmit={handleSubmit(handleCreateNewCycle)}>
      <FormProvider {...newCycleForm}>
        <NewCycleForm />
      </FormProvider>
      <CountDown />
      <ToolTipComponent content="Preencha o nome e a duração antes de começar.">
        {activeCycle ? (
          <StopButtonStyles
            type="button"
            className="flexReset"
            onClick={interruptCurrentCycle}
          >
            <HandPalm size={22} />
            Interromper
          </StopButtonStyles>
        ) : (
          <StartButtonStyles
            type="submit"
            className="flexReset"
            disabled={!isSubmitDisabled}
          >
            <Play size={22} />
            Começar
          </StartButtonStyles>
        )}
      </ToolTipComponent>
    </HomeFormStyles>
  )
}
