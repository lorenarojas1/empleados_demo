import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import Tabs from './components/Tabs/Tabs';

function App() {
  return (
    <>
    <Header />
    <section className="mt-10 mx-auto w-full p-4 py-6 lg:py-8">
      <Tabs />
    </section>
    <Footer /></>
  );
}

export default App;
