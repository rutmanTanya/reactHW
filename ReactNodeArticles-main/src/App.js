import { BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import MyRoutes from "./components/MyRoutes";
import ColorBlock from "./components/ColorBlock";
import ActionButton from "./components/ActionButton";
import ImageWithCaption from "./components/ImageCaption";
import "./App.css";



function App() {
  return (
    <div className="App">
      <h1>HW assignment on Props</h1>
      <h2>Submitted by: Tanya Rotman and Alex Lapin</h2>
      <h2>Class 48/6</h2>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
      <ColorBlock color="red" />
      <ActionButton label="Click me" onAction={() => alert("Button clicked!")} />
      <ImageWithCaption
      src="/Users/tr/Downloads/ReactNodeArticles-main/src/assets/img/landscape-9263545_640.jpg"
      caption = "Landscape picture" />
    </div>
  );
}

export default App;
