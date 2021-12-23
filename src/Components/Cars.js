import styled from "styled-components";
import car1 from "../../public/Images/back1.jpeg";
import car2 from "../../public/Images/slide2.jpg";
import car3 from "../../public/Images/slide3.jpg";
import car4 from "../../public/Images/slide4.jpg";
import car5 from "../../public/Images/slide5.jpg";
import car6 from "../../public/Images/slide6.jpg";
import car7 from "../../public/Images/slide7.jpg";
import car8 from "../../public/Images/slide9.jpg";

import Image from "next/image";


const CarsContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:2em;

`

const Cards=styled.div`
background-color:#000;
color:#fff;
justify-content:center;
display:flex;
width:400px;
height:400px;
margin:2em;



`

const CardsContainer=styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
justify-content:center;

`
const ImgContainer = styled.div`
text-align:center;
font-size:2rem;
 border:5px darkgrey solid;

border-radius:10px;

`
const CarsHolder=styled.div`
border-bottom:4px darkgrey solid;
background-color:#fff;

`







const Cars = () => {
    return (

        <CarsHolder>
        <CarsContainer>
<h1>CARS SHOWROOM</h1>

<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>



        </CarsContainer>

<CardsContainer>
<Cards>

<ImgContainer>
<Image src={car1} />
<p>BMW 360</p>
</ImgContainer>

</Cards>

<Cards>

<ImgContainer>
<Image src={car2} />
<p>Audi 96</p>
</ImgContainer>


</Cards>


<Cards>

<ImgContainer>
<Image src={car3} />
<p>Veron 101</p>
</ImgContainer>


</Cards>


<Cards>
<ImgContainer>
<Image src={car4} />
<p>BMW</p>
</ImgContainer>


</Cards>

<Cards>

<ImgContainer>
<Image src={car5} />
<p>BMW </p>
</ImgContainer>


</Cards>

<Cards>

<ImgContainer>
<Image src={car6} />
<p>Ferari 680</p>
</ImgContainer>


</Cards>

<Cards>

<ImgContainer>
<Image src={car7} />
<p>Jeep</p>
</ImgContainer>


</Cards>

<Cards>

<ImgContainer>
<Image src={car8} />
<p>BMW</p>
</ImgContainer>


</Cards>


</CardsContainer>






</CarsHolder>





    )} 
    
    export default Cars