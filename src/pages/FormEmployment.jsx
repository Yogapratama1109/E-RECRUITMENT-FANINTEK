import React from 'react'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button'
import AddRemoveEmployment from '../helpers/AddRemoveEmployment'

function FormExpertise() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <h4 className="text-center mb-4">Employment Details</h4>

            <AddRemoveEmployment />

        </div>
    )
}

export default FormExpertise