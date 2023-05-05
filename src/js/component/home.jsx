import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

window.onload = () => {
	const Home = () => {
		return (
			<div className="container d-flex bg-black text-white" id="caja">
				<div className="a bg-dark fs-1 text m-3 p-2 rounded"><i class="fa-regular fa-clock"></i></div>
				<div className="b bg-dark fs-1 text m-3 p-2 rounded">2</div>
				<div className="c bg-dark fs-1 text m-3 p-2 rounded">3</div>
				<div className="d bg-dark fs-1 text m-3 p-2 rounded">4</div>
				<div className="e bg-dark fs-1 text m-3 p-2 rounded">5</div>
				<div className="f bg-dark fs-1 text m-3 p-2 rounded">6</div>
				<div className="g bg-dark fs-1 text m-3 p-2 rounded">7</div>
			</div>
		);
	};
}


export default Home;
