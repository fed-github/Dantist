import { React, useState } from "react";
import AppNav from "./Layout/Navigation/AppNav";
import AppMain from "./Layout/Main/AppMain";
import "./main.css";

// import { ThemeProvider } from "@mui/material/styles";
// import { createTheme} from "@mui/material/styles";
// import { PaletteMode } from '@mui/material/styles';

function App() {
  return (
    <div>
      {" "}
      <AppNav />
      <AppMain />
    </div>

    //   <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    // </ThemeProvider>
  );
}

export default App;
