import styled from 'styled-components/macro';
import { rem } from 'polished';
import { Card } from 'semantic-ui-react'

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 5rem;
`

export const InnerWrapper = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: 1fr 1fr 1fr;
  .ui.card {
    box-shadow: none;
    min-height: 100%;
  }
`
export const StyledHeader = styled(Card.Header)`
&&& {
  display: flex;
  justify-content: space-between;
}
`