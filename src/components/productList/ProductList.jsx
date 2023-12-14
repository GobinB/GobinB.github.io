import React, { Component } from 'react';
import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data";
import KFC from "../../img/kfc.png"
import NG from "../../img/ng.png"
import KB from "../../img/KeyBankLogo.png"

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          img: KB,
          title: "DevOps Engineer Intern",
          subtitle: "05/2023 - 08/2023",
          description: "ServiceNow Developer"
        },
        {
          img: NG,
          title: "Cyber Software Engineer CO-OP",
          subtitle: "01/2023 - 05/2023",
          description: "C o d i n g."
        },
        {
          img: KFC,
          title: "Software Engineer Intern",
          subtitle: "10/2021 - 01/2023",
          description: "Participating in code reviews, sprint planning, and peer coding exercises. Utilizing React framework and TypeScript to work on KFC.com."
        },
        {
          img: KFC,
          title: "Digital Development Intern",
          subtitle: "11/2020 - 10/2021",
          description: "Part of the Scrum team. Wrote PowerShell scripts to pull data from json files. Utilized Browserstack and Bomgar for POS and Confidence testing."
        }
        
      ]
    };
  }

  render() {
    return (
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Experiences</h1>
        </div>
        {this.state.productList.map((product, index) => (
          <div className="pl-list" key={index}>
            <img src={product.img} alt="" className="work-img" />
            <div className="work-body">
              <p className="work-title"><b>{product.title}</b> <i>{product.subtitle}</i></p>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;

