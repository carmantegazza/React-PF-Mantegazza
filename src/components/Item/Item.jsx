import {Link} from "react-router-dom";
import "../CartWidget/CartWidget.css"

const Item = ({element}) => {
	
	return (
		<div className="col-sm-4 p-2">
			<div className="card align-content-center">
				<img src={element.img} alt={element.description} className="card-img-top" />
				<div className="card-body">
				{element.sale === true && <span className="badge text-light float-end fs-5 colorMarcaSecundario">SALE!</span>}
				<h4 className="text-uppercase">{element.artist}</h4>	
				<h3>{element.name}</h3>				
				<h5>${element.price}</h5>
				<span className="float-end" ><Link to={`/itemDetail/${element.id}`}>+ details</Link></span>
				</div>
			</div>
		</div>
	);
	
};

export default Item;