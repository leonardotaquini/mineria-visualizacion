import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import { Grafico } from "../components/Grafico";
// import { Navbar } from "../components/Navbar";
// import { Sidebar } from "../components/Sidebar";

export const Home = () => {
  const [stats, setStats] = useState({});
  const [meanSpeedByYear, setMeanSpeedByYear] = useState({});
  const [loading, setLoading] = useState(true);

  const URL = import.meta.env.VITE_HOSTURL;

  const getStats = async () => {
    const { data } = await axios.get(URL);
    setStats(data.stats);
    setMeanSpeedByYear(data.mean_speed_by_year);
    if (data) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStats();
  }, []);
  ;
  return (
    <section className=" col-11 col-sm-8 col-lg-6  m-auto  h-100">
        <h1 className="text text-center mb-2 mt-2">Estadisticas del viento</h1>
        <p className="text-center mt-4">
        En esta sección se muestran las estadisticas del viento en la ciudad de Buenos Aires.
          Se puede observar la velocidad media, mínima, máxima y los percentiles 25%, 50% y 75%.
          Además, se puede observar la velocidad media por año.
        </p>
      <div className="d-flex justify-content-center align-items-center flex-column h-100">
          {
            loading
              ? <Spinner />
              : <Grafico stats={stats} meanSpeedByYear={meanSpeedByYear} />
          }
      </div>
    </section>
  );
};
