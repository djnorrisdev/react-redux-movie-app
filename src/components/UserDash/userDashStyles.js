import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0 5rem;
  h1 {
    font-size: 3rem;
    letter-spacing: 0.1rem;
    margin: 0 0 4rem;
    text-align: center;
  }
  
`
export const StyledItem = styled.div`
  width: 50vw;
  display: flex;
  justify-content: space-between;
  background: transparent;
  border: 2px solid #656565;
  border-radius: 6px;
  margin-bottom: 1rem;
  &&& .ui.items {
    margin: 0;
  }
  &&& .ui.items>.item>.content>a.header {
    color: #fefefe;
    &:hover {
      cursor: pointer;
      color: #3d90e2;
    }
  }
  &&& .ui.items>.item>.image>img {
    border-radius: 4px 0 0 4px;
  }
  button {
    background: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
`