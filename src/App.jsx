import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Form from './components/Form'
import Display from './components/Display'


//the following syntax is for the use of styled components. The rules between the template string is applied
// to the tag specified after the styled. . We assign the style to a variable and use that variable as a tag
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  width: 90%;
  padding: 2px;
`

const Heading = styled.h1`
  font-family: 'Titillium Web', sans-serif;
  color: #FFF;
  text-align: center;
  font-size: 45px;
  font-weight: 600;

  &::after{
    content: "";
    width: 50%;
    height: 3px;
    display: block;
    margin: 20px auto auto auto;
    background-color: #FFF;
  }
`

function App() {

  const [ results, setResults ] = useState({})
  const [ display, setDisplay ] = useState({})

  useEffect(() => {
    if (Object.keys(results).length > 0){
      const cryptoPrice = async () => {
        const { currency, cryptoCurrency } = results
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`
        const response = await fetch(url)
        const result = await response.json()
        console.log(result)
        setDisplay(result.DISPLAY[cryptoCurrency][currency])
      }
      cryptoPrice()
    }
  }, [results])

  return (
    <Container>
      <div>
        <Heading>Get prices of crypto instantly</Heading>
        <Form 
          setResults={setResults}
        />
        {display.PRICE && <Display display={display} />}
      </div>

    </Container>
    
  )
}

export default App
