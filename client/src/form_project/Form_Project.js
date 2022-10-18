import { useState } from 'react';
// import './App.css';
import "./form_Style.css"

function Form_Project() {
  const [inputFields, setInputFields] = useState([
    { name: '', price: '' }

  ])

  const handleFormChange = (event ,index) => {
    // console.log(index, event.target.name);
    let data = [...inputFields]; // expand iterable into individual 
   data[index][event.target.name] = event.target.value;
   // enter data in text field
   setInputFields(data);
    
  }

  const submit = (e) => {
    e.preventDefault(); // when i click on button data clear so use e to prevant
    console.log(inputFields)
}

  const addFields = () => {
    // <carheading/>
    
    let newfield = { name: '', price: '' }
    setInputFields([...inputFields, newfield])
  }

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)

  }


  return (
    <div className="App">
      <h1>CAR FORM</h1>
      <form onSubmit={submit} className="main_form">
        
        {inputFields.map((form, index) => {
          return (
            <div className='form_main_div' key={index}>
              <br />
              <br />
              <input
                name='name'
                placeholder='Car Name'
                // value={input.name}
                onChange={event => handleFormChange(event, index)}
                value = {form.name}
              />
              <br />
              <br />
              
              <input
                name='price'
                placeholder='Car Price '
                // value={input.age}
                onChange={event => handleFormChange(event, index)}
                value = {form.price}
                
              />
              
              <button className='btn_remove' onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <br />
      <button className='btn_addfield' onClick={addFields}>Add more</button>
      <br /> <br />
      <button className='btn_submit' onClick={submit}>Submit All</button>
    </div>
  );
}

// const carheading =()=>{
//   return <h1>car2</h1>
// }

export default Form_Project;