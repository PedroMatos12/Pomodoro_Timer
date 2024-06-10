import styled from 'styled-components'

export const FormHeaderStyles = styled.div`
  gap: 0.5rem;
  color: ${(props) => props.theme.gray1};
  margin-bottom: 3.3rem;
  height: 2.5rem;

  .deductOrAdd {
    border-bottom: 3px solid ${(props) => props.theme.gray3};
    font-size: inherit;

    button {
      border: none;
      background: none;
      color: ${(props) => props.theme.gray3};
      cursor: pointer;
    }

    &:focus-within {
      border-color: ${(props) => props.theme.green2};
    }
  }

  @media (max-width: 780px) {
    font-size: 0.6rem;
    justify-content: flex-start;
  }
`
const BaseInput = styled.input`
  border: none;
  background: none;
  color: ${(props) => props.theme.gray1};
  height: 2rem;
  outline: 0;

  &:focus {
    border-color: ${(props) => props.theme.green2};
  }

  @media (max-width: 780px) {
    font-size: 0.6rem;
    max-width: 3rem;
  }
`

export const InputNameOfProjectStyles = styled(BaseInput)`
  border-bottom: 3px solid ${(props) => props.theme.gray3};
  flex: 1;
  text-align: center;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const InputTimeOfWorkStyles = styled(BaseInput)`
  text-align: center;
  -moz-appearance: textfield;
  width: 2rem;
  padding-left: 4px;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
  }
`
