import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";class Introduce extends Component{	constructor(){
		super();
		this.state = {
			services: []
		}
	}	async componentDidMount() {
		await axios.get('http://' + process.env.REACT_APP_PUBLIC_URL + '/api/services')
			.then(res => {
				this.setState({
					services: res.data
				})
			})
	}	getSelectedService (services, category) {
		return (
			services.map((el, id) => {
				if (el.service_category.toUpperCase() === category.toUpperCase()) {
					return (
						<li className="dropdown-item" key={id}>
							<Link to="#">{el.service_name}</Link>
						</li>
					)
				} else {
					return null
				}
			})
		)
	}	render(){
        return(
            <section className="intro"> 
			<div className="tagline px-3 py-4">
				<h2 className="text-center text-white my-1">Oxyengine code</h2>
			</div>			<div className="intro-area-container pt-5">
				<div className="container">
					<div className="intro-area">
						<div className="title mb-5">
							<h2 className="text-center text-white">What we do</h2>
						</div>
						<div className="row">
							<div className="col-3 col-sm-3">
								<div className="intro-area-item  mb-5">
									<button type="button" className="btn center bg-default btn-primary dropdown-toggle text-white mb-4" data-toggle="dropdown">Design</button>									<ul className="dropdown-menu">
										{ this.getSelectedService(this.state.services, 'design') }
									</ul>
								</div>
							</div>
							<div className="col-3 col-sm-3">
								<div className="intro-area-item dropdown mb-5">
									<button type="button" className="btn center bg-default btn-primary dropdown-toggle text-white mb-4" data-toggle="dropdown">Backend</button>
									<ul className="dropdown-menu">
										{ this.getSelectedService(this.state.services, 'Backend') }
									</ul>
								</div>
							</div>
							<div className="col-3 col-sm-3">
								<div className="intro-area-item mb-5">
									<button type="button" className="btn center bg-default btn-primary dropdown-toggle text-white mb-4" data-toggle="dropdown">Marketing</button>
									<ul className="dropdown-menu">
										{ this.getSelectedService(this.state.services, 'Marketing') }
									</ul>
								</div>
							</div>
							<div className="col-3 col-sm-3">
								<div className="intro-area-item mb-5">
									<button type="button"  data-dropup-auto="false" className="bg-default center btn btn-primary dropdown-toggle text-white mb-4 " data-toggle="dropdown">Frontend</button>									<ul className="dropdown-menu">
										{ this.getSelectedService(this.state.services, 'Frontend') }
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        )
    }
}
export default Introduce