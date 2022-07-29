import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AddRemoveEducation() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const [inputFields, setInputFields] = useState([{
        education_name: '',
        from_date: '',
        till_date: '',
        department: '',
        qualification: '',
        ijazah: '',

    }]);

    const addInputField = () => {

        setInputFields([...inputFields, {
            education_name: '',
            from_date: '',
            till_date: '',
            department: '',
            qualification: '',
            ijazah: '',
        }])

    }

    const removeInputFields = (index) => {
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    }

    const handleChange = (index, evnt) => {
        const { name, value } = evnt.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    }
    return (

        <div>

            {
                inputFields.map((data, index) => {
                    const { education_name, from_date, till_date, department, qualification, ijazah } = data;
                    return (

                        <div className="mb-5 d-flex" key={index}>
                            <div className="Form-inputt card p-3">

                                <Form.Group className="mb-3">
                                    <Form.Label>Sekolah/Instansi/Universitas</Form.Label>
                                    <Form.Control type="text" name="education_name" onChange={(evnt) => handleChange(index, evnt)} value={education_name} placeholder="......." {...register("education_name")} />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Periode Dari Bulan/Tahun</Form.Label>
                                            <Form.Control type="date" name="from_date" onChange={(evnt) => handleChange(index, evnt)} value={from_date} placeholder="......." {...register("from_date")} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Periode Sampai Bulan/Tahun</Form.Label>
                                            <Form.Control type="date" name="till_date" onChange={(evnt) => handleChange(index, evnt)} value={till_date} placeholder="......." {...register("till_date")} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Jurusan</Form.Label>
                                    <Form.Control type="text" name="department" onChange={(evnt) => handleChange(index, evnt)} value={department} placeholder="......." {...register("department")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Kualifikasi</Form.Label>
                                    <Form.Select name="qualification" onChange={(evnt) => handleChange(index, evnt)} value={qualification} {...register("qualification")}>
                                        <option value="">Pilih..</option>
                                        <option value="1">SMA/SMK</option>
                                        <option value="2">D3</option>
                                        <option value="3">Bacholer</option>
                                        <option value="4">Master</option>
                                        <option value="5">Phd</option>
                                    </Form.Select>
                                </Form.Group>


                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Ijazah</Form.Label>
                                    <Form.Control type="file" name="ijazah" defaultValue={ijazah} {...register("ijazah")} />
                                </Form.Group>

                            </div>
                            <div className="Form-removee ms-2">
                                {(inputFields.length !== 1) ? <button className="btn btn-danger" onClick={removeInputFields}>x</button> : ''}
                            </div>
                        </div>

                    )
                })
            }

            <button className="btn btn-outline-success mb-3 mt-2" onClick={addInputField}>Add Input</button>

        </div>

    )
}
export default AddRemoveEducation