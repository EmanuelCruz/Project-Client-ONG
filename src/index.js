import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.css";
import theme from "./style/theme";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
            </MuiThemeProvider>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
