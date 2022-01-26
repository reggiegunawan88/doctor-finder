import { useEffect, useState } from "react";
import { getDoctorData } from "service/APIService";
import Filter from "components/Filter";
import List from "components/List";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getDoctorData().then((resp) => {
      setData(resp);
    });
  };

  return (
    <div className="max-w-3xl mx-auto font-sans my-5">
      <div className="flex flex-col gap-y-5">
        <Filter />
        {/* conditional rendering if state is still empty */}
        {data.length > 0 ? (
          <List listData={data} />
        ) : (
          <div className="text-center">
            <p className="text-4xl">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
