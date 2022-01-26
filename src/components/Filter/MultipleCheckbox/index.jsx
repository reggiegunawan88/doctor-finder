import { useState } from "react";
import { components } from "react-select";
import { default as ReactSelect } from "react-select";
import { colourOptions } from "./data.js";

function MultipleCheckbox(props) {
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
  };

  return (
    <ReactSelect
      options={colourOptions}
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
