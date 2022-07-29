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

            <div className="d-flex justify-content-end my-4">
                <Button variant="primary" type="submit" className="mt-3 Primary-btn">
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default FormFamily