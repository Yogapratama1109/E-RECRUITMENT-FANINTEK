import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AddRemoveLanguage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const [inputFields, setInputFields] = useState([{
        language: '',
        score_listening: '',
        score_speaking: '',
        score_reading: '',
        score_writing: '',

    }]);

    const addInputField = () => {

        setInputFields([...inputFields, {
            language: '',
            score_listening: '',
            score_speaking: '',
            score_reading: '',
            score_writing: '',
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

        <div className="mb-5">

            {
                inputFields.map((data, index) => {
                    const { language, score_listening, score_speaking, score_reading, score_writing } = data;
                    return (

                            <div className="my-3 d-flex" key={index}>
                                <div className="Form-inputt">

                                    <Form.Label>
                                        <b>Language</b>
                                    </Form.Label>
                                    
                                    <Form.Group className="mb-1">
                                        <Form.Label>Bahasa</Form.Label>
                                        <Form.Control type="text" name="language" onChange={(evnt) => handleChange(index, evnt)} value={language} placeholder="Masukan Bahasa" {...register("language")} />
                                    </Form.Group>

                                    <Row className='mb-3'>
                                        <Col xs={6} md={3}>
                                            <Form.Group>
                                                <Form.Label>Mendengar</Form.Label>
                                                <Form.Select name="score_listening" onChange={(evnt) => handleChange(index, evnt)} value={score_listening} {...register("score_listening")}>
                                                    <option value="">Pilih..</option>
                                                    <option value="1">Baik</option>
                                                    <option value="2">Sedang</option>
                                                    <option value="3">Kurang</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <Form.Group>
                                                <Form.Label>Berbicara</Form.Label>
                                                <Form.Select name="score_speaking" onChange={(evnt) => handleChange(index, evnt)} value={score_speaking} {...register("score_speaking")}>
                                                    <option value="">Pilih..</option>
                                                    <option value="1">Baik</option>
                                                    <option value="2">Sedang</option>
                                                    <option value="3">Kurang</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <Form.Group>
                                                <Form.Label>Membaca</Form.Label>
                                                <Form.Select name="score_reading" onChange={(evnt) => handleChange(index, evnt)} value={score_reading} {...register("score_reading")}>
                                                    <option value="">Pilih..</option>
                                                    <option value="1">Baik</option>
                                                    <option value="2">Sedang</option>
                                                    <option value="3">Kurang</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6} md={3}>
                                            <Form.Group>
                                                <Form.Label>Menulis</Form.Label>
                                                <Form.Select name="score_writing" onChange={(evnt) => handleChange(index, evnt)} value={score_writing} {...register("score_writing")}>
                                                    <option value="">Pilih..</option>
                                                    <option value="1">Baik</option>
                                                    <option value="2">Sedang</option>
                                                    <option value="3">Kurang</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                </div>
                                <div className="Form-removee ms-2">
                                    {(inputFields.length !== 1) ? <button className="btn btn-danger" onClick={removeInputFields}>x</button> : ''}
                                </div>
                            </div>

                    )
                })
            }

            <button className="btn btn-outline-success " onClick={addInputField}>Add Input</button>
        </div>

    )
}
export default AddRemoveLanguage