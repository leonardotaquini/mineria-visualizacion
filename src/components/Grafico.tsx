import { Bar, Line } from "react-chartjs-2";
import { EstadisticaProps } from "../types/stats";
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarElement } from "chart.js";
ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarElement);


export const Grafico = ({ stats, meanSpeedByYear }: EstadisticaProps ) => {

  const lineData = {
    labels: Object.keys(meanSpeedByYear),
    datasets: [
      {
        label: 'Velocidad media por año',
        data: Object.values(meanSpeedByYear),
        tension: 0.5,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: "rgba(75,192,192,1)",
        pointRadius: 5,
        pointBorderColor: 'rgba(75,192,192,.2)',
        pointBackgroundColor: 'rgba(75,192,192,0.4)',
      }
    ]
  }

  const barData = {
    labels: ["Mean", "Min", "25%", "50%", "75%", "Max"],
    datasets: [
      {
        label: "Estadísticas",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.8)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [
          stats.mean,
          stats.min,
          stats["25%"],
          stats["50%"],
          stats["75%"],
          stats.max,
        ],
      },
    ],
  }

  const optionsLine = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Velocidad del viento (km/h)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Año'
        }
      }
    }
  }


  const optionsBar = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Velocidad del viento (km/h)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Estadisticas del viento'
        }
      }
    }
  }

  return (
    <>
      <div className=" col-12 col-sm-6 col-lg-6 m-auto">
        <Line data={ lineData } options={ optionsLine }/>
        <Bar data={ barData } options={ optionsBar }/>

      </div>
    </>
  )
}
