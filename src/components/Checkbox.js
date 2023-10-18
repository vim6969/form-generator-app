import { useState } from "react";

const Checkbox = ({ onCheckboxChange }) => {
  const [option, setOption] = useState("");
  const [optionList, setOptionList] = useState([]);
  const handleInputChange = (e) => {
    setOption(e.target.value);
    
  };
  const handleAddOption = () => {
    setOptionList([...optionList, option]);
    setOption('')
    onCheckboxChange({
      optionList: [...optionList, option],
    });
  };
  const handleRemoveOption=(index)=>{
    const updatedOptionList = [...optionList]
    updatedOptionList.splice(index,1)
    setOptionList(updatedOptionList)
  }
  return (
    <div className="form-floating mt-2">
      <input
        type="text"
        name="checkOption"
        id="checkOption"
        className="form-control"
        value={option}
        onChange={handleInputChange}
      />
      <label htmlFor="checkOption">check option</label>
      <button 
        className="btn btn-outline-dark m-2" 
        onClick={handleAddOption}
        >
        +
      </button>
      <div>
        {optionList.map((option, index) => (
          <div>
            <input
              key={index}
              type="text"
              readOnly
              className="form-control"
              value={option}
            />
            <button 
                className="btn btn-outline-dark mt-2"
                onClick={()=>handleRemoveOption(index)}
                >-</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Checkbox;
