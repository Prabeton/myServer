import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  width: 1440px;
  max-width: 1440px;
  height: 65px;
  border: 1px solid #500014;
  border-radius: 4px;
  box-sizing: border-box;

  @media (min-width: 1280px) and (max-width: 1440px) {
    max-width: 1440px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    max-width: 768px;
  }
  @media (max-width: 640px) {
    max-width: 640px;
  }
`;

const Navbar = () => {
  return <Container></Container>;
};
export default Navbar;
