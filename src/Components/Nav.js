import styled from "styled-components";

const Navcontainer=styled.div`
background-color:blue;


`
const Nav = () => {
    return ( 
      <Navcontainer>
         

              <ul style={{display:"flex",listStyle:"none", justifyContent:"center",gap:"15%", backgroundColor:"#EE2900"}}>
                  <li><a href="#">home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Register/Login</a></li>
                  <li><a href="#">MarketPlace</a></li>



              </ul>
         

      </Navcontainer>
     );
}
 
export default Nav;