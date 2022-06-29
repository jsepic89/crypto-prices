import React from 'react'
import styled from '@emotion/styled'

const Result = styled.div`
    color: white;
    font-family: 'Titillium Web', sans-serif;
    display: flex;
    width: 80%;
    margin-left: 20%;

    @media (max-width: 1000px){
        flex-direction: column;
        width: 50%;
        margin: auto;
    }

    @media (max-width: 800px){
        flex-direction: column;
        width: 70%;
        margin-left: 20% ;
    }
` 
const Price = styled.p`
    font-size: 30px;
    font-style: italic bold;
`
const P = styled.p`
    font-size: 25px;
`


const Display = ({display}) => {

    const { PRICE, HIGHDAY, LOWDAY, IMAGEURL, CHANGEPCT24HOUR } = display

  return (
    <Result>
        <div>
            <Price>Price right now is: {PRICE}</Price>
            <P>Highest price today: {HIGHDAY}</P>
            <P>Lowest price today: {LOWDAY}</P>
            <P>Variation in the last 24 hours is: {CHANGEPCT24HOUR}%</P> 
        </div>
        
        <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="Image of selected coin" />
    </Result>
  )
}

export default Display