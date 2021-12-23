import styled from "styled-components";
import Image from "next/image";
import imgone from "../../public/Images/slide1.jpg";
const Mainsectioncontainer = styled.div``;
const ImageOne = styled.div`
  background: url("https://images.unsplash.com/photo-1580446623001-3abf670c5c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80")
    no-repeat center center/cover;

  height: 80vh;
`;
const ImageTwo = styled.div`
  background: url("https://images.unsplash.com/photo-1599135343721-6c8d4c1b8b58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80")
    no-repeat center center/cover;
    height: 80vh;
`;

const ImageThree = styled.div`
  background: url("https://images.unsplash.com/photo-1567725925717-c97179625db9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80")
    no-repeat center center/cover;

    height: 80vh;
`;

const ImageFour = styled.div`
  background: url("https://images.unsplash.com/photo-1570829174962-38c53efc5e5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=863&q=80")
    no-repeat center center/cover;
    height: 80vh;
`;
const ImageFive = styled.div`
  background: url("https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
    no-repeat center center/cover;

    height: 80vh;
`;
const ImageSix = styled.div`
  background: url("https://images.unsplash.com/photo-1612393266591-c32944e815c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
    no-repeat center center/cover;
    height: 80vh;
`;


const SliderContainer = styled.div`
   width: 100%;
`;

const Mainsection = () => {
  return (
    <Mainsectioncontainer>
      <SliderContainer
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
              <h5>Ferari 101</h5>
              <p>
              This is one of the top speed cars in the world.
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
              <h5>Lamborgini 96</h5>
              <p>
                The most luxurius cars in the world.
              </p>
            </div>
          </ImageThree>

          <ImageFour className="carousel-item">
            <div className="carousel-caption d-none d-md-block">
              <h5>Lambo veron</h5>
              <p>
                The coolest cars in the car industrie.
              </p>
            </div>
          </ImageFour>

          <ImageFive className="carousel-item">
            <div className="carousel-caption d-none d-md-block">
              <h5>Jeep 960</h5>
              <p>
                Jeep is the most used cars recently.
              </p>
            </div>
          </ImageFive>

          <ImageSix className="carousel-item">
            <div className="carousel-caption d-none d-md-block">
              <h5>Sport Cars</h5>
              <p>
                the most adorable cars in the world.
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




        
      </SliderContainer>
    </Mainsectioncontainer>
  );
};

export default Mainsection;
