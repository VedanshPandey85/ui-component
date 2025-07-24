import React from 'react';
import { ThemeProvider, useThemeContext } from './components/ThemeProvider/ThemeProvider';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;