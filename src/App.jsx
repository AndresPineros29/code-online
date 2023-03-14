import { Footer, Blog, WhatCyber, Header } from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatCyber />
      <Brand />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
