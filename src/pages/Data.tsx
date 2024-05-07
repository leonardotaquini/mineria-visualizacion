import { useEffect, useState } from 'react'
import { Spinner } from '../components/Spinner';
import axios from 'axios';
import { ResponseData } from '../types/response.interface';

export const Data = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({} as ResponseData);

  const URL = import.meta.env.VITE_HOSTURL;

  const getStats = async () => {
    const { data } = await axios.get(URL);
    setData(data.data);
    if (data) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStats();
  }, []);
  ;
  return (
    <div className=" col-12 col-sm-6 col-lg-6 m-auto">
      <h1>Datos dias del viento</h1>
      <p>En esta sección se pueden ver los registros diaros del viento en la ciudad de Buenos Aires durante los ultimos 30 años (1991-2021)</p>
      {
        loading
          ? <Spinner /> :
          
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Nudos</th>
                <th scope="col">Km/h</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(data.fecha).map((key) => (
                  <tr key={key}>
                    <td>{data.fecha[key]}</td>
                    <td>{data.nudos[key]}</td>
                    <td>{data["km/h"][key]}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          
      }
    </div>
  )
}
