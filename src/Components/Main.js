import styled from "styled-components"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Vehicle from "./Vehicle";
import { useState , useEffect} from "react";
import { style } from "@mui/system";


const Selectcontainer=styled.div`
display:flex;
flex-direction:row;
width:100%;
flex-wrap:wrap;


// @media(max-width:414px){width:100%;}
`
const Automotive=styled.div`

display:flex;
flex-direction:row;
width:100%;
flex-wrap:wrap;

`





const Main=()=>{



  const [currency, setCurrency] = useState([]);
  const [selectCurrency, setSelectedCurrency] = useState();



  useEffect(() => {
    fetchCurrency()
  },[])

  const fetchCurrency=()=>{
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://freecurrencyapi.net/api/v2/latest?apikey=4970ca70-5ecc-11ec-873c-f5718b5e2bb6", requestOptions)
        .then(response => response.json())
        .then(result =>setCurrency(Object.keys(result.data)))
        .catch(error => console.log('error', error));
}





    return(
<Selectcontainer>


{console.log(currency)}

      <FormControl style={{width:"20%", marginTop:"2em" }}>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        
          label="Currency"
          // onChange={handleChange}
        >
          {
            currency.map(country=>{
              return (
<MenuItem value={country}>{country}</MenuItem>
              )
            })
          }
          
        </Select>
      </FormControl>
    
    

    <Automotive>
  <Vehicle />
  </Automotive>


</Selectcontainer>
    )
    
}

export default Main;