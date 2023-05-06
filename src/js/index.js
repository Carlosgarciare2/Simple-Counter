//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

function Counter(props) {
	return (
		<div className="container d-flex bg-black text-white" id="caja">
			<div className="a bg-dark fs-1 text m-3 p-2 rounded">
				<i class="fa-regular fa-clock"></i>
			</div>
			<div className="b bg-dark fs-1 text m-3 p-2 rounded">{props.digitSix % 10}</div>
			<div className="c bg-dark fs-1 text m-3 p-2 rounded">{props.digitFive % 10}</div>
			<div className="d bg-dark fs-1 text m-3 p-2 rounded">{props.digitFour % 10}</div>
			<div className="e bg-dark fs-1 text m-3 p-2 rounded">{props.digitThree % 10}</div>
			<div className="f bg-dark fs-1 text m-3 p-2 rounded">{props.digitTwo % 10}</div>
			<div className="g bg-dark fs-1 text m-3 p-2 rounded">{props.digitOne % 10}</div>
		</div>
	);
}

Counter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number
};

let count = 0;
setInterval(function(){
	const six = Math.floor(count/100000);
	const five = Math.floor(count/10000);
	const four = Math.floor(count/1000);
	const three = Math.floor(count/100);
	const two = Math.floor(count/10);
	const one = Math.floor(count/1);
	count ++;
	ReactDOM.render(
		<Counter  digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>,
		document.querySelector('#app')
	);
},1000);