import Nav from "../src/Components/Nav";
import Head from "next/head";
import Mainsection from "../src/Components/Mainsection";
import Cars from "../src/Components/Cars";
import Footer from "../src/Components/Footer";
import CustomForm from "../src/Components/NewsletterForm";
import styled from "styled-components";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import AboutPage from "../src/Components/AboutPage";
import GoogleLogin from "react-google-login";


const WhatsappContainer=styled.div`
.whatsapp_float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.whatsapp-icon {
  margin-top: 16px;
}

/* for mobile */
@media screen and (max-width: 767px) {
  .whatsapp-icon {
      margin-top: 10px;
  }

  .whatsapp_float {
      width: 40px;
      height: 40px;
      bottom: 20px;
      right: 10px;
      font-size: 22px;
  }
}




`

const CustomFormContainer=styled.div`

width:50%;
padding:2em;
display:flex;
justify-content:center;
flex-wrap:wrap;
margin:2em;



`






export default function Home() {
  return (
    <div>
      
      <Head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
      </Head>
     <Nav  />
     
      <Mainsection/>
    
     <Cars/>  

     <div className="inputs">
<CustomForm/>
</div>

<AboutPage />


     
      <Footer/>




<WhatsappContainer>

<a
        href="https://wa.me/254717911169"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>





</WhatsappContainer> 
  
 






    </div>
  );
}
