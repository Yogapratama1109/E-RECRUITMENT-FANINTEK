import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function FormExpertise() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <h4 className="text-center mb-4">Bank Details</h4>

            <Form.Group className="mb-3">
                <Form.Label>Nama Bank</Form.Label>
                <Form.Control type="text" placeholder="......." {...register("bank_name")} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Cabang</Form.Label>
                <Form.Control type="text" placeholder="......." {...register("bank_cabang_name")} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>No Bank A/C</Form.Label>
                <Form.Control type="number" placeholder="......." {...register("bank_no")} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Nama Sesuai Buku Bank</Form.Label>
                <Form.Control type="text" placeholder="......." {...register("bank_book_name")} />
            </Form.Group>

        </div>
    )
}

export default FormExpertise