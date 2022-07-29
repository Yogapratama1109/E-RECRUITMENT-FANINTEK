import React from 'react'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import AddRemoveExpertise from '../add-remove-input/AddRemoveExpertise'

function FormExpertise() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <h4 className="text-center mb-4">Expertise Details</h4>


            <Form.Group className="mb-3">
                <Form.Label>Aplikasi dan Bahasa Pemograman yang dikuasai (E1)</Form.Label>
                <AddRemoveExpertise {...register("E1")} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Aplikasi yang pernah dikerjakan (E2)</Form.Label>
                <AddRemoveExpertise {...register("E2")} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Sebutkan 3 kelebihan pada diri anda (E3)</Form.Label>
                <AddRemoveExpertise {...register("E3")} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Sebutkan 3 kekurangan pada diri anda (E4)</Form.Label>
                <AddRemoveExpertise {...register("E4")} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Adakah project yang pernah anda ikuti, yang sama dengan jabatan yang anda lamar sekarang di PT FAN Integrasi
                    Teknologi. Ya/Tidak, jika ya jelaskan (E5)</Form.Label>
                <AddRemoveExpertise {...register("E5")} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Tulislah hobby, olahraga atau minat Anda (E6)</Form.Label>
                <AddRemoveExpertise {...register("E6")} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Anda pernah menjadi anggota/pengurus dari perkumpulan/organisasi apa ? (E7)</Form.Label>
                <AddRemoveExpertise {...register("E7")} />
            </Form.Group>

        </div>
    )
}

export default FormExpertise