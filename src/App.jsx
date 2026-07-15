import "./App.css";
import Banner from "./components/Banner/banner";
import Classes from "./components/Classes/classes";
import Header from "./components/Header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Client from "./pages/Client/Client";
import ContactPage from "./pages/Contact/Contact";
import UseState from "./components/UseState/UseState";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Client />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
    // <UseState />
    // <Todo />
  );
}

export default App;
