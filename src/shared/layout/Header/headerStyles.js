import styled from 'styled-components/macro';
import { rem } from 'polished';

export const Wrapper = styled.div`
  width: 100%;
  background: #333333;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: center;
  }
  h1 {
    padding: 1rem 0 1rem 1rem;
    margin-bottom: 0;
    font-size: 2.5rem;
    letter-spacing: 0.7px;
    color: #fafafa;
    font-family: 'Lobster', cursive;
  }
`