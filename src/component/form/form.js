import React from 'react';
import { Formik } from 'formik';
import axios from "axios"
import { getFormData } from "../../utils/formData"
import { validationSchema } from "../../utils/validationSchema"
import { Paper, TextField, FormControl, FormLabel, Radio, RadioGroup, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import "./form.css";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"



const BasicForm = () => {
    return (
        <div>
            <Paper className="container px-5 py-3 mt-5" style={{ width: "40%", maxWidth: "40%" }} elevation={10}>
                <h1 className="text-center">My Form</h1>
                <Formik
                    initialValues={{
                        name: "",
                        picture: "",
                        gender: "",
                        password: "",
                        passwordConfirm: "",
                        check: []
                    }}
                    onSubmit={(values, actions) => {
                        var bodyFormData = getFormData(values)
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 3000);

                        // axios({
                        //     method: 'post',
                        //     headers: {
                        //         'crossDomain': true,
                        //         'Content-Type': 'application/json'
                        //     },
                        //     url: "Your URL",
                        //     data: bodyFormData
                        // }).then(res => console.log(res.data))
                        //     .catch(err => console.log(err))
                    }}
                    validationSchema={validationSchema}
                >

                    {({ touched, errors, values, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) => (
                        !isSubmitting ?
                            <form onSubmit={handleSubmit} className="row">

                                <TextField
                                    label="Name"
                                    type="text"
                                    margin="dense"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    name="name"
                                    className="col-md-12"
                                    error={touched.name && errors.name ? true : false}
                                    helperText={touched.name && errors.name}
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    margin="dense"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    name="password"
                                    className="col-md-12"
                                    error={touched.password && errors.password ? true : false}
                                    helperText={touched.password && errors.password}
                                />
                                <TextField
                                    label="Confirm Password"
                                    type="password"
                                    margin="dense"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.passwordConfirm}
                                    name="passwordConfirm"
                                    className="col-md-12"
                                    error={touched.passwordConfirm && errors.passwordConfirm ? true : false}
                                    helperText={touched.passwordConfirm && errors.passwordConfirm}
                                />
                                <FormControl component="fieldset" className="col-md-12 mt-3">
                                    <FormLabel component="legend" className="text-left font-weight-bold">Choose Gender</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender" value={values.gender} onChange={handleChange} onBlur={handleBlur}>
                                        <FormControlLabel value="female" control={<Radio />} style={{ padding: 0, margin: 0 }} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} style={{ padding: 0, margin: 0 }} label="Male" />
                                        <FormControlLabel value="other" disabled control={<Radio />} style={{ padding: 0, margin: 0 }} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                                {touched.gender && errors.gender && <span className="text-danger col-md-12 text-left mb-2" style={{ fontSize: 12 }}>{errors.gender}</span>}
                                <FormControlLabel
                                    className="m-0 p-0 col-md-4"
                                    control={
                                        <Checkbox
                                            checked={values.check.primary}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value="primary"
                                            color="primary"
                                            name="check"
                                        />
                                    }
                                    label="Primary"
                                />
                                <FormControlLabel
                                    className="m-0 p-0 col-md-4"
                                    control={
                                        <Checkbox
                                            checked={values.check.secondary}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value="secondary"
                                            color="secondary"
                                            name="check"

                                        />
                                    }
                                    label="Secondary"
                                />
                                {touched.check && errors.check && <span className="text-danger col-md-12 text-left mb-2" style={{ fontSize: 12 }}>{errors.check}</span>}
                                <input type="file" id="file" accept="image/*"
                                    onChange={(event) => {
                                        setFieldValue("picture", event.currentTarget.files[0])
                                    }}
                                    name="picture"
                                    onBlur={handleBlur} />
                                <label htmlFor="file" className={`btn-2 ${touched.picture && errors.picture ? "bg-danger" : ""}`}>{values.picture && values.picture.name || <span><i className="fa fa-upload"></i> &nbsp; Choose profile picture</span>}</label>
                                {touched.picture && errors.picture && <span className="text-danger text-left mt-0 mb-2 col-md-12" style={{ fontSize: 12 }}>{errors.picture}</span>}
                                {touched.picture && values.picture && values.picture.name ? <div className="col-md-12"><img src={URL.createObjectURL(values.picture)} style={{display: "block"}} height="100" width="100" alt={values.picture.name} /></div>: null}
                                <Button type="submit" variant="contained" color="primary" fullWidth style={{ borderRadius: 0, marginTop: 15, paddingTop: 15, paddingBottom: 15 }}>Submit</Button>
                            </form> 
                            : 
                            <Loader type="Bars" color="#somecolor" height={80} width={80} />
                    )}
                </Formik>
            </Paper>
        </div>
    );
}
export default BasicForm