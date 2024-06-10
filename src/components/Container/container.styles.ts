import styled from 'styled-components'

export const ContainerStyles = styled.div`
  width: 70vw;
  height: 46.5rem;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => props.theme.secundary};
  border-radius: 8px;
  padding: 2.5rem 4rem;

  @media (max-width: 780px) {
    width: 90vw;
    padding: 1rem;
    overflow: auto;
  }
`
