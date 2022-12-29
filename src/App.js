import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
      <div className="cards-container mt-5 container p-2 mx-auto flex flex-col gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
