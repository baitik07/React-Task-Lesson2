import { Button } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import "../src/App.css";

function App() {
  const baatyry = [
    {
      name: "Манас",
      lastName: "Айтекеев",
      age: 25,
      id: 1,
    },
    {
      name: "Сейтек",
      lastName: "Матекеев",
      age: 32,
      id: 2,
    },
    {
      name: "Кантемир",
      lastName: "Дастанов",
      age: 41,
      id: 3,
    },
    {
      name: "Алтынбек",
      lastName: "Торобеков",
      age: 28,
      id: 4,
    },
    {
      name: "Чынгыз",
      lastName: "Тарыков",
      age: 37,
      id: 5,
    },
    {
      name: "Курманжан",
      lastName: "Датка Алай",
      age: 60,
      id: 6,
    },
    {
      name: "Кулубек",
      lastName: "Торо",
      age: 22,
      id: 7,
    },
    {
      name: "Сайна",
      lastName: "Каныбеков",
      age: 29,
      id: 8,
    },
    {
      name: "Узбек",
      lastName: "Торо",
      age: 35,
      id: 9,
    },
  ];

  return (
    <div className="App">
      <Header />
      <Section baatyry={baatyry} />
      <Footer />
    </div>
  );
}

export default App;
