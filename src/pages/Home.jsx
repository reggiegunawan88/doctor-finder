import { useEffect, useState, createContext } from "react";
import { getDoctorData } from "service/APIService";
import Filter from "components/Filter";
import List from "components/List";

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
    filterDropdown();
  }, [filterName, filterHospital, filterSpecialization]);

  /**
   *
   * @returns filtered array of object
   */
  const filterDropdown = () => {
    // filter multiple value based on state
    const result = userData.filter((item) => {
      var name = item.name.toLowerCase();
      var hospital = item.hospital[0].name;
      var specialization = item.specialization.name;

      /* single filter */
      if (filterName.length && !filterHospital.length && !filterSpecialization.length) {
        return name.includes(filterName);
      } else if (!filterName.length && filterHospital.length && !filterSpecialization.length) {
        return filterHospital.indexOf(hospital) > -1;
      } else if (!filterName.length && !filterHospital.length && filterSpecialization.length) {
        return filterSpecialization.indexOf(specialization) > -1;
      }

      /* multiple filter */
      // filter name & hospital
      else if (filterName.length && filterHospital.length && !filterSpecialization.length) {
        return name.includes(filterName) && filterHospital.indexOf(hospital) > -1;
      }
      // filter name & specialization
      else if (filterName.length && !filterHospital.length && filterSpecialization.length) {
        return name.includes(filterName) && filterSpecialization.indexOf(specialization) > -1;
      }
      // filter hospital & specialization
      else if (!filterName.length && filterHospital.length && filterSpecialization.length) {
        return filterHospital.indexOf(hospital) > -1 && filterSpecialization.indexOf(specialization) > -1;
      }
      // filter name, hospital, & specialization
      else {
        return name.includes(filterName) && filterHospital.indexOf(hospital) > -1 && filterSpecialization.indexOf(specialization) > -1;
      }
    });

    // if filter value empty, set initial data
    if (!filterName.length && !filterHospital.length && !filterSpecialization.length) {
      return setSearchResult(userData);
    } else {
      setSearchResult(result);
    }
  };

  /* conditional rendering component */
  const LoadingText = () => {
    if (userData.length > 0) {
      return <List />;
    } else {
      return <p className="text-center text-4xl">Loading...</p>;
    }
  };

  const NoResultText = () => {
    if (userData.length > 0 && searchResult.length === 0) {
      return <p className="text-center text-4xl">No result found.</p>;
    } else {
      return <></>;
    }
  };

  return (
    <SearchContext.Provider value={{ searchResult, filterDropdown, setFilterName, setFilterHospital, setFilterSpecialization }}>
      <div className="max-w-3xl mx-auto font-sans my-5">
        <div className="flex flex-col gap-y-5">
          <Filter />
          <LoadingText />
          <NoResultText />
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default Home;
