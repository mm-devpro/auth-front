import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import {Button} from "reactstrap";
import {useNavigate} from "react-router-dom";

import {login, logout} from "../../store/reducers/user";

const Login = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  if (user) {
    return navigate('/home')
  }


  return (
    <div className="login-container">
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={values => {dispatch(login(values))}}
      >
        {({isSubmitting}) =>(<Form>
          <Field type="text" name="username" placeholder="email"/>
          <Field type="password" name="password" placeholder="password"/>
          <Button color="primary" type="submit" disabled={isSubmitting}>Login</Button>
        </Form>)}
      </Formik>
    </div>
  );
};

export default Login;
