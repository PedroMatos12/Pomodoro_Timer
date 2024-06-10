import styled from 'styled-components'

export const HistoryStyles = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
  margin-top: 7rem;
  padding: 1rem;

  color: ${(props) => props.theme.gray1};

  text-align: left;

  h1 {
    font-size: 1.5rem;
  }
`
export const HistoryTableStyles = styled.div`
  height: 31rem;
  overflow: auto;
  margin-top: 2rem;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.gray4};
    border-radius: 20px;
  }

  table {
    min-width: 600px;
    width: 100%;
    border-collapse: collapse;

    th {
      background-color: ${(props) => props.theme.gray5};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme.gray6};
      padding: 1rem;
      line-height: 1.6;
      border-top: 4px solid ${(props) => props.theme.secundary};

      &:first-child {
        padding-left: 1.5rem;
        width: 40%;
        word-break: break-all;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

interface StatusColorProps {
  statuscolor: 'red1' | 'green1' | 'yellow'
}

export const StatusStyle = styled.span<StatusColorProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[props.statuscolor]};
  }
`
