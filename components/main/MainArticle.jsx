import React, { useState } from 'react'
import Image from 'next/future/image'
const MainArticle = ({ data }) => {
  const [{ value: category }, { value: title }, , { value: destination_url }, { value: image }] =
    data.fields
  return (
    <a
      href={destination_url}
      target="_black"
      className="lg:w-7/12 relative hover:opacity-80 duration-300 ease-out lg:flex-row flex-col flex justify-end hover:shadow-lg  hover:rounded-sm ">
      <div className="relative lg:w-[70%] ">
        <Image
          width={1000}
          height={135}
          src={image.url}
          alt={image.alt}
          priority
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        <div className="absolute lg:hidden bottom-0 w-36 bg-white pt-5">
          <div className="w-28 h-2 bg-red-600 a"></div>
        </div>
      </div>

      <div className="lg:absolute bottom-0 lg:max-w-[380px] left-0 bg-white py-4 lg:py-0   px-3">
        <div className="w-28 h-2 mb-4 bg-red-600 hidden lg:block"></div>
        <h1 className="text-2xl  lg:text-3xl font-medium">{title}</h1>
        <p className="text-gray-600 text-[12px] mt-2 mb-4"> Por {category}</p>
      </div>
    </a>
  )
}

export default MainArticle
