import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik, ErrorMessage} from "formik";
import {Button} from "reactstrap";
import {useNavigate} from "react-router-dom";

import {login} from "../../store/reducers/user";

const Login = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)

  useEffect(() => {
    if (user) {
      navigate('/home')
    }
  }, [])

  return (
    <div className="login-container">
      <Formik
        initialValues={{email: '', password: ''}}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = "Email Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          } else if (!values.password || values.password.length < 2) {
            errors.password = "Password Required";
          }
          return errors
        }}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            setSubmitting(false)
            dispatch(login(values))
            navigate("/")
          }, 1000)

        }}
      >
        {
          ({errors, touched, isSubmitting}) => (
            <Form>
              <Field type="email" name="email" placeholder="Email"/>
              <ErrorMessage name="email"/>
              <Field type="password" name="password" placeholder="Password"/>
              <ErrorMessage name="password"/>
              <Button color="primary" type="submit" disabled={isSubmitting}>Login</Button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};

export default Login;
