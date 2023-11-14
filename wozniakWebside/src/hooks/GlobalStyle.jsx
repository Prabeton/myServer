import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body{
    background-color: ${(props) => (props.isDarkTheme ? "#111928" : "#FFFACD")};
    color: ${(props) => (props.isDarkTheme ? "#fff" : "#500014")};
	display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: Inter;
    text-align: center;
    margin: 0;
  }
`;

const GlobalStyles = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};
export default GlobalStyles;
