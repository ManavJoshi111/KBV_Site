import React from 'react'
// import headerimg from  "../Photos/school.jpg";
import principalimg from "../Photos/principal.jpg";
import "../CSS/Header.css";
import Footer from './Footer';

const Header = () => {
  return (
    <>
      <div className="container-fluid p-0 " id="bg-img">
        <div className="background_img">
        </div>
      </div>
      <section id="about" className="about padding-top">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
              <img src={principalimg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6  order-2 order-lg-1 content">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical</p>
              <p> literature, discovered the undoubtable source. Lorem Ipsum
                comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" The Extremes of Good and Evil
                by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.3
              </p>
            </div>
          </div>

        </div>
      </section>



      <div className="container-xxl ">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-sm-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                  <h5 className="mb-3">Skilled Instructors</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                  <h5 className="mb-3">Online Classes</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-home text-primary mb-4"></i>
                  <h5 className="mb-3">Home Projects</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 ">
        <div className="container-fluid row">
          <iframe className="col-sm-4 col-md-4" src="https://www.youtube.com/embed/vlDzYIIOYmM"></iframe>
          <iframe className="col-sm-4 col-md-4" src="https://www.youtube.com/embed/vlDzYIIOYmM"></iframe>
          <iframe className="col-sm-4 col-md-4" src="https://www.youtube.com/embed/vlDzYIIOYmM"></iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Header;