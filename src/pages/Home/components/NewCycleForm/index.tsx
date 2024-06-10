import {
  FormHeaderStyles,
  InputNameOfProjectStyles,
  InputTimeOfWorkStyles,
} from './style'

import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContexts'

export function NewCycleForm() {
  const { activeCycle, cycles } = useContext(CyclesContext)
  const { register, setValue, getValues } = useFormContext()

  function decuctTimeOfWork() {
    const oldValue = getValues('timeOfWork')
    const newValue = oldValue - 5
    setValue('timeOfWork', newValue)
  }

  function addTimeOfWork() {
    const oldValue = getValues('timeOfWork')
    const newValue = oldValue + 5
    setValue('timeOfWork', newValue)
  }

  return (
    <FormHeaderStyles className="flexReset">
      <label htmlFor="inputNameOfProject">Vou trabalhar em</label>
      <InputNameOfProjectStyles
        type="text"
        placeholder="Dê um nome pra o seu projeto"
        id="inputNameOfProject"
        list="sugered-tasks"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="sugered-tasks">
        {cycles.map(({ task, id }) => (
          <option value={task} key={id} />
        ))}
      </datalist>

      <label htmlFor="inputTimeOfWork">durante</label>
      <section className="deductOrAdd flexReset">
        <button type="button" className="deduct" onClick={decuctTimeOfWork}>
          -
        </button>
        <InputTimeOfWorkStyles
          type="number"
          placeholder="00"
          id="inputTimeOfWork"
          max={60}
          min={1}
          disabled={!!activeCycle}
          {...register('timeOfWork', { valueAsNumber: true })}
        />
        <button type="button" className="add" onClick={addTimeOfWork}>
          +
        </button>
      </section>
      <p>minutos</p>
    </FormHeaderStyles>
  )
}
