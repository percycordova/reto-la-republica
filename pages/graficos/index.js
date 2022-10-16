import React from 'react'
import Footer from '../../components/footer'
import Graphics from '../../components/graphics'
import Header from '../../components/header'

const Graficos = ({ data }) => {
  return (
    <div className=" bg-[#f8f8f8] pb-10">
      <Header />
      <div className="h-[3px] hidden lg:block bg-[#383939] mt-4"></div>
      <Graphics data={data} />
      <Footer />
    </div>
  )
}

export default Graficos

Graficos.getInitialProps = () => {
  return fetch('https://reto-la-republica.vercel.app/api/graphics')
    .then((res) => res.json())
    .then((response) => {
      return {
        data: response
      }
    })
}
