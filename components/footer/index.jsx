import Image from 'next/future/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="max-w-[1350px] mx-auto px-5 py-10">
      <div className="flex flex-col gap-10 lg:gap-0 w-full md:flex-row md:max-w-full  max-w-[510px] lg:max-w-[1000px] mx-auto">
        <div className="md:border-none border-gray-500 grid grid-cols-2 lg:grid-cols-6 text-xs gap-y-4 pb-5 border-b  md:w-8/12 lg:w-9/12">
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">
            Últimas noticias
          </a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">Política</a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">
            Elecciones 2022
          </a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">Economía</a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">Sociedad</a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">Deportes</a>

          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">
            Espectáculos
          </a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">
            Cine & Series
          </a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">Mundo</a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">Tendencias</a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">Tecnología</a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">
            Cultura Asiática
          </a>

          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">Columnistas</a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">Verificador</a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">Datos LR</a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">Argentina</a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">México</a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">Venezuela</a>

          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">
            Loterías y sorteos
          </a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">
            Feriados 2022
          </a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">
            Horóscopo chino
          </a>
          <a className="hover:text-blue-600 cursor-pointer ease-linear duration-200">
            Nombre del Año 2022
          </a>
        </div>
        <div className="text-[#212529] text-xs flex flex-col items-center gap-[6px] md:w-4/12 lg:w-3/12 text-center md:pl-5 md:border-l border-gray-600">
          <Image
            width={220}
            height={36}
            src="/footer/larepublica-01.svg"
            alt="Logo La República"
            priority
          />
          <p>©Todos los derechos reservados - 2022</p>
          <p className="hover:text-blue-600 cursor-pointer ease-linear duration-200">
            Políticas y estándares -Términos de Uso
          </p>
          <p className="hover:text-blue-600 cursor-pointer ease-linear duration-200">Contáctenos</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
