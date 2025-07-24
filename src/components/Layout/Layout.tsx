import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState('Buttons');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar 
          selectedComponent={selectedComponent}
          onComponentSelect={setSelectedComponent}
        />
        <div className="flex-1 flex flex-col">
          <MainContent selectedComponent={selectedComponent} />
          <Footer />
        </div>
      </div>
    </div>
  );
};