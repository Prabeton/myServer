import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body{
    /* background: linear-gradient(to bottom, #8B008B, #000000); */
    background-color: #232323;
	  display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: Inter;
    text-align: center;
    margin: 0;
    font-family: Inter;
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
