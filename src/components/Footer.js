import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Footer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
             
        }
     }
    
    render() {
        return(
            <footer>
                <div className="container">
                    <div className="footer-area pt-5"> 
                        <div className="row">
                            <div className="col-6 col-md-4 col-xl-3">
                                <div className="footer-item mb-5">
                                    <figure className="figure">
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "assets/images/logo.png"} alt="" width="280" height="280"/>
                                    </figure>
                                    <div className="text mb-5">
                                        <h3>OnyxEngines</h3>
                                        <p className="text-white d-none d-sm-block">Dont break your dream, compile them</p>
                                    </div>
                                    <div className="about-info d-none d-md-block mb-5">
                                        <h3 className="text-left">About us</h3>
                                        <p className="text-white">Develope the way you want</p>
                                    </div>
                                    <div className="contact-info">
                                        <h3 className="text-left mb-1">Contact</h3>
                                        <Link className="text-white " to="mailto:support@onyxengines.com"><i className="far fa-envelope"> support@onyxengines.com</i> </Link>
                                        <a className="text-white tel" href="tel:"><i className="fas fa-phone"></i> 0000-000-00-000</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-xl-3">
                                <div className="footer-item info mb-5">
                                    <h3 className="mb-3">Information</h3>
                                    <ul className="nav navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">About us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Team</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Hire us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-xl-3 d-none d-md-block">
                                <div className="footer-item link mb-5">
                                    <h3 className="mb-3">Helpful links</h3>
                                    <ul className="nav navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">FAQ</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Privacy Policy</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Terms & Condition</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Services</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-xl-3 d-none d-md-block">
                                <div className="footer-item subcribe mb-5">
                                    <h3 className="text-white mb-3">Dont miss out subcribe us</h3>
                                    <form>
                                        <div className="form-group">
                                            <input className="form-control email" type="email" placeholder="Email" />
                                        </div>
                                        <button className="btn btn-light subcribe-btn">Subcribe</button>	
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                
                <div className="copyright-container py-2">
                    <div className="copyright">
                        <p className="text-center text-white my-2">Copyright 2019 onyxengines</p>
                        <ul className="social">
                            <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                        </ul>
                    </div>
                </div>
		</footer>
        )
    }
}

export default Footer