import {Link} from "react-router-dom";

const Item = ({element}) => {
	
	return (
		<div className="col-sm-4 p-2">
			<div className="card align-content-center">
				<img src={element.img} alt={element.description} className="card-img-top" />
				<div className="card-body">
				<h2>{element.name}</h2>
				<h3>${element.price}</h3>
				<span className="float-end" ><Link to={`/itemDetail/${element.id}`}>+ details</Link></span>
				</div>
			</div>
		</div>
	);
	
};

export default Item;