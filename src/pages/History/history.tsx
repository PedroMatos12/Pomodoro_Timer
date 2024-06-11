import {
  HistoryStyles,
  HistoryTableStyles,
  StatusStyle,
} from './History.styles'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { CyclesProps } from '../Home/home'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContexts'
import { Trash } from '@phosphor-icons/react'

export function History() {
  const { cycles, clearHistory } = useContext(CyclesContext)

  return (
    <HistoryStyles>
      <div className="historyHeader flexReset">
        <h1>Meu Histórico</h1>
        <span className="trashIcon" onClick={clearHistory}>
          <Trash size={24} />
        </span>
      </div>

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
            {cycles.length === 0 ? (
              <tr>
                <td className="isHistoryEmpty"></td>
                <td className="isHistoryEmpty"></td>
                <td className="isHistoryEmpty"></td>
                <td className="isHistoryEmpty"></td>
              </tr>
            ) : (
              cycles.map((task: CyclesProps) => {
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
                        <StatusStyle statuscolor="red1">
                          Interrompida
                        </StatusStyle>
                      )}
                      {task.isConcluded && (
                        <StatusStyle statuscolor="green1">
                          Concluída
                        </StatusStyle>
                      )}
                      {!task.isConcluded && !task.isInterrupted && (
                        <StatusStyle statuscolor="yellow">
                          Em andamento
                        </StatusStyle>
                      )}
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </HistoryTableStyles>
    </HistoryStyles>
  )
}
