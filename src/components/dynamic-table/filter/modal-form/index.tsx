import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IFieldList, IModalForm } from "../../../../interfaces";
import FieldValue from "./field-value";

const ModalForm = (props: IModalForm) => {
  const { isOpen, setIsOpen, onHandleSubmit, tag, columns } = props;

  const { register, handleSubmit, setValue, watch } = useForm();

  const [fieldList, setfieldList] = useState<Array<IFieldList>>([]);

  const [selectedField, setSelectedField] = useState<string>("");

  // handling choosing field value
  const onHandleFieldValue = (selectedColumn: string) => {
    const field = fieldList.find((item) => item.value === selectedColumn);

    if (field) {
      setSelectedField(field.type!);
    }
  };

  useEffect(() => {
    if (columns) {
      setfieldList(
        columns.map(
          (item) =>
            ({
              value: item.accessor,
              label: item.Header,
              type: item.type,
            } as IFieldList)
        )
      );
    }
  }, [columns]);

  // set value for the form
  useEffect(() => {
    setValue("id", tag.id);
    setValue("field", tag.field);
    setValue("logic", tag.logic);
    setValue("operator", tag.operator);
    setValue("value", tag.value);

    const column = columns.find((item) => tag.field === item.accessor);
    if (column) {
      setSelectedField(column.type!);
    }
  }, [columns, tag]);

  const operators = [
    {
      label: "equals",
      value: "eq",
    },
    {
      label: "is greater than",
      value: "gte",
    },
    {
      label: "is less than",
      value: "lt",
    },
    {
      label: "contains",
      value: "contains",
    },
  ];

  const logics = [
    {
      label: "and",
      value: "and",
    },
    {
      label: "or",
      value: "or",
    },
  ];

  const watchField = watch("field", false);

  // update field format "value" 
  useEffect(() => {
    if (watchField) {
      onHandleFieldValue(watchField);
    }
  }, [watchField]);

  const onError = (errors: any, e: any) => console.log(errors, e);

  return (
    <div id="my-modal" className={`modal ${isOpen && "modal-open"}`}>
      <div className="modal-box absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <form
          autoComplete="off"
          onSubmit={handleSubmit(onHandleSubmit, onError)}
        >
          <div className="form-control hidden">
            <label className="label">
              <span className="label-text">id</span>
            </label>
            <input
              type="text"
              placeholder="value"
              className="input input-bordered select-primary"
              {...register("id")}
              value={tag?.id}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Field</span>
            </label>
            <select
              defaultValue={tag?.field}
              className="select select-bordered select-primary w-full"
              {...register("field")}
            >
              {fieldList.map((option: IFieldList) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Operator</span>
            </label>
            <select
              defaultValue={tag?.operator}
              className="select select-bordered select-primary w-full"
              {...register("operator")}
            >
              {operators.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <FieldValue
            register={register("value")}
            defaultValue={tag?.value}
            dataType={selectedField}
          />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Logic</span>
            </label>
            <select
              defaultValue={tag?.logic}
              className="select select-bordered select-primary w-full"
              {...register("logic")}
            >
              {logics.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="modal-action">
            <button className="btn btn-primary" type="submit">
              Accept
            </button>
            <div className="btn" onClick={() => setIsOpen(false)}>
              Close
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
