import { useState } from "react";
const Radio = ({onRadioChange}) => {
  const [option, setOption] = useState("");
  const [optionList, setOptionList] = useState([]);
  const handleInputChange = (e) => {
    setOption(e.target.value);
  };
  const handleAddOption = () => {
    setOptionList([...optionList, option]);
    setOption("");
    onRadioChange({
        optionList: [...optionList, option]
    })
  };
  const handleRemoveOption=(index)=>{
    const updatedList = [...optionList]
    updatedList.splice(index,1)
    setOptionList(updatedList)
  }
  return (
    <div>
      <div className="form-floating">
        <input
          type="text"
          name="radioOption"
          id="radioOption"
          className="form-control"
          value={option}
          onChange={handleInputChange}
        />
        <label htmlFor="radioOption">radio option</label>
        <button className="btn btn-outline-dark" onClick={handleAddOption}>
          +
        </button>
        {/* display the option list */}
        {optionList.map((option, index) => (
          <div>
            <input
              type="text"
              name={option}
              id={option}
              className="form-control"
              value={option}
              readonly
            />
            <button className="btn btn-outline-dark" onClick={()=> handleRemoveOption(index)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Radio;
