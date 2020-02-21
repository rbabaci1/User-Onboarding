import React from "react";
import { Form, Field, withFormik } from "formik";

function InputForm(props) {
  return (
    <div>
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

        <label>
          <Field type="checkbox" name="serviceTerms" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default withFormik({})(InputForm);
