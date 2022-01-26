import { useState, useContext } from "react";
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import { hospitalOptions } from "utils/const/hospital.js";
import { specializationOptions } from "utils/const/specialization.js";
import { SearchContext } from "pages/Home";

function MultipleCheckbox(props) {
  const searchCtx = useContext(SearchContext);
  const [optionSelected, setOptionSelected] = useState([]);

  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input type="checkbox" checked={props.isSelected} onChange={() => null} /> <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

  const handleChange = (selected) => {
    setOptionSelected(selected);

    // set filter value to context, ex: ['Mitra Keluarga Bintaro', 'Mitra Keluarga Gading Serpong']
    let filterValue = [];
    selected.map((item) => filterValue.push(item.label));
    searchCtx.filterHospital(filterValue);
  };

  return (
    <ReactSelect
      options={props.placeholder === "Hospital" ? hospitalOptions : specializationOptions}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{
        Option,
      }}
      onChange={handleChange}
      allowSelectAll={true}
      value={optionSelected}
      placeholder={props.placeholder}
    />
  );
}

export default MultipleCheckbox;
