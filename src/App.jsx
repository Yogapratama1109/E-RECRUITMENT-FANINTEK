import React, { useState } from "react"
import './App.css'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
// import MultiForm from "./component/MultiForm"
import UserFormm from './component/UserForm'
import FormLanguage from './component/FormLanguage'
import FormExpertise from "./component/FormExpertise"
import FormEmployment from './component/FormEmployment'
import FormEducation from './component/FormEducation'
import FormContact from './component/FormContact'
import FormBank from './component/FormBank'
import FormAplication from './component/FormAplication'
import FormFamily from './component/FormFamily'

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className="App">
      <Navbar sticky="top" className="Header d-flex justify-content-center">
        <h4 className="Header-title">E-RECRUITMENT FANINTEK</h4>
      </Navbar>
      <div className="Main-content container my-5">
        <div className="Title mb-5">
          <h3 className="text-center">Form Registrasi Karyawan</h3>
        </div>
        <div className="Form-content">
          <Form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">

            {/* <UserFormm /> */}
            {/* <FormLanguage /> */}
            {/* <FormExpertise /> */}
            {/* <FormEmployment /> */}
            {/* <FormEducation /> */}
            {/* <FormContact /> */}
            {/* <FormBank /> */}
            {/* <FormAplication /> */}
            <FormFamily />

          </Form>
        </div>
      </div>
    </div>
  )
}

export default App
