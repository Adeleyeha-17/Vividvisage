import {Fragment} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Search} from "./pages/Search";
import { Layout } from "./layout/layout";

function App() {
   return (
      <Fragment>
         <BrowserRouter>
            <Routes>
               <Route exact path="/"
                  element={
                     <Layout><Home/></Layout>
                  }/>
               <Route path="/about"
                  element={
                     <Layout><About/></Layout>
                  }/>
               <Route path="/search"
                  element={
                     <Layout><Search/></Layout>
                  }/>
            </Routes>
         </BrowserRouter>
      </Fragment>
   );
}

export default App;
