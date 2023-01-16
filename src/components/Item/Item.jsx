import {Link} from "react-router-dom";

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
					<h4>{element.artist}</h4>	
					<h3 className="titleText">{element.name}</h3>				
					<h5>${element.price}</h5>
					<span className="badge float-end bgBrandColor2" ><Link to={`/itemDetail/${element.id}`}>+ info</Link></span>
				</div>
			</div>
		</div>
	);
	
};

export default Item;