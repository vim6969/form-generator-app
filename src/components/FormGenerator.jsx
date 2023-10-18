import { useState } from "react";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
const FormGenerator = ({onAddField}) => {
    const [fieldName,setFieldName] = useState('')
    const [selected, setSelected] = useState('')
    const [dropdownData,setDropdownData] =useState([])
    const [checkboxData, setCheckboxData] =useState([])
    const [radioData, setRadioData] = useState([])

    const handleInputChange=(e)=>{
        if(e.target.type === 'text'){
            setFieldName(e.target.value)
        }
        if(e.target.tagName === 'SELECT'){
            setSelected(e.target.value)
        }
        
        
    }
    const handleDropdownChange=(data)=>{
        setDropdownData(data)

    }
    const handleAddField=()=>{
        if (selected === 'dropdown'){
            onAddField({
                fieldName,
                fieldType:selected,
                dropdownData

            })
            
        
        }
        if (selected === 'checkbox'){
            onAddField({
                fieldName,
                fieldType: selected,
                checkboxData
            })
        }
        if(selected === 'text' || selected ==='textarea'){
            onAddField({
                fieldName,
                fieldType:selected
            })
        }
        if(selected === 'radio'){
            onAddField({
                fieldName,
                fieldType:selected,
                radioData
            })
        }
        setFieldName('')
        setSelected('')
        
    
        
    }
    const handleCheckboxChange=(data)=>{
        setCheckboxData(data)
    }
    const handleRadioChange=(data)=>{
        setRadioData(data)
        // {
        //     optionList: [...optionList, option]
        // }
    }
  return (
    <div>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="formFieldName"
          id="formFieldName"
          className="form-control"
          value={fieldName}
          onChange={handleInputChange}
        />
        <label htmlFor="formFieldName">Field Name</label>
      </div>
      <div className="form-floating">
      <select 
        name="fieldType" 
        id="fieldType" 
        className="form-select"
        value={selected}
        onChange={handleInputChange}
      >
        <option defaultValue>select a field type</option>
        <option value="text">text</option>
        <option value="textarea">textarea</option>
        <option value="dropdown">dropdown</option>
        <option value="checkbox">checkbox</option>
        <option value="radio">radio</option>
      </select>
        {selected === 'dropdown'? <Dropdown onDropdownChange={handleDropdownChange}/> :null}
        {selected === 'checkbox'? <Checkbox onCheckboxChange={handleCheckboxChange}/>:null}
        {selected === 'radio'?<Radio onRadioChange={handleRadioChange}/>:null}
      </div>
      <button className="btn btn-outline-success mt-2" 
      onClick={handleAddField}
      >Add Field</button>
      
    </div>
  );
};
export default FormGenerator;
