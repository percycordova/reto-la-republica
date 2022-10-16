import Image from 'next/future/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Section = ({ data }) => {
  const [widthScreen, settWidthScreen] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    settWidthScreen(window.screen.width)
    const detectScreenX = () => settWidthScreen(window.screen.width)
    window.addEventListener('resize', detectScreenX)

    return () => {
      window.removeEventListener('resize', detectScreenX)
    }
  }, [widthScreen])

  return (
    <>
      <div className="max-w-[1350px] grid grid-cols-2  md:grid-cols-5 gap-4  px-5 py-5 md:pt-16 mx-auto">
        {data.map(({ fields }, index) => {
          const [
            { value: category, _id: id },
            { value: title },
            ,
            { value: destination_url },
            { value: image }
          ] = fields
          const isHidden = widthScreen <= 768 && index === 4
          return (
            <article
              key={`${id}-${title}`}
              className={`${
                isHidden && 'hidden'
              }  hover:shadow-lg lg:p-2 hover:rounded-sm ease-linear duration-300`}>
              <a
                href={destination_url}
                target="_black"
                className="hover:opacity-80 ease-linear duration-150">
                <div className="h-[135px] relative w-full mb-4">
                  <Image
                    width={300}
                    height={135}
                    src={image.url}
                    alt={image.alt}
                    className={loaded ? 'unblur' : ''}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onLoadingComplete={() => setLoaded(true)}
                    priority
                  />
                  <style jsx global>{`
                    .unblur {
                      animation: unblur 0.85s linear;
                    }

                    @keyframes unblur {
                      from {
                        filter: blur(10px);
                      }
                      to {
                        filter: blur(0);
                      }
                    }
                  `}</style>
                </div>
              </a>
              <h2>
                <a
                  href={destination_url}
                  target="_black"
                  className="hover:opacity-80 ease-linear duration-150 ">
                  {title}
                </a>
              </h2>

              <p className="text-gray-600 text-[12px] mt-2">Por {category}</p>
            </article>
          )
        })}
      </div>

      <div className="max-w-[1350px] px-5 mx-auto font-bold text-2xl">
        <Link passHref href="https://larepublica.pe/elecciones/ultimas-noticias/" target="_blank">
          Ver más noticias
        </Link>
      </div>
      <div className="h-[3px]  bg-red-600 mt-4"></div>
    </>
  )
}

export default Section
