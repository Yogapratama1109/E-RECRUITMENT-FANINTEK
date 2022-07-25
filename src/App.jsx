import React, { useState } from "react";
import './App.css'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function App() {
  const [count, setCount] = useState(0)

  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="App">
      <Navbar sticky="top" className="Header d-flex justify-content-center">
        <h4 className="Header-title">E-RECRUITMENT FANINTEK</h4>
      </Navbar>
      <div className="Main-content container my-5">
        <div className="Title mb-5">
          <h3 className="text-center">Form Registrasi Karyawan</h3>
          <h4 className="text-center">Personal Detail</h4>
        </div>
        <div className="Form-content d-flex align-items-center">

          <div className="Image d-flex align-items-center flex-column">
            <i>Foto Terbaru 4x6</i>
            <div className="Upload d-flex flex-column justify-content-center align-items-center mt-2">
              <div className="Content d-flex flex-column align-items-center justify-content-center">
                <img className="image" src={file} />
              </div>
              <div className="Input-file">
                <input type="file" id="actual-btn" onChange={handleChange} hidden />
                <label for="actual-btn" className="Label-input">Upload Image</label>
              </div>
            </div>

          </div>
          <div className="Form-content-body ms-0 ms-md-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Masukan nama anda" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Select>
                  <option>Laki-laki</option>
                  <option>Perempuan</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tempat Lahir</Form.Label>
                <Form.Control type="text" placeholder="Masukan kota tempat lahir anda" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tanggal Lahir</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Kewarganegaraan</Form.Label>
                <Form.Select>
                  <option>Indonesia</option>
                  <option>Mayalsia</option>
                  <option>Singapura</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>No. KTP</Form.Label>
                <Form.Control type="number" placeholder="39074" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>No. NPWP</Form.Label>
                <Form.Control type="number" placeholder="109900" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>No. BPJS</Form.Label>
                <Form.Control type="number" placeholder="78000" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>No. BPJS Ketenagakerjaan</Form.Label>
                <Form.Control type="number" placeholder="2300" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select>
                  <option>Belum Kawin</option>
                  <option>Kawin, Belum punya anak</option>
                  <option>Kawin, dengan anak 1</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Agama</Form.Label>
                <Form.Select>
                  <option>Islam</option>
                  <option>Khatolik</option>
                  <option>Kristen</option>
                  <option>Budha</option>
                  <option>Hindu</option>
                  <option>Lain-lain</option>
                </Form.Select>
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit" className="mt-3 Primary-btn">
                  Submit
                </Button>
              </div>
            </Form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
