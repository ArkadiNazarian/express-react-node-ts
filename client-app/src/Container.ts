import { useState } from "react"
import *as yup from 'yup';
import { useFormik } from 'formik';
import { IFormvalues, Iprops } from "./Model";
import { useEffect } from "react";
import axios from "axios";

export function Container() {
    const [current_email, set_current_email] = useState("");
    const [current_password, set_current_password] = useState("");
    const [current_version, set_current_version] = useState("");
    const [current_authentication, set_current_authentication] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/lastcheck",
            {
                method: "GET"
            })
            .then((response) => response.json())
            .then((api_response) => {
                console.log(api_response.lastcheck)
                set_current_version(api_response.lastcheck)
                // console.log(api_response.last_check_time,api_response.last_check_date)
                // set_current_version({check_time:api_response.last_check_time,check_date:api_response.last_check_date})
            })
            .catch((reason)=>console.log(reason))
        // axios({
        //     method: "GET",
        //     url: "http://localhost:8080/health",
        //     responseType: "json"
        // })
        //     .then((response) => {
        //         let api_response = response.data
        //         console.log(api_response)
        //         set_current_version(api_response.last_check)
        //     })
    }, [])


    const initial_values = {
        email: "",
        password: ""
    } as IFormvalues

    const validation_schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().min(3).required()
    })

    const action_submit = (values: IFormvalues) => {
        set_current_email(values.email)
        set_current_password(values.password)
        // axios({
        //     method: "POST",
        //     url: "http://localhost:8080/login",
        //     data: {
        //         email_address: values.email,
        //         password: values.password
        //     },
        //     headers: { "content-type": "application/json" }
        // })
        //     .then((api_response) => {
        //         console.log(api_response)
        //         alert(api_response)
        //     })
        //     .catch((server_error)=>{
        //           console.log(server_error.response.status)
        //           alert(server_error.response.data)
        //     })
        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email_address: values.email,
                password: values.password
            })
        })
            .then((response) => response.text())
            // .then((response) => response.json())
            .then((api_response) => {
                console.log(api_response)
                alert(api_response)
            })
    }

    const formik = useFormik({
        initialValues: initial_values,
        validationSchema: validation_schema,
        onSubmit: action_submit
    })

    return {
        email: current_email,
        password: current_password,
        action_submit: formik.handleSubmit,
        form_data: formik.values,
        form_errors: formik.errors,
        handleChange: formik.handleChange,
        version: current_version,
    } as Iprops
}