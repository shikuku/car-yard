import '../styles/globals.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function MyApp({ Component, pageProps }) {
  return(
<Component {...pageProps} />



  ) 

  
}


export default MyApp
