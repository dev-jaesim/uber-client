import React from 'react';
import { ApolloProvider } from "react-apollo";
import ReactDOM from 'react-dom';
import App from "./Components/App";
import client from "./apollo";
import GlobalStyle from "./global-styles";
import "./global-styles";

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
        <GlobalStyle />
    </ApolloProvider>,
    document.getElementById("root") as HTMLElement
);