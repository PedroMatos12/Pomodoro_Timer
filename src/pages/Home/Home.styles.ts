import styled from 'styled-components'

export const HomeFormStyles = styled.form`
  max-width: 100%;
`

/* também daria para utilizar uma propriedade para passar a cor do botão pelo html e evitar ter que criar uma nova estilização, porém
o html ficaria com ainda mais coisa */

export const BaseButtonStyles = styled.button`
  width: 100%;
  padding: 1rem 0;
  border: none;
  border-radius: 10px;
  margin: 0 auto;
  gap: 7px;
  margin-top: 2.5rem;
  color: ${(props) => props.theme.gray1};
  cursor: pointer;
  transition: 0.2s;

  &:not(:disabled):hover {
    color: ${(props) => props.theme.gray1};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartButtonStyles = styled(BaseButtonStyles)`
  background-color: ${(props) => props.theme.green2};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.green3};
  }
`

export const StopButtonStyles = styled(BaseButtonStyles)`
  background-color: ${(props) => props.theme.red1};

  &:hover {
    background-color: ${(props) => props.theme.red2};
  }
`
