import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/category.css";
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

const categoryData = [
  {
    display: "Fast Food",
    imgUrl: categoryImg01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImg02,
  },
  {
    display: "Asian Food",
    imgUrl: categoryImg03,
  },
  {
    display: "Row Meat",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-3" key={index + 1}>
            <div className="category-item">
              <div className="category-img">
                <img src={item.imgUrl} alt="Category_item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
