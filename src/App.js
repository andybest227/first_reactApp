import "./index.css";
import Header from "./components/header";
import Employees from "./pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Customers from "./pages/Customers";
import Dictionary from "./pages/Dictionary";
import Defination from "./pages/Defination";
import NotFound from "./components/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/dictionary/:search" element={<Defination />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Header>
    </BrowserRouter>

  );
}

export default App;
