import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((cardData) => (
    <Card key={cardData.key} cardData={cardData} />
  ));
  return (
    <div className="container">
      <Header />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
