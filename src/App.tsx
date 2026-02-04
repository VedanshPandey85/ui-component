import React from 'react';
import { ThemeProvider, useThemeContext } from './components/ThemeProvider/ThemeProvider';
import { Layout } from './components/Layout/Layout';
//this the app .js main entry point
function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
