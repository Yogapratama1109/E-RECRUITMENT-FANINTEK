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
            <h4 className="text-center mb-4">Aplication Details</h4>

            <Form.Group className="mb-3">
                <Form.Label>Jabatan Yang Dilamar</Form.Label>
                <Form.Control type="text" placeholder="......." {...register("position_interest")} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Gaji Yang Diminati RP.</Form.Label>
                <Form.Control type="number" placeholder="......." {...register("salary")} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Hubungan Yang Diinginkan</Form.Label>
                <Form.Select {...register("contract_interest")}>
                    <option value="">Pilih..</option>
                    <option value="1">Freelance</option>
                    <option value="2">Kontrak</option>
                    <option value="3">Tetap</option>
                    <option value="4">Lainya</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Dari Siapa Anda Mengetahui Tentang Kami</Form.Label>
                <Form.Control type="text" placeholder="......." {...register("find_job_from")} />
            </Form.Group>

            <Form.Label>Dari Pegawai FAN :</Form.Label>
            <tr>
                <td className="pe-2">1</td>
                <td>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="......." {...register("from_employee_1")} />
                    </Form.Group>
                </td>
            </tr>
            <tr className='mb-3'>
                <td className="pe-2">2</td>
                <td>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="......." {...register("from_employee_2")} />
                    </Form.Group>
                </td>
            </tr>

            <Form.Label>Apakah ada hari tertentu dimana anda tidak bekerja</Form.Label>
            <Form.Group className="mb-3">
                <Form.Check
                    inline
                    label="Ya"
                    name="group1"
                    type="radio"
                    id="status_day_off"
                    value="true"
                    {...register("status_day_off")}
                />
                <Form.Check
                    inline
                    label="Tidak"
                    name="group2"
                    type="radio"
                    id="status_day_off"
                    value="false"
                    {...register("status_day_off")}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Bila iya jelaskan</Form.Label>
                <Form.Control type="text" placeholder="......." {...register("note_day_off")} />
            </Form.Group>

            <Form.Label>Apakah anda memiliki sim</Form.Label>
            <Form.Group className="mb-3">
                <Form.Check
                    inline
                    label="Ya"
                    name="group1"
                    type="radio"
                    id="is_sim"
                    value="true"
                    {...register("is_sim")}
                />
                <Form.Check
                    inline
                    label="Tidak"
                    name="group2"
                    type="radio"
                    id="is_sim"
                    value="false"
                    {...register("is_sim")}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Berlaku Dari</Form.Label>
                <Form.Control type="date" placeholder="......." {...register("sim_start_date")} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Berlaku sampai</Form.Label>
                <Form.Control type="date" placeholder="......." {...register("sim_end_date")} />
            </Form.Group>

            <Form.Label>Pernakah anda diberhentikan dari perusahaan?</Form.Label>
            <Form.Group className="mb-3">
                <Form.Check
                    inline
                    label="Ya"
                    name="group1"
                    type="radio"
                    id="status_cut_off"
                    value="true"
                    {...register("status_cut_off")}
                />
                <Form.Check
                    inline
                    label="Tidak"
                    name="group2"
                    type="radio"
                    id="status_cut_off"
                    value="false"
                    {...register("status_cut_off")}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Bila iya jelaskan</Form.Label>
                <Form.Control type="text" placeholder="......." {...register("note_cut_off")} />
            </Form.Group>

            <Form.Label>Pernakah anda diberhentikan dari perusahaan?</Form.Label>
            <Form.Group className="mb-3">
                <Form.Check
                    inline
                    label="Ya"
                    name="group1"
                    type="radio"
                    id="status_punished"
                    value="true"
                    {...register("status_punished")}
                />
                <Form.Check
                    inline
                    label="Tidak"
                    name="group2"
                    type="radio"
                    id="status_punished"
                    value="false"
                    {...register("status_punished")}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Bila iya jelaskan</Form.Label>
                <Form.Control type="text" placeholder="......." {...register("note_punished")} />
            </Form.Group>

            <Form.Label>Pernakah anda mempunya penyakit?</Form.Label>
            <Form.Group className="mb-3">
                <Form.Check
                    inline
                    label="Ya"
                    name="group1"
                    type="radio"
                    id="status_disease"
                    value="true"
                    {...register("status_disease")}
                />
                <Form.Check
                    inline
                    label="Tidak"
                    name="group2"
                    type="radio"
                    id="status_disease"
                    value="false"
                    {...register("status_disease")}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Bila iya jelaskan</Form.Label>
                <Form.Control type="text" placeholder="......." {...register("note_disease")} />
            </Form.Group>

            <Form.Label>Apakah anda merokok?</Form.Label>
            <Form.Group className="mb-3">
                <Form.Check
                    inline
                    label="Ya"
                    name="group1"
                    type="radio"
                    id="status_smoker"
                    value="true"
                    {...register("status_smoker")}
                />
                <Form.Check
                    inline
                    label="Tidak"
                    name="group2"
                    type="radio"
                    id="status_smoker"
                    value="false"
                    {...register("status_smoker")}
                />
            </Form.Group>

        </div>
    )
}

export default FormExpertise