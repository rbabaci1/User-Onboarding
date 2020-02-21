import React from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";

function InputForm({ values, errors, touched }) {
  // console.log(errors);
  return (
    <div className="form-wrapper">
      <Form>
        <label>
          <Field type="text" name="firstName" placeholder="First Name" />
          {touched.firstName && errors.firstName && (
            <h3 className="error">{errors.firstName}</h3>
          )}
        </label>

        <label>
          <Field type="text" name="lastName" placeholder="Last Name" />
          {touched.lastName && errors.lastName && (
            <h3 className="error">{errors.lastName}</h3>
          )}
        </label>

        <label>
          <Field type="email" name="email" placeholder="Email" />
          {touched.email && errors.email && (
            <h3 className="error">{errors.email}</h3>
          )}
        </label>

        <label>
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <h3 className="error">{errors.password}</h3>
          )}
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
    password: "",
    serviceTerms: false
  }),

  validationSchema: yup.object().shape({
    firstName: yup
      .string()
      .required("👆🏻 Please Enter Your First Name 👆🏻")
      .matches(/^[a-zA-Z]+$/, "👆🏻 Sorry, only alphabet letters are allowed 👆🏻"),

    lastName: yup
      .string()
      .required("👆🏻 Please Enter Your Last Name 👆🏻")
      .matches(/^[a-zA-Z]+$/, "👆🏻 Sorry, only alphabet letters are allowed 👆🏻"),
    email: yup
      .string()
      .required("👆🏻 Please Enter Your Email 👆🏻")
      .email("👆🏻 Sorry, that's not a valid email 👆🏻"),
    password: yup
      .string()
      .required("👆🏻 Please Enter Your Password 👆🏻")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "👆🏻 Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 special case Character 👆🏻"
      )
  })

  // handleSubmit: props => {
  //   console.log(props);
  // }
})(InputForm);
