import React, {Component} from 'react'
import axios from "axios";
// import {Link} from 'react-router-dom'
// import Tabs from 'react-bootstrap/Tabs'
 import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav';

class Product extends Component{
    constructor(){
        super();
        this.state = {
            products: []
        } 
    }
    handleActiveButton(e){
        e.preventDefault();

        const activeName = e.target.name;
        this.setState({activeName});
    }

    async componentDidMount() {
        await axios.get('http://' + process.env.REACT_APP_PUBLIC_URL + '/api/products')
            .then(res => {
                this.setState({
                    products: res.data
                })
            })
    }

    getSelectedProducts (products, category) {
        return (
            products.map((el, id) => {
                if(el.product_category.toUpperCase() === category.toUpperCase()) {
                    return (
                        <div className="col-6 col-md-3" key={id}>
                            <div className="product-item mb-4">
                                <figure className="figure mb-4">
                                    <img className="img-fluid img-product" src={'http://' + process.env.REACT_APP_PUBLIC_URL + "/uploads/" + el.product_image} alt="Products" width="300" height="200" />
                                </figure>
                            </div>
                        </div>
                    )
                }
                else {
                    return null
                }
            })
        )
    }
    render(){
        return(
            <section className="product pt-5  product" id="product"> 
                <div className="container">
                    <div className="product-area">
                        <div className="title mb-5">
                            <h2 className="text-center">Some of our products</h2>
                        </div>
                   
                         <Tab.Container defaultActiveKey="app">
                        <div className="button-groups mt-3">
                            <ul className="nav nav-tabs" id="product_btn">
                                <li className="nav-item">
                                     <Nav.Item>
                                        <Nav.Link eventKey="design" name="design"    className= 'btn  text-center' >Design</Nav.Link>
                                    </Nav.Item>
                                </li>
                                <li className="nav-item">
                                    <Nav.Item>
                                        <Nav.Link eventKey="app" name="app"  className= 'btn   text-center'  >App</Nav.Link>
                                    </Nav.Item>
                                </li>
                                <li className="nav-item">
                                    <Nav.Item>
                                        <Nav.Link eventKey="web" name="web" className= 'btn  text-center'  >Web</Nav.Link>
                                    </Nav.Item>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="product-item-container pt-5">
                            <Tab.Content>
                                <Tab.Pane eventKey="design">
                                    <div className="row">
                                        { this.getSelectedProducts(this.state.products, 'design') }
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="app">
                                    <div className="row">
                                        { this.getSelectedProducts(this.state.products, 'app') }
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="web">
                                    <div className="row">
                                        { this.getSelectedProducts(this.state.products, 'web') }
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                        </Tab.Container>
                  
                    </div>
                </div>
            </section>
        )
    }
}

export default Product