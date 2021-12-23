import styled from "styled-components";
import Image from "next/image";
import slide6 from "../../public/Images/slide6.jpg";


const AboutContainer=styled.div`
background-color:#fff;
margin:2em;


`

const FlexContainer=styled.div`
display:flex;
justify-content:center;
gap:2em;
align-items:center;
padding:2em;
border-bottom:2px solid darkgrey;
`
const BackgroundImage=styled.div`
background: url("https://images.unsplash.com/photo-1573343960734-f3c3753a563f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");  
display:flex;
    height: 80vh;
    background-repeat:no-repeat;
    background-position:center center;
    background-size:cover;
    gap:2em;
    justify-content:center;
    margin-top:2em;
    border-bottom:2px darkgrey solid;
    border-radius:10px;
    


`;

const Mycards=styled.div`
flex-wrap:wrap;
background:linear-radient  (rgba(0,0,0,.9),rgba(0,0,0,.9),url());
width:300px;
height:300px;
margin-top:10%;
border-radius:5px;
padding:2em;
border:2px solid darkgrey;
color:#fff;


`

const Paragragh=styled.div`
border:solid 2px darkgrey;
padding:2.5em;
border-radius:5px;
color:red;

`


const AboutPage = () => {
    return ( 
<>

<AboutContainer>
   
<FlexContainer>
<Paragragh >
<p>Car-Yard is the Nairobi based dealer in Japanese-used automobiles and new spare parts.

</p>
<p>Established in 2003, Sakai Trading is one of Kenya’s fastest growing automobile importers of pre-owned and reconditioned vehicles today.

</p>
<p>CAR-YARD is truly unique in its long history of community service, including the support of tens of thousands of educational, spiritual, cultural, charitable and political institutions and organizations throughout the country.</p>
</Paragragh>

<Image src={slide6} width={"800px"} height={"800px"} objectFit="contain"/>
</FlexContainer>


</AboutContainer>

<BackgroundImage>
    <Mycards>
        <h1>This Company is Fubulus</h1>
        <p>This Company is Fubulus.Sales Exercutive are superb.Congratulation CAR-YARD</p>
    </Mycards>

    <Mycards>
    <h1>Exemptional Team</h1>
    <p>You will never go wrong by transacting with STL.We are always ready to assist.</p>
    </Mycards>

    <Mycards>
    <h1>The best deal in town</h1>
    <p>We have the best deals in town and the price is pocket friendly.Just visit and see it for yourself</p>
    </Mycards>

  
</BackgroundImage>

</>


     );
}
 
export default AboutPage;