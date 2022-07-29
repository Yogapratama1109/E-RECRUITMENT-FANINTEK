import React from 'react'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AddRemoveLanguage from '../add-remove-input/AddRemoveLanguage'
import AddRemoveSkill from '../add-remove-input/AddRemoveSkill'

function FormLanguage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <h4 className="text-center mb-4">Language & Skills Detail</h4>

            <AddRemoveLanguage />
            <AddRemoveSkill />

            <div className="d-flex justify-content-end my-4">
                <Button variant="primary" type="submit" className="mt-3 Primary-btn">
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default FormLanguage