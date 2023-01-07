import {Link} from "react-router-dom";
import "../CartWidget/CartWidget.css"

const Item = ({element}) => {
	
	return (
		<div className="col-sm-4 p-2">
			<div className="card align-content-center">
				<img src={element.img} alt={element.description} className="card-img-top" />
				<div className="card-body">
				<h2>{element.name}
				{element.sale === true && <span className="badge text-light float-end fs-5 colorMarcaSecundario">SALE!</span>}
				</h2>				
				<h3>${element.price}</h3>
				<span className="float-end" ><Link to={`/itemDetail/${element.id}`}>+ details</Link></span>
				</div>
			</div>
		</div>
	);
	
};

export default Item;