import React, { useReducer, useState } from 'react';
import "./skills.css"

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
 }
 
 function Form() {
   const [formData, setFormData] = useReducer(formReducer, {});
   const [submitting, setSubmitting] = useState(false);
 
   const handleSubmit = event => {
     event.preventDefault();
     setSubmitting(true);
 
    //  setTimeout(() => {
    //    setSubmitting(false);
    //  }, 3000);
   }
 
   const handleChange = event => {
     setFormData({
       name: event.target.name,
       value: event.target.value,
     });
   }

   const changeEverything = () => {
     document.getElementById("skills").classList.add("hidden");
   }
 
   return(
    <div className="wrapper">
    <h1>Thanks for applying to Sidi.io</h1>
    {submitting &&
     <div>
       You submitted the following:
       <ul>
         {Object.entries(formData).map(([name, value]) => (
           <li key={name}><strong>{name}</strong>:{value.toString()}</li>
         ))}
       </ul>
     </div>
    }
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          <p>Thank You!</p>
          <input name="name" placeholder="Recruiter Name" onChange={handleChange} required/>
          <input name="email" type="email" placeholder="johndoe@gmail.com"  onChange={handleChange} required/>
          <input name="company" type="text" placeholder="Company Name"  onChange={handleChange} required/>
          <input name="salary" type="text" placeholder="$123456"  onChange={handleChange} required/>
          <input name="date" type="date"  onChange={handleChange} required/>
        </label>
      </fieldset>
      <button type="submit" onClick={changeEverything}>Submit</button>
    </form>
  </div>
   )
 }

export default Form