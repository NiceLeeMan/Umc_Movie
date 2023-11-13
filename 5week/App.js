import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home"
import Celebrity from "./pages/Celebrity"
import Tv from "./pages/Tv"
import MovieDetail from "./components/MovieDetail";
import Header from "./Header";

function App() {

  return (

  <div className="root-wrap">
    <BrowserRouter>
        <Header/>
    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Celebrity" element={<Celebrity/>} />
          <Route path="/Tv" element={<Tv/>} />
          <Route path="/Movies" element={<Movies/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
