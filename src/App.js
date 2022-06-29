import {ErrorPage} from "./components/javascript/404";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./components/javascript/Home";

function App() {
  return (
      <BrowserRouter>
          <Routes path="/the-burger-place/">
              <Route index element={<Home/>}/>
              <Route path="*" element={<ErrorPage/>}/>
          </Routes>
      </BrowserRouter>



  );
}

export default App;
