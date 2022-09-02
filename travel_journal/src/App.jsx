import data from "./data";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const cards = data.map((item) => <Card data={item} />);
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
