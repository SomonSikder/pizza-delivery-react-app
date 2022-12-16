import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/heroSection.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero-content">
                <h5 className="mb-3 ">Easy way to make an order</h5>
                <h1 className="mb-4 hero-title">
                  {" "}
                  <span>HUNGRY?</span>Just wait food at
                  <span> your door</span>
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, necessitatibus aut officiis suscipit accusantium
                  laboriosam.
                </p>
                <div className="hero-btns d-flex align-items-center gap-5 mt-4">
                  <button className="order-btn d-flex justify-content-center align-items-center gap-2">
                    Order Now <i class="ri-arrow-right-line"></i>
                  </button>
                  <button className="all-foods-btn d-flex justify-content-center align-items-center ">
                    <Link to="/foods">See all Foods</Link>
                  </button>
                </div>
                <div className=" hero-service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping-icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge!
                  </p>

                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping-icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero-img ">
                <img src={heroImg} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
