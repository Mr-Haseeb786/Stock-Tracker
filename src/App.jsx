import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path='/about' element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
