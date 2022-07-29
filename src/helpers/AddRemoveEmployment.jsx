import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AddRemoveEmployment() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const [inputFields, setInputFields] = useState([{
        company_name: '',
        start_date: '',
        end_date: '',
        address: '',
        is_telp: '',
        business_type: '',
        reason_out: '',
        boss_name: '',
        position: '',
        salary: '',
        telp: '',
        job_detail: '',

    }]);

    const addInputField = () => {

        setInputFields([...inputFields, {
            company_name: '',
            start_date: '',
            end_date: '',
            address: '',
            is_telp: '',
            business_type: '',
            reason_out: '',
            boss_name: '',
            position: '',
            salary: '',
            telp: '',
            job_detail: '',
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
                    const { company_name, start_date, end_date, address, is_telp, business_type, reason_out, boss_name, position, salary, telp, job_detail  } = data;
                    return (

                        <div className="mb-5 d-flex" key={index}>
                            <div className="Form-inputt card p-3">

                                <Form.Group className="mb-3">
                                    <Form.Label>Nama Perusahaan</Form.Label>
                                    <Form.Control type="text" placeholder="......." name="company_name" onChange={(evnt) => handleChange(index, evnt)} value={company_name} {...register("company_name")} />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Tanggal Mulai</Form.Label>
                                            <Form.Control type="date" name="start_date" onChange={(evnt) => handleChange(index, evnt)} value={start_date} {...register("start_date")} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Tanggal Selesai</Form.Label>
                                            <Form.Control type="date" name="end_date" onChange={(evnt) => handleChange(index, evnt)} value={end_date} {...register("end_date")} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Alamat</Form.Label>
                                    <Form.Control type="text" name="address" onChange={(evnt) => handleChange(index, evnt)} value={address} placeholder="......." {...register("address")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>No Telp</Form.Label>
                                    <Form.Control type="number" name="is_telp" onChange={(evnt) => handleChange(index, evnt)} value={is_telp} placeholder="......." {...register("is_telp")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Jenis Usaha</Form.Label>
                                    <Form.Control type="text" name="business_type" onChange={(evnt) => handleChange(index, evnt)} value={business_type} placeholder="......." {...register("business_type")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Alasan Keluar</Form.Label>
                                    <Form.Control type="text" name="reason_out" onChange={(evnt) => handleChange(index, evnt)} value={reason_out} placeholder="......." {...register("reason_out")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Atasan</Form.Label>
                                    <Form.Control type="text" name="boss_name" onChange={(evnt) => handleChange(index, evnt)} value={boss_name} placeholder="......." {...register("boss_name")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Jabatan</Form.Label>
                                    <Form.Control type="text" name="position" onChange={(evnt) => handleChange(index, evnt)} value={position} placeholder="......." {...register("position")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Gaji</Form.Label>
                                    <Form.Control type="number" name="salary" onChange={(evnt) => handleChange(index, evnt)} value={salary} placeholder="......." {...register("salary")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>No Telp Yang Dapat Dihubungi</Form.Label>
                                    <Form.Control type="number" name="is_telp" onChange={(evnt) => handleChange(index, evnt)} value={is_telp} placeholder="......." {...register("is_telp")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Deskripsi Pekerjaan</Form.Label>
                                    <Form.Control type="text" name="job_detail" onChange={(evnt) => handleChange(index, evnt)} value={job_detail} placeholder="......." {...register("job_detail")} />
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
export default AddRemoveEmployment