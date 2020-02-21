import React from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";

function InputForm(props) {
  const { errors } = props;
  console.log(errors);

  return (
    <div className="form-wrapper">
      <Form>
        <label>
          <Field type="text" name="firstName" placeholder="First Name" />
        </label>

        <label>
          <Field type="text" name="lastName" placeholder="Last Name" />
        </label>

        <label>
          <Field type="email" name="email" placeholder="Email" />
        </label>

        <label>
          <Field type="password" name="password" placeholder="Password" />
        </label>

        <label className="checkbox-container">
          Accept Terms of Service
          <Field type="checkbox" name="serviceTerms" />
          <span className="checkmark" />
        </label>

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    firstName: "",
    lastName: "",
    email: "",
    serviceTerms: ""
  }),
  validationSchema: yup.object().shape({
    firstName: yup
      .string()
      .matches(/^[a-zA-Z]+$/, "Sorry, only alphabet letters are allowed!")
      .required(),
    lastName: yup
      .string()
      .matches(/^[a-zA-Z]+$/, "Sorry, only alphabet letters are allowed!")
      .required()
  })
})(InputForm);
