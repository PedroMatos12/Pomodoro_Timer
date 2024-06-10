import { HistoryOfUserListStyles, StatusStyle } from './HistoryList.styles'

interface HistoryOfUserListProps {
  historyTask: string
  historyDuration: string
  historyStarted: string
  historyStatus: string
}

export function HistoryOfUserList({
  historyTask,
  historyDuration,
  historyStarted,
  historyStatus,
}: HistoryOfUserListProps) {
  function theStatusIs() {
    if (historyStatus === 'Concluída') {
      return 'green1'
    }
    if (historyStatus === 'Em andamento') {
      return 'yellow'
    }
    if (historyStatus === 'Interrompida') {
      return 'red1'
    }
    return 'defaultColor'
  }

  return (
    <HistoryOfUserListStyles>
      <td className="historyTask">{historyTask}</td>
      <td className="historyDuration">{historyDuration}</td>
      <td className="historyStarted">{historyStarted}</td>
      <td className="historyStatus">
        <StatusStyle statusColor={theStatusIs()}>{historyStatus}</StatusStyle>
      </td>
    </HistoryOfUserListStyles>
  )
}
