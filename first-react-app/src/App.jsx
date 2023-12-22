import React from "react";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Home from "./pages";
import Service from "./pages/service/service";

function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <Service />
        <Footer />
      </div>
    </>
  );
}

export default App;
