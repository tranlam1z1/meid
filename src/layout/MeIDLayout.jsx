import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from '../components/layout/Header'
import Navbar from '../components/layout/Navbar'
import Content from '../components/layout/Content'
import routerList from '../router/router'
import Footer from '../components/layout/Footer';

function MeIDLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Content />
      <Routes>
        {routerList.map((item, index) => (
          <Route key={index} path={item.path} element={item.component} />
        ))}
      </Routes>
      <Footer />
    </div>
  )
}

export default MeIDLayout
