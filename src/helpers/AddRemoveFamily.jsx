import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Form from 'react-bootstrap/Form'

function AddRemoveFamily() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const [inputFields, setInputFields] = useState([{
        name: '',
        status_family: '',
        birth_place: '',
        birth_date: '',
        address: '',
        telp: '',
        job: '',
        is_contacted: '',

    }]);

    const addInputField = () => {

        setInputFields([...inputFields, {
            name: '',
            status_family: '',
            birth_place: '',
            birth_date: '',
            address: '',
            telp: '',
            job: '',
            is_contacted: '',
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
                    const { name, status_family, birth_place, birth_date, address, telp, job, is_contacted } = data;
                    return (

                        <div className="mb-5 d-flex" key={index}>
                            <div className="Form-inputt card p-3">

                                <Form.Group className="mb-3">
                                    <Form.Label>Nama</Form.Label>
                                    <Form.Control type="text" name="name" onChange={(evnt) => handleChange(index, evnt)} value={name} placeholder="......." {...register("name")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Hubungan Keluarga</Form.Label>
                                    <Form.Control type="text" name="status_family" onChange={(evnt) => handleChange(index, evnt)} value={status_family} placeholder="......." {...register("status_family")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Tempat Lahir</Form.Label>
                                    <Form.Control type="text" name="birth_place" onChange={(evnt) => handleChange(index, evnt)} value={birth_place} placeholder="......." {...register("birth_place")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Tanggal Lahir</Form.Label>
                                    <Form.Control type="date" name="birth_date" onChange={(evnt) => handleChange(index, evnt)} value={birth_date} placeholder="......." {...register("birth_date")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Alamat</Form.Label>
                                    <Form.Control type="text" name="address" onChange={(evnt) => handleChange(index, evnt)} value={address} placeholder="......." {...register("address")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Telp</Form.Label>
                                    <Form.Control type="number" name="telp" onChange={(evnt) => handleChange(index, evnt)} value={telp} placeholder="......." {...register("telp")} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Pekerjaan</Form.Label>
                                    <Form.Control type="text"name="job" onChange={(evnt) => handleChange(index, evnt)} value={job} placeholder="......." {...register("job")} />
                                </Form.Group>

                                <Form.Label>Apakah anda memiliki sim</Form.Label>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Ya"
                                        type="radio"
                                        id="is_contacted"
                                        name="is_contacted" onChange={(evnt) => handleChange(index, evnt)} value={is_contacted}
                                        {...register("is_contacted")}
                                    />
                                    <Form.Check
                                        inline
                                        label="Tidak"
                                        type="radio"
                                        id="is_contacted"
                                        name="is_contacted" onChange={(evnt) => handleChange(index, evnt)} value={is_contacted}
                                        {...register("is_contacted")}
                                    />
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
export default AddRemoveFamily