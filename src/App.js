import NavBar from "./section/NavBar";
import mainBg from "./assets/img/homeBg.png";
import Welcome from "./section/Welcome";

function App() {
  return (
    <main>
      <NavBar />
      <img className="img cursor-pointer " src={mainBg} />
      <Welcome />
    </main>
  );
}

export default App;
