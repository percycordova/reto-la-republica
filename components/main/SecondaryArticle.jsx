import React from 'react'

const SecondaryArticle = ({ data }) => {
  return (
    <div className="lg:w-5/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1  gap-5 lg:gap-0">
      {data.map(({ fields }) => {
        const [{ value: category, _id: id }, { value: title }, , { value: destination_url }] =
          fields
        return (
          <article
            key={`${id}-${title}`}
            className=" border-b py-4 hover:shadow-lg  hover:rounded-sm duration-300 ease-linear">
            <div className="border-l-[3px] border-l-red-600 pl-4">
              <h2>
                <a
                  href={destination_url}
                  target="_black"
                  className="hover:opacity-80 ease-linear duration-150">
                  {title}
                </a>
              </h2>
              <p className="text-gray-600 text-[12px] mt-2">Por {category}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default SecondaryArticle
