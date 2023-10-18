import {useState} from 'react';
import "./App.css";
import FormGenerator from "./components/FormGenerator";
import Navbar from "./components/Navbar";
import FormPreview from './components/FormPreview';

function App() {
  const [formFields, setFormFields] = useState([])
  const handleAddField= (fieldData)=>{
    setFormFields([...formFields,fieldData])
  }

  return (
    <div>
      <Navbar />
      <hr />
      <div className="row">
        <div className="col">
          <FormGenerator onAddField={handleAddField}/>
        </div>
        <div className="col">
          <FormPreview fieldData ={formFields}/>
        </div>
      </div>
    </div>
  );
}

export default App;
