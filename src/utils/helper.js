// helper for reusable functions

/**
 * Clear HTML tags and entities into clean string
 * @param {String} str ex: <span>ABCDE</span>
 * @returns {String} ABCDE
 */
export const clearHTMLTag = (str) => {
  // Create a temp div element
  var tempDivElement = document.createElement("div");
  // Set the HTML content with param value
  tempDivElement.innerHTML = str;
  // Return the text property of the element
  return tempDivElement.textContent || tempDivElement.innerText || "";
};

/**
 * Query filter of each user data by single/multiple values
 * @param {Object} data => doctor data
 * @param {Object} filter => applied filter values
 * @returns {Object} result => filter result
 */
export const conditionalFilter = (data, filter) => {
  /* single filter */
  // filter name
  if (filter.filterName.length && !filter.filterHospital.length && !filter.filterSpecialization.length) {
    return data.name.includes(filter.filterName);
  }
  // filter hospital
  else if (!filter.filterName.length && filter.filterHospital.length && !filter.filterSpecialization.length) {
    return filter.filterHospital.indexOf(data.hospital) > -1;
  }
  // filter specialization
  else if (!filter.filterName.length && !filter.filterHospital.length && filter.filterSpecialization.length) {
    return filter.filterSpecialization.indexOf(data.specialization) > -1;
  }

  /* multiple filter */
  // filter name & hospital
  else if (filter.filterName.length && filter.filterHospital.length && !filter.filterSpecialization.length) {
    return data.name.includes(filter.filterName) && filter.filterHospital.indexOf(data.hospital) > -1;
  }
  // filter name & specialization
  else if (filter.filterName.length && !filter.filterHospital.length && filter.filterSpecialization.length) {
    return data.name.includes(filter.filterName) && filter.filterSpecialization.indexOf(data.specialization) > -1;
  }
  // filter hospital & specialization
  else if (!filter.filterName.length && filter.filterHospital.length && filter.filterSpecialization.length) {
    return filter.filterHospital.indexOf(data.hospital) > -1 && filter.filterSpecialization.indexOf(data.specialization) > -1;
  }
  // filter all values
  else {
    return data.name.includes(filter.filterName) && filter.filterHospital.indexOf(data.hospital) > -1 && filter.filterSpecialization.indexOf(data.specialization) > -1;
  }
};
