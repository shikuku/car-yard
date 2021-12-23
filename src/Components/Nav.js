import GoogleLogin from "react-google-login";
import styled from "styled-components";

const Navcontainer=styled.div`
background-color:red;
flex-wrap:wrap;
font-size:1.5rem;
width:100%;
padding:1em;


`
const Ulcontainer=styled.div`
display:flex;
list-style:none;
justify-content:space-between;
flex-wrap:wrap;
color:#fff;


`

const LogoContainer=styled.div`
display:flex;
align-items:center;

`


const Nav = () => {
    return ( 
        <LogoContainer>




      <Navcontainer>

       

              <Ulcontainer>
                  <li><a href="#">home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Register/Login</a></li>
                  <li><a href="#">MarketPlace</a></li>
                  <GoogleLogin/>



              </Ulcontainer>
         

      </Navcontainer>
</LogoContainer>

     );
}
 
export default Nav;