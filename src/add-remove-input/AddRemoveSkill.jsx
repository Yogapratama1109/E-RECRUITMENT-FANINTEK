import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AddRemoveSkill() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const [inputFields, setInputFields] = useState([{
        skill_name: '',
        start_date: '',
        end_date: '',
        level: '',
        note: '',

    }]);

    const addInputField = () => {

        setInputFields([...inputFields, {
            skill_name: '',
            start_date: '',
            end_date: '',
            level: '',
            note: '',
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
                    const { skill_name, start_date, end_date, level, note } = data;
                    return (

                            <div className="my-3 d-flex" key={index}>
                                <div className="Form-inputt">

                                    <Form.Label>
                                        <b>Skills</b>
                                    </Form.Label>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Keterampilan / Kursus</Form.Label>
                                        <Form.Control type="text" placeholder="Masukan Keterampilan" name="skill_name" onChange={(evnt) => handleChange(index, evnt)} value={skill_name} {...register("skill_name")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Tanggal Mulai</Form.Label>
                                        <Form.Control type="date" name="start_date" onChange={(evnt) => handleChange(index, evnt)} value={start_date} {...register("start_date")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Tanggal Selesai</Form.Label>
                                        <Form.Control type="date" name="end_date" onChange={(evnt) => handleChange(index, evnt)} value={end_date} {...register("end_date")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Level</Form.Label>
                                        <Form.Select name="level" onChange={(evnt) => handleChange(index, evnt)} value={level} {...register("level")}>
                                            <option value="">Pilih..</option>
                                            <option value="1">Baik</option>
                                            <option value="2">Sedang</option>
                                            <option value="3">Kurang</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Keterangan</Form.Label>
                                        <Form.Control type="text" placeholder="Contoh : baik" name="note" onChange={(evnt) => handleChange(index, evnt)} value={note} {...register("note")} />
                                    </Form.Group>

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
export default AddRemoveSkill