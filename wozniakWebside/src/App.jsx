import GlobalStyles from "./hooks/GlobalStyle";
import Navbar from "./sections/Navbar";
import MyCard from "./sections/MyCard";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <MyCard />
      <Footer />
    </>
  );
}
export default App;
