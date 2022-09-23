import React, {} from 'react';
import Header from "../header/Header";

const DefaultLayout = (props) => {
  return (
    <div className="page-layout">
      <div className="container">
        <Header/>
        <hr/>
        {props.children}
      </div>
    </div>
  )
}

export default DefaultLayout