import {
  HistoryStyles,
  HistoryTableStyles,
  StatusStyle,
} from './History.styles'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { CyclesProps } from '../Home/home'

export function History() {
  return (
    <HistoryStyles>
      <h1>Meu Histórico</h1>

      <HistoryTableStyles>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {JSON.parse(
              localStorage.getItem('@ignite-timer:historyList-1.0.0'),
            ).map((task: CyclesProps) => {
              return (
                <tr key={task.id}>
                  <td>{task.task}</td>
                  <td>{`${task.timeOfWork} minutos`}</td>
                  <td>
                    {formatDistanceToNow(task.startedDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {task.isInterrupted && (
                      <StatusStyle statuscolor="red1">Interrompida</StatusStyle>
                    )}
                    {task.isConcluded && (
                      <StatusStyle statuscolor="green1">Concluída</StatusStyle>
                    )}
                    {!task.isConcluded && !task.isInterrupted && (
                      <StatusStyle statuscolor="yellow">
                        Em andamento
                      </StatusStyle>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryTableStyles>
    </HistoryStyles>
  )
}
