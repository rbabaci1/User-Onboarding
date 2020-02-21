import React from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";

function InputForm({ values, errors, touched, isSubmitting }) {
  // console.log(isSubmitting);
  return (
    <div className="form-wrapper">
      <Form>
        <label>
          <Field
            type="text"
            name="firstName"
            placeholder="First Name"
            style={{ border: "1.5px solid green" }}
          />
          {touched.firstName && errors.firstName && (
            <h3 className="error" style={{ color: "green" }}>
              {errors.firstName}
            </h3>
          )}
        </label>

        <label>
          <Field
            type="text"
            name="lastName"
            placeholder="Last Name"
            style={{ border: "1.5px solid blue" }}
          />
          {touched.lastName && errors.lastName && (
            <h3 className="error" style={{ color: "blue" }}>
              {errors.lastName}
            </h3>
          )}
        </label>

        <label>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            style={{ border: "1.5px solid orange" }}
          />
          {touched.email && errors.email && (
            <h3 className="error" style={{ color: "orange" }}>
              {errors.email}
            </h3>
          )}
        </label>

        <label>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            style={{ border: "1.5px solid #82320a" }}
          />
          {touched.password && errors.password && (
            <h3 className="error" style={{ color: "#82320a" }}>
              {errors.password}
            </h3>
          )}
        </label>

        <label className="checkbox-container">
          Accept Terms of Service
          <Field type="checkbox" name="serviceTerms" />
          <span className="checkmark" />
        </label>

        <div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
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
      .required("Please Enter Your First Name.")
      .matches(/^[a-zA-Z]+$/, "Must contain alphabet letters only."),

    lastName: yup
      .string()
      .required("Please Enter Your Last Name.")
      .matches(/^[a-zA-Z]+$/, "Must contain alphabet letters only."),
    email: yup
      .string()
      .required("Please Enter Your Email.")
      .email("Sorry, that's not a valid email."),
    password: yup
      .string()
      .required("Please Enter Your Password.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 special case Character."
      )
  }),

  handleSubmit: (values, formikBag) => {
    const { resetForm, setSubmitting } = formikBag;

    resetForm();
    setSubmitting(false);
  }
})(InputForm);
