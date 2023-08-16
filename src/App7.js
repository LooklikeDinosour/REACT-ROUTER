import { Route, Routes } from "react-router-dom";
import NewsHome from "./component2/NewsHome";

import Header from './layout/Header';


//43ef142143294c849e08c2caac701754
function App () {

  return (
    <Routes>
      <Route element={ <Header/> }>
        <Route path="/" element={<NewsHome/>} />
        <Route path="/:category" element={<NewsHome/>} />
      </Route>
    </Routes>
  );
}

export default App;