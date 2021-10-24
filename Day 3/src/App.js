import "./App.css";
import AddButton from "./Components/AddButton";
import Card from "./Components/Card";

function App() {
  const color = "#0f9d58";
  return (
    <div>
      <Card />
      <AddButton color={color} />
    </div>
  );
}

export default App;
