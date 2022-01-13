import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Components/Styles/GlobalStyles";
import theme from "./Components/Styles/theme.js";
import { OuterContainer } from "./Components/Styles/OuterContainer.styled";
import Nav from './Components/Nav';
import Explore from './Views/Explore';
import Orders from './Views/Orders';
import Restaurant from './Views/Restaurant';
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <OuterContainer>
        <Nav />
        <Routes>
            <Route path='/explore' element={<Explore />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/restaurant' element={<Restaurant />} />
          </Routes>
      </OuterContainer>
    </ThemeProvider>
  )
}

export default App;
