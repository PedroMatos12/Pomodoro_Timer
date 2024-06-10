import styled from 'styled-components'

export const NotFoundStyles = styled.div`
  color: ${(props) => props.theme.gray1};

  p {
    font-size: 20rem;
    color: ${(props) => props.theme.red1};
  }

  @media (max-width: 620px) {
    p {
      font-size: 7rem;
    }
  }
`
