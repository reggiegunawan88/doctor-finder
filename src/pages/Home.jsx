import { useEffect, useState, createContext } from "react";
import { getDoctorData } from "service/APIService";
import Filter from "components/Filter";
import List from "components/List";

export const SearchContext = createContext();

function Home() {
  const [userData, setUserData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      if (!userData.length) {
        getDoctorData().then((resp) => {
          setUserData(resp);
          setSearchResult(resp); // make copy arr for search
        });
      }
    };
    fetchData();
  }, [searchResult]);

  const searchName = (value) => {
    // search name from initial userData
    const result = userData.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setSearchResult(result);
  };

  const filterHospital = (value) => {
    console.log(value);
    // filter hospital initial from userData
    const result = userData.filter((item) => {
      var hospital = item.hospital[0].name;
      console.log(hospital);
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    // setSearchResult(result);
  };

  return (
    <SearchContext.Provider value={{ searchResult, searchName, filterHospital }}>
      <div className="max-w-3xl mx-auto font-sans my-5">
        <div className="flex flex-col gap-y-5">
          <Filter />
          {/* conditional rendering if state is still empty */}
          {userData.length > 0 ? <List /> : <p className="text-center text-4xl">Loading...</p>}
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default Home;
