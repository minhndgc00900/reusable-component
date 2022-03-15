import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IFieldValue {
  register: UseFormRegisterReturn;
  defaultValue?: string;
  dataType: string;
}

const FieldValue = (props: IFieldValue) => {
  const { register, defaultValue, dataType } = props;

  const inputField = (
    <input
      type="text"
      placeholder="value"
      className="input input-bordered select-primary"
      defaultValue={defaultValue}
      {...register}
    />
  );

  const dateField = (
    <input
      type="date"
      placeholder="value"
      className="input input-bordered select-primary"
      defaultValue={defaultValue}
      {...register}
    />
  );

  return (
    <div className="form-control">
      {dataType && (
        <label className="label">
          <span className="label-text">Value</span>
        </label>
      )}
      {dataType === "input" && inputField}
      {dataType === "date" && dateField}
    </div>
  );
};

export default FieldValue;
