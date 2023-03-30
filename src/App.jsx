import Login from "./pages/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import CheckAuth from "./components/CheckAuth";
import Layout from "./components/Layout";
import CheckManager from "./components/CheckManager";
import Manager from "./pages/Manager";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Login />} />
            <Route path="auth" element={<CheckAuth />}>
              <Route path="" element={<Welcome />} />
            </Route>
            <Route path="manager" element={<CheckManager />}>
              <Route path="" element={<Manager />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
