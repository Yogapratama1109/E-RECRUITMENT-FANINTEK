import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AddRemoveEducation from '../add-remove-input/AddRemoveEducation'

function FormExpertise() {

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
            <h4 className="text-center mb-4">Education Details</h4>
            
            <AddRemoveEducation />

            <div className="d-flex justify-content-end my-4">
                <Button variant="primary" type="submit" className="mt-3 Primary-btn">
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default FormExpertise