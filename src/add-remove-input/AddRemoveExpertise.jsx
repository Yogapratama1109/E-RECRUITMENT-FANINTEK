import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Form from 'react-bootstrap/Form'

function AddRemoveLanguage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const [inputFields, setInputFields] = useState([{
        E: '',
        // score_listening: '',
        // score_speaking: '',
        // score_reading: '',
        // score_writing: '',

    }]);

    const addInputField = () => {

        setInputFields([...inputFields, {
            E: '',
            // score_listening: '',
            // score_speaking: '',
            // score_reading: '',
            // score_writing: '',
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
                    const { E } = data;
                    return (

                        <div className="my-1 d-flex" key={index}>
                            <div className="Form-inputt">

                                <Form.Control type="text" name="E" onChange={(evnt) => handleChange(index, evnt)} value={E} placeholder="......." {...register("E1")} />

                            </div>
                            <div className="Form-removee ms-2">
                                {(inputFields.length !== 1) ? <button className="btn btn-danger" onClick={removeInputFields}>x</button> : ''}
                            </div>
                        </div>

                    )
                })
            }


            {inputFields.length < 3 ? (

                <button className="btn btn-outline-success mb-3 mt-2" onClick={addInputField}>Add Input</button>

            ) : ''}

        </div>

    )
}
export default AddRemoveLanguage