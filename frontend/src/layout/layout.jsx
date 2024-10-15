import React from 'react'

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Routers from "../routes/Routers";

const layout = () => {
  return (
    <>
    <Header />
    <main>
      <Routers />
    </main>
    <Footer />
    </>
  )
}

export default layout
