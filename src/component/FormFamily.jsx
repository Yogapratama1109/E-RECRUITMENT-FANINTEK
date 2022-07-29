import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button'
import AddRemoveFamily from '../add-remove-input/AddRemoveFamily'

function FormFamily() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <h4 className="text-center mb-4">Family Details</h4>

            <AddRemoveFamily />

        </div>
    )
}

export default FormFamily