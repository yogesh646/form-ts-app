import React, { useState } from "react";
import {
  useFormik,
  Field,
  Formik,
  Form,
  yupToFormErrors,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as yup from "yup";
import TextError from "./TextError";
import { FormProps } from "react-router-dom";
import Count from "./Count";

interface FormPropss {
  name: string;
  mail: string;
  channels: string;
  comments: string;
  address: string;
  social: {
    facebook: string;
    twitter: string;
  };
  phoneNumbers: string[];
  phNmbrs: string[];
}
const initialValues = {
  name: "",
  mail: "",
  channels: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNmbrs: [""],
};
const savedValues:FormPropss = {
  name: "Yogeshwaran K",
  mail: "yogesh@gmail.com",
  channels: "nammaplaza",
  comments: "commenting",
  address: "100 vivekanandar st,block-30,neyveli",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNmbrs: [""],
};

const onSubmit = (values: any,Submit:any) => {
  console.log("formdata:", values,Submit);
  Submit.setSubmitting(false)
};
const validationSchema = yup.object({
  name: yup.string().required(),
  mail: yup.string().email().required(),
  channels: yup.string().required(),
  comments: yup.string().required(),
  address: yup.string().required(),
});
function App() {
  const [date,setDate]=useState('');
  const [error, setError] = useState('');
  const [formvalues,setformvalues]=useState<FormProps|null>(null);
  console.log("forms", Formik);
  console.log("errors");

 

//const validateDate = (date) => dateRegex.test(date);
  return (
    <div className="App">
      <Formik
        initialValues={formvalues||initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
        
      >
        {formik=>{
          console.log('formik',formik);
          
          return(
            <Form>
          <div className="form-control">
            <label className="label" htmlFor="name">
              Name:
            </label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component={TextError} />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="mail">
              Mail:
            </label>
            <Field type="text" id="mail" name="mail" />
          </div>
          <ErrorMessage name="mail" component={TextError} />
          <div className="form-control">
            <label htmlFor="channels">Channel:</label>
            <Field type="text" id="channels" name="channels" />
          </div>
          <ErrorMessage name="channels" component={TextError} />
          <br />
          <div className="form-control">
            <label htmlFor="comments">Comments:</label>
            <Field
             
              as="textarea"
              id="comments"
              name="comments"
            />
          </div>
          <ErrorMessage name="comments" component={TextError} />
         
          <div className="form-control">
            <label htmlFor="address">Address:</label>
         
            <FastField name="address">
              {(props: any) => {
                const { field, form, meta } = props;
                  console.log("props:");
                return (
                  <div>
                    <input type="text" name="address" id="address" {...field} />
                    {meta.touched && meta.error ? (
                      <div>
                        {" "}
                        <ErrorMessage name="address" component={TextError} />
                      </div>
                    ) : null}
                  </div>
                );
              }}
            </FastField>
          </div>
          <div className="form-control">
            <label htmlFor="facebook">Facebook:</label>
            <Field id="facebook" type="text" name="social.facebook" />
          </div>
          <div className="form-control">
            <label htmlFor="twitter">Twitter:</label>
            <Field id="facebook" type="text" name="social.twitter" />
          </div>
          <div className="form-control">
            <label htmlFor="Primary">Primary Phone:</label>
            <Field id="primaryPh" type="text" name="phoneNumbers[0]" />
          </div>
          <div className="form-control">
            <label htmlFor="Scecondary">Secondary Phone:</label>
            <Field id="secondaryPh" type="text" name="phoneNumbers[1]" />
          </div>
          <div className="form-control">
            <label htmlFor="List">List of Phone:</label>
            <FieldArray name="phNmbrs">
              {(feildArrayProps: any) => {
                const { push, form, remove } = feildArrayProps;
                const { values } = form;
                const { phNmbrs } = values;
                return (
                  <div>
                    yes
                    {phNmbrs.map((phNmbrs: any, index: any) => (
                      <div key={index}>
                        <Field name={`phNmbrs[${index}]`} />
                        <button type="button" onClick={() => remove(index)}>
                          -
                        </button>
                        <button type="button" onClick={() => push("")}>
                          +
                        </button>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
          </div>
          <button type="button" onClick={()=>setformvalues(savedValues)}>Load Submit</button>
          <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
        </Form>
          )
        }}
      </Formik>
 
    </div>
  );
}

export default App;
