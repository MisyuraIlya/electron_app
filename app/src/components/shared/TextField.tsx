import { ErrorMessage, FieldProps } from 'formik';
import React from 'react';

export const TextField: React.FC<FieldProps> = ({
  field,
  form: { touched, errors },
  ...args
}) => {
  return (
    <div>
        <div className='w-full'>
        <input
            style={{width:'100%'}}
            type="text"
            className="px-2 py-3 mt-2 mb-2 border rounded shadow-sm w-full"
            {...field}
            {...args}
        />
        </div>
      {touched[field.name] && errors[field.name] && (
        <ErrorMessage
          name={field.name}
          component="span"
          className="text-red-500 text-sm"
        />
      )}
    </div>
  );
};