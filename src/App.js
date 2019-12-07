import React from 'react';
import './App.css';
import BasicForm from "./component/form/form";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Raleway", "Montserrat", "sans-serif"].join(",")
  },
})

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <BasicForm></BasicForm>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
