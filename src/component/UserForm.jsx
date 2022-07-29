import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserForm() {
  const [count, setCount] = useState(0)

  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div>
      <h4 className="text-center mb-4">Personal Detail</h4>
      <Container>
        <Row>
          <Col xs={12} md={4} className="mb-5 mb-md-0 d-flex flex-column justify-content-center align-items-center">
            <i>Foto Terbaru 4x6</i>
            <div className="Upload">
              <div className="Content d-flex justify-content-center">
                <img className="image" src={file} />
              </div>
              <div className="Input-file d-flex justify-content-center">
                <Form.Group controlId="formFile">
                  <Form.Control type="file" id="actual-btn" onChange={handleChange} hidden />
                  <Form.Label for="actual-btn" className="Label-input" >Upload Image</Form.Label>
                </Form.Group>
              </div>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div className="Form-content">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInpu">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="full_name" {...register("full_name", { required: true })} />
                {errors.full_name && <span className="text-danger">This field is required</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Select {...register("gender", { required: true, valueAsNumber: true })}>
                  <option value="">~</option>
                  <option value="1">Laki-laki</option>
                  <option value="2">Perempuan</option>
                </Form.Select>
                {errors.gender && <span className="text-danger">This field is required</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Tempat Lahir</Form.Label>
                <Form.Control type="text" placeholder="Masukan Kota" {...register("birth_place", { required: true })} />
                {errors.birth_place && <span className="text-danger">This field is required</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Tanggal Lahir</Form.Label>
                <Form.Control type="date" {...register("birth_date", { required: true })} />
                {errors.birth_date && <span className="text-danger">This field is required</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Form.Label>Kewarganegaraan</Form.Label>
                <Form.Control type="text" placeholder="Masukan Negara" {...register("citizenship", { required: true })} />
                {errors.citizenship && <span className="text-danger">This field is required</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                <Form.Label>Kewarganegaraan</Form.Label>
                <Form.Control type="text" placeholder="Masukan Negara" {...register("citizenship", { required: true })} />
                {errors.citizenship && <span className="text-danger">This field is required</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                <Form.Label>No KTP</Form.Label>
                <Form.Control type="number" placeholder="Nomor KTP" {...register("no_ktp", { required: true, pattern: /^(0|[1-9][0-9]*)$/i })} />
                {errors.no_ktp && <span className="text-danger">This field is required</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                <Form.Label>No NPWP</Form.Label>
                <Form.Control type="number" placeholder="Nomor NPWP" {...register("no_npwp", { pattern: /^(0|[1-9][0-9]*)$/i })} />
                {errors.no_npwp && <span className="text-danger">This field is required</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                <Form.Label>No BPJS</Form.Label>
                <Form.Control type="number" placeholder="Nomor BPJS" {...register("no_bpjs", { pattern: /^(0|[1-9][0-9]*)$/i })} />
                {errors.no_bpjs && <span className="text-danger">This field is required</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
                <Form.Label>No BPJS Ketenagakerjaan</Form.Label>
                <Form.Control type="number" placeholder="Nomor BPJS" {...register("no_bpjs_tk", { pattern: /^(0|[1-9][0-9]*)$/i })} />
                {errors.no_bpjs_tk && <span className="text-danger">This field is required</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput10">
                <Form.Label>Status</Form.Label>
                <Form.Select {...register("status_kawin", { required: true })}>
                  <option value="">~</option>
                  <option value="1">Belum Kawin</option>
                  <option value="2">Kawin, Belum punya anak</option>
                  <option value="3">Kawin, Dengan anak 1</option>
                  <option value="4">Kawin, Dengan anak 2</option>
                  <option value="5">Kawin, Dengan anak 3</option>
                </Form.Select>
                {errors.status_kawin && <span className="text-danger">This field is required</span>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput11">
                <Form.Label>Agama</Form.Label>
                <Form.Select {...register("agama", { required: true })}>
                  <option value="">~</option>
                  <option value="1">Islam</option>
                  <option value="2">Budha</option>
                  <option value="3">Khatolik</option>
                  <option value="4">Kristen</option>
                  <option value="5">Hindu</option>
                  <option value="6">Lain-lain</option>
                </Form.Select>
                {errors.agama && <span className="text-danger">This field is required</span>}
              </Form.Group>

              <div className="d-flex justify-content-end my-4">
                <Button variant="primary" type="submit" className="mt-3 Primary-btn">
                  Submit
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserForm
