import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AddRemoveEducation from '../helpers/AddRemoveEducation'

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

        </div>
    )
}

export default FormExpertise