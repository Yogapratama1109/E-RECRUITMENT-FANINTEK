import React from 'react'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AddRemoveLanguage from '../helpers/AddRemoveLanguage'
import AddRemoveSkill from '../helpers/AddRemoveSkill'

function FormLanguage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <h4 className="text-center mb-4">Language & Skills Detail</h4>

            <AddRemoveLanguage />
            <AddRemoveSkill />
            
        </div>
    )
}

export default FormLanguage