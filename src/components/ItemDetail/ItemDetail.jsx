import PropTypes from "prop-types";
import ItemCount from "../ItemCount/ItemCount.jsx";
import "../ItemCount/ItemCount.css";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const stockAsNumber = parseInt(item.stock, 10);

  return (
    <div className="all">
      <div>
        <img src={item.img} alt={item.title} className="imgDetail" />
      </div>
      <div>
        <div className="title">
          <h3 >{item.title}</h3>
        </div>
        <ul className="list">
          <li>Descripción: {item.description}</li>
          <li>Precio: ${item.price}</li>
          <li>Cantidad en stock: {item.stock}</li>
          <ItemCount stock={stockAsNumber} item={item}/>
        </ul>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemDetail;
