import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function FormExpertise() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <h4 className="text-center mb-4">Contact Details</h4>
            <Form.Group className="mb-3">
                <Form.Label>Alamat Domisili</Form.Label>
                <FloatingLabel controlId="floatingTextarea" label="Alamat">
                    <Form.Control as="textarea" {...register("address_permanent", { required: true })} />
                </FloatingLabel>
            </Form.Group>

            <Row className='mb-3'>
                <Col xs={6} md={3}>
                    <Form.Group>
                        <Form.Label>Kota Domisili</Form.Label>
                        <Form.Control type="text" placeholder="......." {...register("city_permanent", { required: true })} />
                    </Form.Group>
                </Col>
                <Col xs={6} md={3}>
                    <Form.Group>
                        <Form.Label>Profinsi Domisili</Form.Label>
                        <Form.Control type="text" placeholder="......." {...register("province_permanent", { required: true })} />
                    </Form.Group>
                </Col>
                <Col xs={6} md={3}>
                    <Form.Group>
                        <Form.Label>Kode Pos</Form.Label>
                        <Form.Control type="text" placeholder="......." {...register("zip_code_permanent", { required: true })} />
                    </Form.Group>
                </Col>
                <Col xs={6} md={3}>
                    <Form.Group>
                        <Form.Label>Telp</Form.Label>
                        <Form.Control type="number" placeholder="......." {...register("telp_permanent", { required: true })} />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3">
                <Form.Label>Alamat Tetap</Form.Label>
                <FloatingLabel controlId="floatingTextarea" label="Alamat">
                    <Form.Control as="textarea" {...register("address_temporary", { required: true })} />
                </FloatingLabel>
            </Form.Group>

            <Row className='mb-3'>
                <Col xs={6} md={3}>
                    <Form.Group>
                        <Form.Label>Kota Tetap</Form.Label>
                        <Form.Control type="text" placeholder="......." {...register("city_temporary    ", { required: true })} />
                    </Form.Group>
                </Col>
                <Col xs={6} md={3}>
                    <Form.Group>
                        <Form.Label>Profinsi Tetap</Form.Label>
                        <Form.Control type="text" placeholder="......." {...register("province_temporary", { required: true })} />
                    </Form.Group>
                </Col>
                <Col xs={6} md={3}>
                    <Form.Group>
                        <Form.Label>Kode Pos</Form.Label>
                        <Form.Control type="text" placeholder="......." {...register("zip_code_temporary", { required: true })} />
                    </Form.Group>
                </Col>
                <Col xs={6} md={3}>
                    <Form.Group>
                        <Form.Label>Telp</Form.Label>
                        <Form.Control type="number" placeholder="......." {...register("telp_temporary", { required: true })} />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3">
                <Form.Label>No Hp</Form.Label>
                <Form.Control type="number" placeholder="......." {...register("no_hp")} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="......." {...register("email")} />
            </Form.Group>

        </div>
    )
}

export default FormExpertise