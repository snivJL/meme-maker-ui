import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Form />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/gallery" component={GalleryPage}></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
