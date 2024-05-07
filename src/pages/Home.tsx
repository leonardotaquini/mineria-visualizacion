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
    <section className=" col-12 col-sm-6 col-lg-6 m-auto">
      <h1 className="text text-center mb-2">Estadisticas del viento</h1>
      <p>En esta sección se muestran las estadisticas del viento en la ciudad de Buenos Aires.
        Se puede observar la velocidad media, mínima, máxima y los percentiles 25%, 50% y 75%.
        Además, se puede observar la velocidad media por año.</p>
      {
        loading
          ? <Spinner />
          : <Grafico stats={stats} meanSpeedByYear={meanSpeedByYear} />
      }
    </section>
  );
};
