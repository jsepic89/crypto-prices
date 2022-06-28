import React from 'react'
import styled from '@emotion/styled'

const Warning = styled.div`
    background-color: #e03232;
    color: white;
    padding: 10px;
    width: 48%;
    margin: auto;
    text-transform: uppercase;
    text-align: center;
    font-size: 15px;
    border-radius: 5px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
`

const Error = ({children}) => {
  return (
    <Warning>
        {children}
    </Warning>
  )
}

export default Error