import React from "react";
import Home from "./pages/home";
import { users } from "./data/index";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Decremend from "./pages/ind-dec/decremend";
import Indec from "./pages/ind-dec";

const App = () => {
  return (
    <>
      <Header />

      <Home users={users} />

      <Indec />

      <Footer />
    </>
  );
};

export default App;
