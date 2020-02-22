import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

import UserCard from "../UserCard/UserCard";

function InputForm({ errors, touched, isSubmitting, status, values }) {
  const [users, setUsers] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
      setSearchResult([...searchResult, status]);
    }
  }, [status]);

  useEffect(() => {
    let results = searchResult.filter(user => {
      return user.firstName.toLowerCase().includes(values.search.toLowerCase());
    });
    setSearchResult(results);
  }, [values.search]);

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
            style={{ border: "1.5px solid #4bbdca" }}
          />
          {touched.lastName && errors.lastName && (
            <h3 className="error" style={{ color: "#4bbdca" }}>
              {errors.lastName}
            </h3>
          )}
        </label>

        <label>
          <Field
            type="number"
            name="age"
            placeholder="Age"
            style={{ border: "1.5px solid yellow" }}
          />
          {touched.age && errors.age && (
            <h3 className="error" style={{ color: "yellow" }}>
              {errors.age}
            </h3>
          )}
        </label>

        <label className="choose-role">
          <span>Role:</span>
          <Field as="select" type="text" name="role">
            <option disabled>Choose a role</option>
            <option value="webDeveloper">Web Developer</option>
            <option value="dataScientist">Data Scientist</option>
            <option value="student">Student</option>
            <option value="other">Other</option>
          </Field>
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
            style={{ border: "1.5px solid #F44336" }}
          />
          {touched.password && errors.password && (
            <h3 className="error" style={{ color: "#F44336" }}>
              {errors.password}
            </h3>
          )}
        </label>

        <label className="checkbox-container">
          Accept Terms of Service
          <Field type="checkbox" name="termsOfService" />
          <span className="checkmark" />
          {errors.termsOfService && <h4>{errors.termsOfService}</h4>}
        </label>

        <Field type="text" name="search" placeholder="Search User" />

        <div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </Form>

      <UserCard users={searchResult} />
    </div>
  );
}

export default withFormik({
  mapPropsToValues: () => ({
    search: "",
    firstName: "",
    lastName: "",
    age: "",
    role: "Web Developer",
    email: "",
    password: "",
    termsOfService: false
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
    age: yup.number().required("Please enter your age."),
    email: yup
      .string()
      .notOneOf(["waffle@syrup.com"], "That email is already taken.")
      .required("Please Enter Your Email.")
      .email("Sorry, that's not a valid email."),
    password: yup.string().required("Please Enter Your Password.")
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //   "Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 special case Character."
    // )
  }),

  handleSubmit: (values, formikBag) => {
    const { resetForm, setStatus, setErrors, setSubmitting } = formikBag;

    if (!values.termsOfService) {
      setErrors({ termsOfService: "Please Accept Terms of Service." });
      setSubmitting(false);
    } else {
      axios
        .post("https://reqres.in/api/users", values)
        .then(response => {
          setStatus(response.data);
          resetForm();
        })
        .catch(error => console.error(error));
    }
  }
})(InputForm);
