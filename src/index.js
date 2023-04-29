import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import "./App.css"
import App from "./App";

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://cwarmer246.codilar.in//graphql',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    fetchOptions: {
      mode: 'no-cors'
    }
  }),
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );