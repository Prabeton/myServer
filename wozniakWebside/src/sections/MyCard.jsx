import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 600px;
  max-width: 1440px;
  border: 1px solid #500014;
  border-radius: 4px;
  margin-top: 4px;
  padding: 10px;
  box-sizing: border-box;
`;

const Card = styled.div`
  width: 600px;
  height: 200px;
  border: 1px solid #500014;
  border-radius: 4px;
  text-align: left;
  font-weight: 600;
  padding: 5px;
`;

const Title = styled.p`
  margin: 0;
  font-size: 18px;
  margin-bottom: 5px;
`;

const P = styled.p`
  margin: 0;
  margin-top: 5px;
  font-size: 12px;
`;
const MyCard = () => {
  return (
    <>
      <Container>
        <Card>
          <Title>Przemysław Woźniak</Title>
          <P>M.Sc. in Medical Physics, University of Lódź, 2004</P>
          <P>
            Postgraduate Studies in Computer Science, Faculty of Mathematics,
            University of Łódź, 2007
          </P>
          <P>www.wozniak.website</P>
          <P>email: 3846205@gmail.com</P>
          <P>tel: 517-560-254</P>

          <P>age: 46</P>
        </Card>
      </Container>
    </>
  );
};
export default MyCard;
