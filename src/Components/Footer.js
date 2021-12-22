import styled from "styled-components";
// import InstagramIcon from '@mui/icons-material/Instagram';



const FooterContainer=styled.div`
background-color:#fff;
border-bottom:3px solid blue;
padding:2em;
color:#fff;

`
const UlContainer=styled.div`
background-color:#000;
display:flex;
justify-content:space-around;
border-bottom:5px solid darkgrey;
margin:2em;

`

const FooterIconsContainer=styled.div`
backround-color:blue;

`

const ImageOne = styled.div`
  background: url("https://images.unsplash.com/photo-1596711715198-16788fb84007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
    no-repeat center center/cover;
    width:50vw;
    height:50vh;
    border-radius:50%;
`;
const ImageTwo = styled.div`
  background: url("https://images.unsplash.com/photo-1599135343721-6c8d4c1b8b58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80")
    no-repeat center center/cover;
    height:50vh;
    width:50vw;
    border-radius:50%;
`;

const ImageThree = styled.div`
  background: url("https://images.unsplash.com/photo-1597390726284-6f09bf370574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
    no-repeat center center/cover;
width:50vw;
    height:50vh;
    border-radius:50%;
`;

const ImageFour = styled.div`
  background: url("https://images.unsplash.com/photo-1617650728468-8581e439c864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
    no-repeat center center/cover;
    height:50vh;
    border-radius:50%;
`;
const ImageFive = styled.div`
  background: url("https://images.unsplash.com/photo-1559930449-a3dbfc1efe04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")
    no-repeat center center/cover;
    width:50vw;
    height:50vh;
    border-radius:50%;
`;
const ImageSix = styled.div`
  background: url("https://images.unsplash.com/photo-1597775738045-96695099c7b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
    no-repeat center center/cover;
    width:50vw;
    height:50vh;
    border-radius:50%;
`;

const FooterSlide=styled.div`
width:50vw;
height:50vh;
border-radius:50%;
margin:2em;




`


const Container=styled.div`
display:flex;


`

const Content=styled.div`
background-color:#000;
width:50%;

`
const Copyright=styled.div`
color:#fff;
font-size:2rem;
margin:.3em 0em;
display:flex;
justify-content:end;
background-color:#000;

`


const Footer = () => {
    return (
      
      <>
        <FooterContainer>
<UlContainer>
<div>
    <h1>CAR-YARD.COM</h1>
    <p>+254717911169</p>
    <p>9-1 Minatojima, Chuo-ku, Kobe, Hyogo, Japan, 650-0045
opportunities@rekotrade.com
</p>
  
</div>


<ul>
    <p>CONTACTS</p>
    <li><a href="#">Whats App</a></li>
    <li><a href="#">Tell Number</a></li>
    <li><a href="#">Email</a></li>
    <li><a href="#">Telegram</a></li>

</ul>

<ul>
    <p>USEFUL LINKS</p>
    <li><a href="#">Sign Up</a></li>
    <li><a href="#">Subscribe</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">Show Room</a></li>
</ul>
<ul>
    <p>Company Information</p>
    <li><a href="#">Terms & and Condition</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Support</a></li>
    
  
</ul>



</UlContainer>




<Container>


<FooterSlide
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
 <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>

<button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>

<button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>

        </div>
        <div className="carousel-inner">
          <ImageOne className="carousel-item active">
                     <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </ImageOne>

          <ImageTwo className="carousel-item">
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </ImageTwo>
          <ImageThree className="carousel-item">
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </ImageThree>

          <ImageFour className="carousel-item">
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </ImageFour>

          <ImageFive className="carousel-item">
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </ImageFive>

          <ImageSix className="carousel-item">
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </ImageSix>





        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>


   
</FooterSlide>

<Content>
    <p>ddddddddddddd</p>
</Content>




</Container>



{/* <div>
    <InstagramIcon />
</div> */}



        </FooterContainer>

<Copyright>
  <p>Copyright &copy;2021</p>
</Copyright>


        </>


     );
}
 
export default Footer;