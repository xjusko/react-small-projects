import data from "./data";
import Card from "./components/Card";

function App() {
  const cards = data.map((item) => <Card data={item} />);
  return <div>{cards}</div>;
}

export default App;
