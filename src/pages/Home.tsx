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
    <section className="vh-100 d-flex flex-column">
        {
          loading
            ? <Spinner />
            : <Grafico stats={stats} meanSpeedByYear={meanSpeedByYear} />
        }
    </section>
  );
};
