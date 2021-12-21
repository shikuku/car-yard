import styled from "styled-components"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Vehicle from "./Vehicle";
import { useState , useEffect} from "react";
import { style } from "@mui/system";
import { cars } from "./data";


const Selectcontainer=styled.div`
display:flex;
flex-direction:row;
width:100%;
flex-wrap:wrap;
align-items:center;


// @media(max-width:414px){width:100%;}
`
const Automotive=styled.div`

display:flex;
flex-direction:row;
width:100%;
flex-wrap:wrap;
align-items:center;
text-align:center;

`

const Formcontent=styled.div`
display:flex;
flex-direction:column;
width:100%;
border:2px solid darkgrey;
margin-top:2em;
padding-bottom:1em;
text-align:center;


`

const Formcontainer=styled.div`
display:flex;
align-items:center;
width:100%;
justify-content:space-between;
text-align:center;


`



const Formleft=styled.div`
width:100%
`


const Formcenter=styled.div`
width:100%
`




const Formright=styled.div`
width:100%
`





const Main=()=>{



  const [currency, setCurrency] = useState([]);
  const [selectCurrency, setSelectedCurrency] = useState("USD");
  const [currencyRate, setCurrencyRate] = useState();
  const [filteredCars, setFilteredCars] = useState(cars);
  



  useEffect(() => {
    fetchCurrency();
    fetchCurrencyRate();
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

const fetchCurrencyRate=()=>{
  const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://freecurrencyapi.net/api/v2/latest?apikey=4970ca70-5ecc-11ec-873c-f5718b5e2bb6", requestOptions)
      .then(response => response.json())
      .then(result =>setCurrencyRate(result.data))
      .catch(error => console.log('error', error));
}




const handleChange = (e)=>{
  setSelectedCurrency(e.target.value)
  
}

// console.log(filteredCars)



const handleFilterByPrice = (e)=>{

  const carsFromFilter = [];
  let data;
  const filteredValue = e.target.value;
cars.filter(car=>{
  if(filteredValue === "above 20000") {
    data = car.price>=20000;
    data && carsFromFilter.push(car);
    setFilteredCars(carsFromFilter)

  } else if(filteredValue === "below 20000") {
    data = car.price<20000;
    data && carsFromFilter.push(car);
    setFilteredCars(carsFromFilter)
  } else {
    data = car.price;
    data && carsFromFilter.push(car);
    setFilteredCars(carsFromFilter)
  }
})
}



const handleFilterByBrand = (e)=>{
  const filterValue = e.target.value;
  const carsByBrand = []
  filteredCars.filter(car=>{
    let data = car.Brand===filterValue;
    data&&carsByBrand.push(car);
    
    })
    setFilteredCars(carsByBrand)
}




    return(
<Selectcontainer>
  <Formcontent>
<h3>By high quality Cars</h3>

<Formcontainer>
<Formleft>
{console.log(currency)}
      <FormControl style={{width:"50%", marginTop:"2em" }}>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Currency"
        
          onChange={(e)=>handleChange(e)}
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

      </Formleft>










<Formcenter>
      <FormControl style={{width:"50%", marginTop:"2em" }}>
        <InputLabel id="demo-simple-select-label">Select By Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Price"
        
          onChange={(e)=>handleFilterByPrice(e)}
        >
          
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="below 20000">cars below USD 20000</MenuItem>
          <MenuItem value="above 20000">cars above USD 20000</MenuItem>
          
          
        </Select>
      </FormControl>
</Formcenter>


<Formright>
      <FormControl style={{width:"50%", marginTop:"2em" }}>
        <InputLabel id="demo-simple-select-label">Select By Brand</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Brand"
          
          onChange={(e)=>handleFilterByBrand(e)}
        >
          
          <MenuItem value="Brand">Brand</MenuItem>
          <MenuItem value="Jeep">Jeep</MenuItem>
          <MenuItem value="Ferrari">Ferrari</MenuItem>
          <MenuItem value="Bugatti">Bugatti</MenuItem>
          <MenuItem value="Lamborghini">Lamborghini</MenuItem>
          <MenuItem value="BMW">BMW</MenuItem>
          <MenuItem value="Mercedez Benz">Mercedez Benz</MenuItem>
          <MenuItem value="Land Rover">Land Rover</MenuItem>
          <MenuItem value="Land Cruiser">Land Cruiser</MenuItem>
          <MenuItem value="MG">MG</MenuItem>
          <MenuItem value="Maserati">Maserati</MenuItem>
          <MenuItem value="Audi">Audi</MenuItem>
          <MenuItem value="Ford">Ford</MenuItem>
        </Select>
      </FormControl>
      </Formright>
    
    </Formcontainer>
    </Formcontent>

    <Automotive>
  <Vehicle selectCurrency={selectCurrency} currency={currency} currencyRate={currencyRate} filteredCars={filteredCars} />
  </Automotive>


</Selectcontainer>
    )
    
}

export default Main;