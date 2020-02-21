import React from "react";
import { Form, Field, withFormik } from "formik";

function InputForm() {
  return (
    <div>
      <Form>
        <label>
          <Field type="text" name="name" placeholder="Name" />
        </label>
      </Form>
    </div>
  );
}

export default withFormik({})(InputForm);
