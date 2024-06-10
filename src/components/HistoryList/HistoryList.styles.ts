import styled from 'styled-components'

export const HistoryOfUserListStyles = styled.tr`
  td {
    background-color: ${(props) => props.theme.gray6};
    padding: 1rem;
    line-height: 1.6;
    border-top: 4px solid ${(props) => props.theme.secundary};

    &:first-child {
      padding-left: 1.5rem;
      width: 40%;
    }
    &:last-child {
      padding-right: 1.5rem;
    }
  }
`

interface StatusProps {
  statusColor: 'yellow' | 'red1' | 'green1' | 'defaultColor'
}

export const StatusStyle = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[props.statusColor]};
  }
`
