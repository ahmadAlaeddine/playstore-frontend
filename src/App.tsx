import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./config/routes";
import Footerbar from "./components/footerbar/Footerbar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={
                <>
                    {!route.path.includes("login") && <Navbar />}
                    <route.component />
                    <Footerbar />
                </>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
