import styled from 'styled-components/macro';
import { Button } from 'semantic-ui-react';
import { media } from '../App/appStyles';

export const Wrapper = styled.div`
	&& {
		display: flex;
		justify-content: flex-end;
	}
`;
export const Btn = styled(Button)`
	&&& {
		color: #fefefe;
		background: transparent;
		border: none;
		font-size: 1.4rem;
	}
`;
export const NavMenu = styled.span`
	color: #fafafa;
	${media.tablet`
display: none;
  `}
`;

export const BurgerMenu = styled.div`
padding-right: 1rem;
&&&& {
  .ui.menu {
    background: transparent;
    border: none;
  }
  .ui.menu .dropdown.item .menu {
    background: transparent;
    margin: 0 -1rem 0;
  }
  .ui.menu .ui.dropdown .menu>.item {
    color: #fafafa !important;
    font-size: 1.2rem !important;
  }
}
@media (min-width: 769px) {
  display: none !important;
}

`;
