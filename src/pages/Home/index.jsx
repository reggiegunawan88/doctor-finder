import { useEffect, useState, createContext } from "react";
import { getDoctorData } from "service/APIService";
import { conditionalFilter } from "utils/helper";
import Filter from "components/Filter";
import List from "components/List";

// import conditional component
import { LoadingText } from "./LoadingText";
import { NoResultText } from "./NoResultText";

export const SearchContext = createContext();

function Home() {
  const [userData, setUserData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [filterName, setFilterName] = useState([]);
  const [filterHospital, setFilterHospital] = useState([]);
  const [filterSpecialization, setFilterSpecialization] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      if (!userData.length) {
        getDoctorData().then((resp) => {
          setUserData(resp);
          setSearchResult(resp); // make copy arr for search result, not mutating the original array
        });
      }
    };
    fetchData();
    filterList();
  }, [filterName, filterHospital, filterSpecialization]);

  /**
   *
   * @returns {Object} filtered array of object
   */
  const filterList = () => {
    // filter multiple value based on state
    const result = userData.filter((item) => {
      // send user data and filterValues to helper
      let data = {
        name: item.name.toLowerCase(),
        hospital: item.hospital[0].name,
        specialization: item.specialization.name,
      };
      let filterValues = {
        filterName: filterName,
        filterHospital: filterHospital,
        filterSpecialization: filterSpecialization,
      };
      return conditionalFilter(data, filterValues);
    });

    // if filter value empty, set initial data
    if (!filterName.length && !filterHospital.length && !filterSpecialization.length) {
      return setSearchResult(userData);
    } else {
      setSearchResult(result);
    }
  };

  return (
    <SearchContext.Provider value={{ searchResult, filterList, setFilterName, setFilterHospital, setFilterSpecialization }}>
      <div className="max-w-3xl mx-auto font-sans my-5">
        <div className="flex flex-col gap-y-5">
          <Filter />
          <LoadingText userData={userData} list={<List />} />
          <NoResultText userData={userData} searchResult={searchResult} />
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default Home;
