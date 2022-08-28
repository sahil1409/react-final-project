import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class About extends React.Component {

    render() {
        return (
            <div>
            <div className='container-fluid' >
            <div className="row">
            <div className="col-12">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://convertingcolors.com/plain-95A5A6.svg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h2><b>About Us</b></h2>
                        <br></br><br></br>
                        <h3>FindMyEvents is an app where users can view and add the upcoming events in their region.</h3>
                        <br></br><br></br><br></br>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://convertingcolors.com/plain-95A5A6.svg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h2><b>Team</b></h2>
                        <br></br><br></br>
                        <h3>Sahil Shaikh</h3>
                        <h5>Trainee Software Engineer</h5>
                        <br></br><br></br><br></br>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            </div>
            </div>
            </div>
        )
    };
}

export default About;