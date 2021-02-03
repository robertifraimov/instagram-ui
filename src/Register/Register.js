
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Register.scss';
import { registerSchema } from './register.schema';

function Register (props) {
    return (
        <div>
            <h1>Register</h1>
            
            <Formik
                initialValues= { {username: '', password: '', agreeToTerms: false } }
                validationSchema={registerSchema}>
            <Form>

                <div className="form-group mb-3"> 
                    <label htmlFor="username" >Username</label>
                    <Field className="form-control" id="username" name="username" />
                    <ErrorMessage name="username" component="div" />
                </div>

                <div className="form-group mb-3"> 
                    <label htmlFor="email">Email</label>
                    <Field  type= "email" className="form-control"  id="email" name="email" /> 
                    <ErrorMessage name="email" component="div" />
                </div>

                <div className="form-group mb-3"> 
                    <label htmlFor="password">Password</label>
                    <Field  type= "password" className="form-control" id="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                </div>

                <div className=" from-group form-group mb-3"> 
                    <Field  type= "checkbox" className="form-check-input" id="agreeToTerms"  name="agreeToTerms" />
                    <label className="form-chack-label "  htmlFor="agreeToTerms" >Agree to terms</label>
                    <ErrorMessage name="agreeToTerms" component="div" />
                </div>

                <div className="form-group"> 
                    <button className="btn btn-success" >Register</button>
                </div>

            </Form>
            </Formik>
   
        </div>

        
        
    );
}

export default Register;