import React, { useState } from "react";
import { FormField } from "./FormField";


  
  const Form: React.FC = () => {
    const [formFields, setFormFields] = useState<FormField[]>(
      [
        { id: '1', label: 'Name', type: 'text', value: '' },
        { id: '2', label: 'Subscribe', type: 'checkbox', value: false },
        {
          id: '3',
          label: 'Choose Option',
          type: 'dropdown',
          value: '',
          options: ['Option 1', 'Option 2', 'Option 3'],
        },
      ]
    );
  
  
    const onChange = (id: string, value: any) => {
   setFormFields((a)=>
  a.map((b)=>
  b.id==id ? {...b,value}:b))
    };
    console.log("yes",formFields); 
    const check=()=>{
      console.log("yes",formFields); 
    }
    return (
    <form>
       {formFields.map((field)=>{
      switch(field.type){
        case 'text':
          return (
            <div key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                type="text"
                id={field.id}
                value={field.value}
                onChange={(e) => onChange(field.id, e.target.value)}
              />
            </div>
          );
          case 'checkbox':
            case 'checkbox':
              return (
                <div key={field.id}>
                  <label htmlFor={field.id}>
                    <input
                      type="checkbox"
                      id={field.id}
                      checked={field.value}
                      onChange={(e) => onChange(field.id, e.target.checked)}
                    />
                    {field.label}
                  </label>
                </div>
              );
            case 'dropdown':
              case 'dropdown':
          return (
            <div key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <select
                id={field.id}
                value={field.value}
                onChange={(e) => onChange(field.id, e.target.value)}
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
      }
       })}
       <button onClick={check}>check</button>
        </form>
    )
  };
  
  export default Form;