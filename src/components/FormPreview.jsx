import { useEffect, useState } from "react";
const FormPreview = ({ fieldData }) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [display,setDisplay] = useState('d-none')
    const [jsonData, setJsondata] = useState([])
    
    useEffect(()=>{
        setIsDisabled(fieldData.length===0);
        if(fieldData.length>0){
            setJsondata((prevData)=>[...prevData,fieldData[fieldData.length-1]])
            console.log(fieldData[fieldData.length-1])
        }
    },[fieldData])

  const handleSaveForm=()=>{
    const formConfigJson = JSON.stringify(jsonData,null,2)
    
    setDisplay('')
    console.log(formConfigJson)
  }
  return (
    <div>
      {fieldData.map((field, index) => {
        
        if (field.fieldType === "text") {
          return (
            <div className="form-floating mb-3" key={index}>
              <input
                type={field.fieldType}
                id={field.fieldName}
                className="form-control"
              />
              <label htmlFor={field.fieldName}>{field.fieldName}</label>
            </div>
            
          );
        } else if (field.fieldType === "textarea") {
          return (
            <div className="form-floating mb-3" key={index}>
              <field.fieldType id={field.fieldName} className="form-control" />
              <label htmlFor={field.fieldName}>{field.fieldName}</label>
            </div>
          );
        } else if (field.fieldType === "dropdown") {
          
          return (
            <div className="form-floating">
              <select
                name={field.fieldName}
                id={field.fieldName}
                className="form-select"
              >
                <option value={field.dropdownData.dropdownTitle} defaultValue>
                  {field.dropdownData.dropdownTitle}
                </option>
                {field.dropdownData.optionsList.map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        } else if (field.fieldType === "checkbox") {
          return (
            <div>
              {field.checkboxData.optionList.map((checks, index) => (
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={field.fieldName}
                    key={index}
                  />
                  <label htmlFor="form-check-label">{checks}</label>
                </div>
              ))}
            </div>
          );
        } else {
          return (
            <div>
              {field.radioData.optionList.map((option, index) => (
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    key={index}
                    id={option}
                  />
                  <label htmlFor={option} className="form-check-label">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          );
        }
        
      })}
      <button 
      className={`btn btn-outline-primary mt-1 ${isDisabled?"disabled":""}`}
      onClick={handleSaveForm}
      >save form</button>
      <div className={`container ${display}`}>
        {/* i want this to display only after save form is clicked */}
        <small className="fs-i">json configuration for the form</small>
        <p>{JSON.stringify(jsonData,null,2)}</p>
        
      </div>
    </div>
    // form configuration
    
  );
};
export default FormPreview;
