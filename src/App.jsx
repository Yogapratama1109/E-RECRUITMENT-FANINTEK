import React, { useState } from "react"
import './App.css'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import UserFormm from './pages/UserForm'
import FormLanguage from './pages/FormLanguage'
import FormExpertise from "./pages/FormExpertise"
import FormEmployment from './pages/FormEmployment'
import FormEducation from './pages/FormEducation'
import FormContact from './pages/FormContact'
import FormBank from './pages/FormBank'
import FormAplication from './pages/FormAplication'
import FormFamily from './pages/FormFamily'

function App() {

  const [page, setPage] = useState(0);

  function handleSubmitt() {
    setPage(page + 1);
  }

  const formStep = () => {
    switch (page) {
      case 0:
        return <UserFormm />;
      case 1:
        return <FormLanguage />;
      case 2:
        return (
          <FormExpertise />
        );
      case 3:
        return (
          <FormEmployment />
        );
      case 4:
        return (
          <FormEducation />
        );
      case 5:
        return <FormContact />;
      case 6:
        return <FormBank />;
      case 7:
        return (
          <FormAplication />
        );
      case 8:
        return <FormFamily />;
      default:
        return <UserFormm />;
    }
  };

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

            {formStep()}

            {/* <UserFormm /> */}
            {/* <FormLanguage /> */}
            {/* <FormExpertise /> */}
            {/* <FormEmployment /> */}
            {/* <FormEducation /> */}
            {/* <FormContact /> */}
            {/* <FormBank /> */}
            {/* <FormAplication /> */}
            {/* <FormFamily /> */}

            <div className="d-flex justify-content-end">

              {page > 0 && (
                <button
                  onClick={() => setPage(page - 1)}
                  className="btn btn-danger me-2"
                >
                  Back
                </button>
              )}

              <Button onClick={handleSubmitt} variant="primary" className="Primary-btn">
                {page !== 8 ? "Next" : "Submit"}
              </Button>
            </div>

          </Form>
        </div>
      </div>
    </div>
  )
}

export default App
