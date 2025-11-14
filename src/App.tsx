import "./App.css";
import Bear from "./components/Bear/Bear";
import FoodBox from "./components/Food/FoodBox";

function App() {
  return (
    <>
      <h1>ZUSTAND</h1>
      <div style={{display: "flex" , gap: "50px", justifyContent: "center", alignItems: "center"}}>
    
        <Bear />

        <FoodBox />
      </div>
    </>
  );
}

export default App;
