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

  const renderButton = () => {
    if (page > 1) {
      return undefined;
    } else if (page === 1) {
      return <Button variant="primary" type="submit" disabled={!isValid}>Submit</Button>
    }
    else  {
      return <Button onClick={handleSubmitt} variant="primary" className="Primary-btn" disabled={!isValid}>Next</Button>
    }
  }

  // const formStep = () => {
  //   switch (page) {
  //     case 0:
  //       return <UserFormm />;
  //     case 1:
  //       return <FormLanguage />;
  //     case 2:
  //       return (
  //         <FormExpertise />
  //       );
  //     case 3:
  //       return (
  //         <FormEmployment />
  //       );
  //     case 4:
  //       return (
  //         <FormEducation />
  //       );
  //     case 5:
  //       return <FormContact />;
  //     case 6:
  //       return <FormBank />;
  //     case 7:
  //       return (
  //         <FormAplication />
  //       );
  //     case 8:
  //       return <FormFamily />;
  //     default:
  //       return <UserFormm />;
  //   }
  // };

  const completeFormStep = () => {
    setPage(cur => cur + 1);
  }

  const { watch, register, handleSubmit, formState: { errors, isValid } } = useForm( { mode: "all" });
  console.log(errors);

  const onSubmit = (values) => {
    window.alert(JSON.stringify(values, null, 2));
    completeFormStep();
  }

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

            {/* {formStep()} */}

            {page >= 0 && (
              <section className={page === 0 ? "d-block" : "d-none"}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInpu">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control type="text" placeholder="full_name" {...register("full_name", { required: true })} />
                  {errors.full_name && <span className="text-danger">This field is required</span>}
                </Form.Group>
              </section>
            )}

            {page >= 1 && (
              <section className={page === 1 ? "d-block" : "d-none"}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Select {...register("gender", { required: true, valueAsNumber: true })}>
                  <option value="">~</option>
                  <option value="1">Laki-laki</option>
                  <option value="2">Perempuan</option>
                </Form.Select>
                {errors.gender && <span className="text-danger">This field is required</span>}
              </Form.Group>
              </section>
            )}

            {/* {page === 2 && (
              <section>
                <FormExpertise />
              </section>
            )}

            {page === 3 && (
              <section>
                <FormEmployment />
              </section>
            )}

            {page === 4 && (
              <section>
                <FormEducation />
              </section>
            )}

            {page === 5 && (
              <section>
                <FormContact />
              </section>
            )}

            {page === 6 && (
              <section>
                <FormBank />
              </section>
            )}

            {page === 7 && (
              <section>
                <FormAplication />
              </section>
            )}

            {page === 8 && (
              <section>
                <FormFamily />
              </section>
            )} */}

            {page === 2 && (
              <section>
                <h2>Congsatulations</h2>
              </section>
            )}
            <pre>
                {JSON.stringify(watch(), null, 2)}
              </pre>

            <div className="d-flex justify-content-end">

              {page > 0 && (
                <button
                  onClick={() => setPage(page - 1)}
                  className="btn btn-danger me-2"
                >
                  Back
                </button>
              )}

              {renderButton()}
              
            </div>

          </Form>
        </div>
      </div>
    </div>
  )
}

export default App
