import styled from 'styled-components/macro';
import { Icon } from 'semantic-ui-react';

export const Wrapper = styled.div`
  height: 50%;
  background: #000000e6;
  position: fixed;
  text-align: center;
  color: #ffffff;
  top: 0;
  right: 50%;
  transform: translate(50%,50%);
  border-radius: 6px;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
`

export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #ffffff;
  cursor: pointer;
`