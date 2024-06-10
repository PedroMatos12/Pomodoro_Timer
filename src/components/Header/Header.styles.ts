import styled from 'styled-components'

export const HeaderStyles = styled.header`
  display: flex;
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 2.5rem;
  padding: 0 4rem;

  .logo {
    width: 2.5rem;
    height: 2.5rem;
  }

  .navBar {
    color: ${(props) => props.theme.defaultColor};
    display: flex;
    text-align: center;
    gap: 0.5rem;

    .timerLink,
    .scrollLink {
      color: ${(props) => props.theme.defaultColor};
      width: 3rem;
      /* height: 3rem; */
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: 0.1s;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.green1};
      }

      &.active {
        color: ${(props) => props.theme.green1};
      }
    }
  }

  @media (max-width: 780px) {
    padding: 1rem;
    top: 1rem;
  }
`
