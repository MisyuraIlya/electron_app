import React from 'react';
import {Formik, Form, Field,ErrorMessage, FormikHelpers} from 'formik'
import * as Yup from 'yup';
import { Button } from './shared/Button';
import { TextField } from './shared/TextField';
interface IValueForm {
    description:'',
}

const validationSchema = Yup.object().shape({
  description: Yup.string().required('The description is required'),
});

const ProjectForm = () => {

  const ipcRenderer = (window as any).ipcRenderer;
  const initialValues: IValueForm = { description: '' };
  const handleSubmit = (
    values: IValueForm,
    formikHelpers: FormikHelpers<IValueForm>
  ) => {
    ipcRenderer.send('submit:todoForm', values);
    formikHelpers.resetForm();
  };
    return (
   <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="shadow border rounded-xl p-4 my-4">
          <div className="my-4">
            <label htmlFor="description" className="font-bold">
              Task description
            </label>
            <Field
              name="description"
              id="description"
              component={TextField}
              placeholder="Enter the description"
              autoFocus={true}
            />
          </div>
          <Button text="Add" />
        </Form>
      </Formik>
    </div>
    );
};

export default ProjectForm;