import React from "react";
import { Form, Field, withFormik } from "formik";

function InputForm(props) {
  return (
    <div className="form-wrapper">
      <Form>
        <label>
          <Field type="text" name="name" placeholder="Name" />
        </label>

        <label>
          <Field type="email" name="email" placeholder="Email" />
        </label>

        <label>
          <Field type="password" name="password" placeholder="Password" />
        </label>

        <label className="checkbox-container">
          Accept terms of service
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

export default withFormik({})(InputForm);
