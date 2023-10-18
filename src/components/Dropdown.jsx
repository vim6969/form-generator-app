import { useState } from "react";

const Dropdown = ({onDropdownChange}) => {
  const [dropdownTitle, setDropdownTitle] = useState("");
  const [option, setOption] = useState("");
  const [optionsList, setOptionsList] = useState([]);
  const handleInputChange = (e) => {
    if (e.target.name === "dropdownTitle") {
      setDropdownTitle(e.target.value);
      
      onDropdownChange({
        dropdownTitle: e.target.value,
        optionsList
      })
    }
    if (e.target.name === "options") {
      setOption(e.target.value);
    }
  };
  const handleAddOption = () => {
    if (option.trim() !== "") {
      setOptionsList([...optionsList, option]);
      setOption('')
      onDropdownChange({
        dropdownTitle,
        optionsList: [...optionsList,option]
      })
    }
  };
  const handleRemoveOption=(index)=>{
    const updatedOptions = [...optionsList]
    updatedOptions.splice(index,1)
    setOptionsList(updatedOptions)
    onDropdownChange({
        dropdownTitle,
        optionsList: updatedOptions
    })


  }
  return (
    <div>
      <div className="form-floating mt-2">
        <input
          type="text"
          name="dropdownTitle"
          id="dropdownTitle"
          className="form-control"
          value={dropdownTitle}
          onChange={handleInputChange}
        />
        <label htmlFor="dropdownTitle">dropdown title</label>
      </div>
      <div className="row form-floating m-1">
        <input
          type="text"
          name="options"
          id="options"
          className="col-8 form-control"
          value={option}
          onChange={handleInputChange}
        />

        <label htmlFor="options" className="p-3">
          option
        </label>

        <button
          className="col-2 btn btn-outline-dark m-1"
          onClick={handleAddOption}
        >
          +
        </button>
        <div>
          {optionsList.map((option, index) => (
            <div className="row form-floating">
                
              <input
                key={index}
                type="text"
                name={option}
                value={option}
                className="col-auto form-control"
                readOnly
              />
              <button 
              className="col-2 btn btn-outline-dark mt-1"
              onClick={()=>{
                handleRemoveOption(index)
              }}
              >-</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
