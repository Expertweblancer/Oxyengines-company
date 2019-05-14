import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";
import Slider from "react-slick";

class Review extends Component{

	state = {
		reviews: []
	};

	async componentDidMount() {
		await axios.get('http://' + process.env.REACT_APP_PUBLIC_URL + '/api/reviews')
			.then(res => {
				this.setState({
					reviews: res.data
				})
			})
	}

	getCarousel (index, reviews) {
		return (
				reviews.map((el, id) => {
				return (
					<div className="" key={id}>
						<div className="customer-box my-4">
							<h4 className="mb-4">{el.client_name}</h4>
							<p><span></span>{el.client_review}<span className="dar"></span></p>
						</div>
					</div>
				)
				})

		)
	}

	render(){
		let settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 3
		};
		return(
			<section className="customer py-5  " id="review">
				<div className="container">
					<div className="customer-area">
						<div className="title mb-5">
							<h2 className="text-center">Customer Reviews</h2>
						</div>

						<div id="demo" className="carousel slide" data-ride="carousel">
							<div className="">
								<Slider {...settings}>
									{ this.getCarousel(0, this.state.reviews)}
								</Slider>
							</div>
							{/*<ul className="carousel-indicators">*/}
							{/*	<li data-target="#demo" data-slide-to="0" className="active"></li>*/}
							{/*	<li data-target="#demo" data-slide-to="1"></li>*/}
							{/*	<li data-target="#demo" data-slide-to="2"></li>*/}
							{/*</ul>*/}

							{/*<div className="carousel-inner mb-4">*/}
							{/*	{ this.getCarousel(0, this.state.reviews)}*/}
							{/*	{ this.getCarousel(1, this.state.reviews)}*/}
							{/*	{ this.getCarousel(2, this.state.reviews)}*/}
							{/*</div>*/}
							{/*<div className="control">*/}

							{/*	<Link className="carousel-control-prev" to=""  data-target="#demo" data-slide="prev">*/}
							{/*	<span className="carousel-control-prev-icon" data-target="#demo">*/}
							{/*		<i className="fas fa-angle-left"></i>*/}
							{/*	</span>*/}
							{/*	</Link>*/}
							{/*	<Link className="carousel-control-next" to="" data-target="#demo" data-slide="next">*/}
							{/*	<span className="carousel-control-next-icon" >*/}
							{/*		<i className="fas fa-angle-right"></i>*/}
							{/*	</span>*/}
							{/*	</Link>*/}
							{/*</div>*/}
						</div>
						<div className="social d-none d-sm-block mt-3">
							<div className="row">
								<div className="col-sm-4">
									<div className="inst mt-4 px-5">
										<Link to="#" className="text-danger"><i  className="fab fa-instagram"></i></Link>
									</div>
								</div>
								<div className="col-sm-4 px-5">
									<div className="mt-4">
										<Link className="text-danger" to="#"><i className="fab fa-youtube"></i></Link>
									</div>
								</div>
								<div className="col-sm-4 px-5">
									<div className="mt-4">
										<Link to="#" className="text-primary"><i className="fab fa-linkedin-in"></i></Link>
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

export default Review

// <div className="carousel-item active">
// 	<div className="row">
// 	<div className="col-6 col-md-3">
// 	<div className="customer-box my-4">
// 	<h4 className="mb-4">SuperTech</h4>
// <p><span></span>Great Service! Thanks for the product, love it and very professional<span className="dar"></span></p>
// </div>
// </div>
// <div className="col-6 col-md-3">
// <div className="customer-box my-4">
// <h4 className="mb-4">SuperTech</h4>
// <p><span></span>Great Service! Thanks for the product, love it and very professional<span className="dar"></span></p>
// </div>
// </div>
// <div className="col-6 col-md-3">
// <div className="customer-box my-4">
// <h4 className="mb-4">SuperTech</h4>
// <p><span></span>Great Service! Thanks for the product, love it and very professional<span className="dar"></span></p>
// </div>
// </div>
// <div className="col-6 col-md-3">
// <div className="customer-box my-4">
// <h4 className="mb-4">SuperTech</h4>
// <p><span></span>Great Service! Thanks for the product, love it and very professional<span className="dar"></span></p>
// </div>
// </div>
// </div>
// </div>