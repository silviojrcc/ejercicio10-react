import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormLabel, Button } from 'react-bootstrap';
import ListaPeliculas from './ListaPeliculas';
const Formulario = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [peliculas, setPeliculas] = useState([]);

    const onSubmit = (data) => {
        setPeliculas([...peliculas, data]);
        console.log(peliculas);
        reset();
    }

    return (
        <>
            <div className='border rounded text-light mt-5'>
                <div className='p-3 text-center rounded form-title'>
                    <h2>Llenar el formulario para crear una pelicula</h2>
                </div>
                <div className='p-5 bg-dark'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row mb-4'>
                            <FormLabel className='col-md-3'>Nombre:</FormLabel>
                            <input className='col-md-9' placeholder='nombre de película' type='text' {...register("nombre", {
                                required: true,
                                maxLength: 30,
                                minLength: 2,
                                pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/u
                            })}></input>
                            <div className='error-container'>
                                {errors.nombre?.type === "required" && <div className='error-msg'>Debe ingresar el nombre</div>}
                                {errors.nombre?.type === "maxLength" && <div className='error-msg'>El nombre no debe superar los 30 caracteres</div>}
                                {errors.nombre?.type === "minLength" && <div className='error-msg'>El nombre debe ser de mas de 2 caracteres</div>}
                                {errors.nombre?.type === "pattern" && <div className='error-msg'>Debe ingresar un nombre válido</div>}
                            </div>
                        </div>
                        <div className='row mb-4'>
                            <FormLabel className='col-md-3'>Descripción:</FormLabel>
                            <textarea className='col-md-9' placeholder='Descripción película' type='' {...register("descripcion", {
                                required: true,
                                maxLength: 100,
                                minLength: 20,
                            })}></textarea>
                            <div className='error-container'>
                                {errors.descripcion?.type === "required" && <div className='error-msg'>Debe ingresar una descripcion</div>}
                                {errors.descripcion?.type === "maxLength" && <div className='error-msg'>La descripcion no debe superar los 100 caracteres</div>}
                                {errors.descripcion?.type === "minLength" && <div className='error-msg'>La descripcion debe ser de mas de 20 caracteres</div>}
                            </div>
                        </div>
                        <div className='row mb-4'>
                            <FormLabel className='col-md-3'>Género:</FormLabel>
                            <select className='col-md-3' {...register("genero", {required: true})}>
                                <option value="comedia">comedia</option>
                                <option value="drama">drama</option>
                                <option value="accion">accion</option>
                            </select>
                            <div className='error-container'>
                                {errors.genero?.type === "required" && <div className='error-msg'>Debe ingresar una descripcion</div>}
                            </div>
                        </div>
                        <div><Button type="submit">Enviar</Button></div>
                    </Form>
                </div>
                <ListaPeliculas peliculas={peliculas}></ListaPeliculas>
            </div>
        </>
    );
};

export default Formulario;