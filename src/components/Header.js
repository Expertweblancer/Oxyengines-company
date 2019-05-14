import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Header extends Component {
    
    // constructor(props) {
    //     this.state = {
            
    //     }
    // }
    
    render() {
        return(
           
        <header>
            <div className="container" id="home">
                <div className="header-area"> 
                    <nav className="navbar navbar-expand-md">
                        <div className="toogle">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">   
                                    <div className="toogle-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </button>
                        </div>
                        
                        <div className="brand">
                            <Link className="navbar-brand" to="#">
                                <figure className="figure">
                                    <img className="img-fluid  " src={process.env.PUBLIC_URL + "assets/images/logo.png"}  alt="Logo"/>
                                </figure>
                                <span className=" ">Oxyengines</span>
                            </Link>
                        </div>

                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <div className="menu">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><Link className="nav-link active" to="#banner" >Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#product">Products</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#review">Reviews</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#contact">Contact</Link>
                                    </li>    
                                </ul>
                            </div>
                        </div>
                    </nav>	
                </div> 
            </div>
        </header>
        )
    }
}

export default Header