import React, { useEffect, useState } from 'react'
import BarChart from './BarChart'
import {data} from '../../data/data_02'
const Graphics = () => {
  const [votesData, setVotesData] = useState()
  const [loading, setLoading] = useState(true)

  const generateData = (data) => {
    return new Promise((resolve, rejet) => {
      const bancadas = data.map((el) => el['BANCADA'])
      const newArrayBancadas = new Set(bancadas)
      const labels = [...newArrayBancadas]
      const newArray = []
      for (let i = 0; i < labels.length; i++) {
        let sumaSiVotaron = 0
        let sumaNoVotaron = 0
        data?.forEach((el) => {
          if (labels[i] === el['BANCADA']) {
            if (el['VOTO'] === 'Sí') sumaSiVotaron++
            else sumaNoVotaron++
          }
        })
        newArray.push({
          bancada: labels[i],
          siVotaron: sumaSiVotaron,
          noVotaron: sumaNoVotaron
        })
      }
      resolve(newArray)
    })
  }

  useEffect(() => {
    generateData(data).then((newArray) => {
      setVotesData({
        labels:newArray.map((data) => data.bancada),
        datasets: [
          {
            label: 'Si Votaron',
            data: newArray.map((data) => data.siVotaron),
            backgroundColor: 'blue'
          },
          {
            label: 'No Votaron',
            data: newArray.map((data) => data.noVotaron),
            backgroundColor: 'red'
          }
        ]
      })
    })
    setLoading(false)

  }, [])

  return (
    <>
      <div className="max-w-[1350px] mx-auto px-5">
        <h1 className="text-center font-bold text-2xl my-8">
          ¿Cuántos congresistas asistieron a votar?
        </h1>
        {!loading && <BarChart data={votesData} />}
      </div>
      <div className="h-[3px]  bg-red-600 mt-4"></div>
    </>
  )
}

export default Graphics
