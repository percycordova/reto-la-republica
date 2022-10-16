import React from 'react'
import MainArticle from './MainArticle'
import SecondaryArticle from './SecondaryArticle'

const Main = ({ data }) => {
  return (
    <div className="max-w-[1350px] flex  flex-col lg:flex-row justify-start mx-auto gap-10 mt-5 px-5">
      <MainArticle data={data[0]} />
      <SecondaryArticle data={data.slice(1, 5)} />
    </div>
  )
}

export default Main
