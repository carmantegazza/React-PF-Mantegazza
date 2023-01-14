import {Link} from "react-router-dom";
import "../CartWidget/CartWidget.css"
import ItemOutOfStockBadge from "../ItemOutOfStockBadge/ItemOutOfStockBadge";
import ItemSaleBadge from "../ItemSaleBadge/ItemSaleBadge";

const Item = ({element}) => {
	
	return (
		<div className="col-sm-3 p-2">
			<div className="card align-content-center">
				{element.stock === 0 && <ItemOutOfStockBadge />}
				{element.sale === true && <ItemSaleBadge />}
				<img src={element.img} alt={element.description} className="card-img-top" />
				<div className="card-body">
				<h4 className="text-uppercase">{element.artist}</h4>	
				<h3>{element.name}</h3>				
				<h5>${element.price}</h5>
				<span className="float-end" ><Link to={`/itemDetail/${element.id}`}>+ info</Link></span>
				</div>
			</div>
		</div>
	);
	
};

export default Item;