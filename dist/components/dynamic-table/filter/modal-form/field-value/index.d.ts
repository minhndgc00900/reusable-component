/// <reference types="react" />
import { UseFormRegisterReturn } from "react-hook-form";
interface IFieldValue {
    register: UseFormRegisterReturn;
    defaultValue?: string;
    dataType: string;
}
declare const FieldValue: (props: IFieldValue) => JSX.Element;
export default FieldValue;
