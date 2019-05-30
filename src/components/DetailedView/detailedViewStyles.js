import styled from 'styled-components/macro';
import { media } from '../App/appStyles'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 5rem;
color: #fafafa;
div {
  padding: 3rem 5rem 0 5rem;
  text-align: center;
  ${media.phone`
      padding: 2rem 0 2rem 0;
  `}
  p{
    padding: 0 3rem;
    font-size: 1.2rem;
    text-align: center;
    ${media.phone`
      padding: 0;
  `}
  }
  span {
    font-weight: 400;
  }
}
button {
  background: transparent;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  color: #fafafa;
  margin-top: 3rem;
  cursor: pointer;
}
`
