import React from 'react'
import styled from '@emotion/styled'
import useSelectCrypto from '../hooks/useSelectCrypto'
import { useState, useEffect } from 'react'
import Error from './Error'

const InputSubmit = styled.input`
    background-color: #578fb4;
    border: none;
    color: white;
    margin: 20px auto;
    width: 50%;
    margin-left: 25%;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    padding: 6px;
    display: block;

    &:hover{
        background-color: #26638b;
        transition: .1s;
        cursor: pointer;
    }
`

const Form = ({setResults}) => {

    const [ crypto, setCrypto ] = useState([])
    const [ error, setError ] = useState(false)

    useEffect(() => {
       const query = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
        const response = await fetch(url)
        const result = await response.json()
        
        const cryptoArray = result.Data.map( coin => {
            //como quiero utilizar la informacion que me devuelva la API en mi hook de selecCrypto, lo que hago es 
            // un objeto con el mismo formato que use para las divisas, que tiene id y name, para que se me forme
            //automaticamente el select igual que hice el de las divisas
            const cryptoObj = {
                id: coin.CoinInfo.Name, 
                name: coin.CoinInfo.FullName
            }
            return cryptoObj
        })
        setCrypto(cryptoArray) //en mi estado apenas carga la API voy a tener el array de objetos con las crito con sus ID
       }
       query();
    }, []) // importante que el dependency array quede vacio, para que la funcion se ejecute una sola vez

    const currencies = [ 
        { id: "USD", name: "United States Dollar"},
        { id: "EUR", name: "Euro"},
        { id: "GBP", name: "Great Britain Pound"},
        { id: "ARS", name: "Argentine Peso"},
        { id: "CLP", name: "Chilean Peso"}
    ]

    //en el array destructuring me traigo lo que retorna el hook, en la posicion correspondiente, por mas que aca le ponga otro nombre
    const [ currency, SelectCurrency] = useSelectCrypto("Choose currency", currencies)
    const [ cryptoCurrency, SelectCryptocurrency] = useSelectCrypto("Choose cryptocurrency", crypto)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (currency == "" || cryptoCurrency == ""){
            setError(true)
            return
        }
        setError(false)
        setResults({
            cryptoCurrency,
            currency
        })
    }

  return (
    <>
        <form
            onSubmit={handleSubmit}
        >
            <SelectCurrency />
            <SelectCryptocurrency />
            <br />
            {error ? <Error>All fields are required</Error> : null}
            <InputSubmit 
            type="submit" 
            value="Get price"
            />
        </form>
        
        
        
    </>
    
  )
}

export default Form