import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
    }

		html,	body {
			background-color: ${({theme}) => theme.body};
			color: ${props => props.theme.text};   
			margin: 0px;
			height: 100%;
			font-family: 'Inter', sans-serif;
			font-family: 'Poppins', sans-serif;
		}
		
`