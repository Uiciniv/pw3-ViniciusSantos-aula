import React from "react";
import  { useState, useEffect } from 'react'

import style from './CreateBooks.module.css'
import Input from '../forms/Input';
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateBooks = () =>{

    /*RECUPERA OS DADOS DE CATEGORIA DA APIREST */
    useState(()=>{
        fetch('http://localhost:5000/inserirCategoria',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*',

            }
        })
    });

    return(
        <section className={style.create_books_container}>

            <h1>CREATE BOOKS</h1>

            <Input
                type="text"
                name="txt_livro"
                placeHolder="Digite o nome do seu livro aqui"
                text="Titulo do livro"
            />

            <Input
                type="text"
                name="txt_autor"
                placeHolder="Digite o nome do Autor"
                text="Autor do livro"
            />

            <Input
                type="text"
                name="txt_descricao_livro"
                placeHolder="Digite a descrição do livro"
                text="Descricao do livro"
            />

            <Select
                name='categoria'
                text='Escolha uma categoria de livro'
            />

            <Button
                rotulo='Escolher'
            />

        </section>
    )
}

export default CreateBooks