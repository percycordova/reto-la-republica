import Footer from '../components/footer'
import Header from '../components/header'
import Main from '../components/main'
import Section from '../components/section'

export default function Home({ data }) {
  return (
    <div className=" bg-[#f8f8f8] pb-10">
      <Header />
      <div className="h-[3px] hidden lg:block bg-[#383939] mt-4"></div>
      <Main data={data.slice(0, 5)} />
      <Section data={data.slice(5, 11)} />
      <Footer />
    </div>
  )
}

Home.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
    .then((res) => res.json())
    .then((response) => {
      return {
        data: response.data[0].data
      }
    })
}
