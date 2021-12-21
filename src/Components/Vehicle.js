import styled from "styled-components";
import { cars } from "./data"; 





const Vehiclecontainer=styled.div`
width:25%;
margin:2em;
box-shadow:2px 2px 2px 3px;
border:2px solid darkgrey;


@media(max-width:414px){
    flex-wrap:wrap;
    width:100%;
    padding:0;
}
`

const Imagecontainer=styled.div`
width:100%;
height:300px;

@media(max-width:414px){
    width:100%;
}

`

const ImageInfo = styled.div`
text-align:center;
`



 const Vehicle=({selectCurrency, currency, currencyRate, filteredCars})=>{

    

    
     return(
         filteredCars.map(car=>{
            return (
                <Vehiclecontainer>
                    
                <Imagecontainer>
                <img src={car.img} width="100%" height="100%" style={{objectFit:"cover"}}/>
                </Imagecontainer>
                <ImageInfo>
                    <h3>{car.Brand}</h3>
                    <p>{`${selectCurrency===undefined?"USD":selectCurrency} ${car.price * Math.trunc((currencyRate === undefined || selectCurrency==="USD" ? 1: currencyRate[selectCurrency]))}`}</p>
                </ImageInfo>
                </Vehiclecontainer>
            )
         })
     )
 }
 export default Vehicle;