import styled from "@emotion/styled"
import { useState } from "react"

const Label = styled.label`
    color: white;
    display: block;
    font-family: 'Titillium Web', sans-serif;
    font-size: 25px;
    margin: auto;
    text-align: center;
`

const Select = styled.select`
    width: 50%;
    border-radius: 5px;
    margin: 0 auto 10px auto;
    padding: 10px;
    display: block;
    font-size: 15px;
`

const useSelectCrypto = (label, currencies) => {

    const [state, setState] = useState("")
  
    const SelectCrypto = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={ event => setState(event.target.value)}
            >
                <option value="">Select</option>

                {currencies.map( currency => (
                    <option
                        key={currency.id}
                        value={currency.id}
                    >{currency.name}
                    </option>
                ))}
            </Select>
        </>
    )

    return [ state, SelectCrypto ]
}

export default useSelectCrypto