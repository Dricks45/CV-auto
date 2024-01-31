import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import "./css/App.css";

function App() {
  return (
    <div className="container_app">
      <header className="header_app">
        <h1 className="title_app">CVExpresso</h1>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p className="foot_app">&copy; Cédric 2024</p>
      </footer>
    </div>
  );
}

export default App;
