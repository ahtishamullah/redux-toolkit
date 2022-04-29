import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, MovieDetails, PageNotFound, Header, Footer } from "./components";
import "./App.scss";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:imdbID" element={<MovieDetails />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
