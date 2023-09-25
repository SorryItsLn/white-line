import NavBar from "./section/NavBar";
import mainBg from "./assets/img/homeBg.png";
import Welcome from "./section/Welcome";
import bgSecond from "./assets/img/bgSecond.png";
import ShopOur from "./section/ShopOur";

function App() {
  return (
    <main>
      <NavBar />
      <img className="w-full cursor-pointer " src={mainBg} alt="mainBg" />
      <Welcome />
      <img
        className=" cursor-pointer scale-100  w-full"
        src={bgSecond}
        alt="bgSecond"
      />
      <ShopOur />
    </main>
  );
}

export default App;
