import React, {} from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";

const DefaultLayout = (props) => {
  return (
    <div className="page-layout">
      <div className="container">
        <Header/>
        <hr/>
        {props.children}
        <Footer/>
      </div>
    </div>
  )
}

export default DefaultLayout