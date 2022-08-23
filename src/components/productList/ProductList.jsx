import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data";
import KFC from "../../img/kfc.png"
import KFC2 from "../../img/kfc2.png"
import KYWORKS from "../../img/kyworks.png"



const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Experiences</h1>
                {/* <p className="pl-desc">
                Lama is a creative portfolio that your work has been waiting for.
                Beautiful homes, stunning portfolio styles & a whole lot more awaits
                inside.
            </p> */}
            </div>
            <div className="pl-list">
                <img src={KFC} alt="" className="work-img" />
                <div className="work-body">
                    <p className="work-title"><b>Software Engineer Intern</b> <i>10/2021 - present</i></p>
                    <p> Participating in code reviews, sprint planning, and peer coding exercises.
                        | Utilizing React framework and TypeScript to work on KFC.com.
                    </p>
                </div>
            </div>

            <div className="pl-list">
                <img src={KFC2} alt="" className="work-img"  />
                <div className="work-body">
                    <p className="work-title"><b>Digital Development Intern</b> <i>11/2020 - 10/2021</i></p>
                    <p> Part of the Scrum team
                        | Wrote PowerShell scripts to pull data from json files | Utilized Browserstack and Bomgar for POS and Confidence testing.
                    </p>
                    
                </div>
            </div>

            <div className="pl-list">
                <img src={KYWORKS} alt="" className="work-img" />
                <div className="work-body">
                    <p className="work-title"><b>Student Developer</b> <i>6/2020 - 8/2020</i></p>
                    <p> Completed assigned online courses to gain a better understanding of JavaScript and Python programming languages through the Bracket software. </p>
                </div>
            </div>






                {/* {products.map((item) => ( 
                 <Product key={item.id} img={item.img} link={item.link}/>
                 ))} */}

            {/* </div> */}
        </div>
    );
};

export default ProductList