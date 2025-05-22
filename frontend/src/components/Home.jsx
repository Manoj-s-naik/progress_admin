import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import MainConten from "./MainConten";

function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Nav />
        <MainConten />
      </div>
    </div>
  );
}

export default Home;
