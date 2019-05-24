import styled from 'styled-components/macro';
import { Button } from 'semantic-ui-react'

export const Wrapper = styled.div`
  && {
    display: flex;
    justify-content: flex-end;
  }
`
export const Btn = styled(Button)`
  &&& {
    color: #fefefe;
    background: transparent;
    border: none;
    font-size: 1.4rem;
  }
`