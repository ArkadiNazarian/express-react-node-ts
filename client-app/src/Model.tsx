import { FormikErrors } from "formik";

export interface IFormvalues{
    email:string,
    password:string}

export interface Iprops{
    email:string,
    password:string,
    action_submit:()=>void,
    form_data:IFormvalues,
    form_errors:FormikErrors<IFormvalues>,
    handleChange:()=>void,
    version:string,
}