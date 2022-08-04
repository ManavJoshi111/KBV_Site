import React from 'react'
import "../CSS/Style.css";
const Contact = () => {
    return (
        <>
            <section className="contact p-0" id="contact-bg-imag">
                <div className="content mt-5">
                    <h2>About Us</h2>
                    <p>If you have any questions,issues.We're here to help.Check here to find the answers to your questions here and get in touch with us if you need to.</p>
                </div>
                <div className="container row flex justify-content-center">
                    <div className="col-sm-6">
                        <div class="card mx-auto" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h5 class="card-title text-dark">Card title</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Lorem ipsum dolor sit amet.</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div class="card mx-auto" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h5 class="card-title text-dark">Card title</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Lorem ipsum dolor sit amet.</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
