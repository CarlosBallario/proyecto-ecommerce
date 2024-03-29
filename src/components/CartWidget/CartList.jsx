import { Link } from "react-router-dom";
import CartItem from "./CartItem.jsx"
import useCartContext from "../../hook/useCartContext.jsx";
import './cart.css'

const CartList = () =>{
    const { cart, removeTCart, incrementCart, decrementCart} = useCartContext()

    const handleDelete = (id) =>{
    removeTCart(id);
    } 
    const onIncrementCart = (id)=>{
      incrementCart(id);
    }
    const onDecrementCart = (id) =>{
      decrementCart(id);
    }

    const calculateTotal = () => {
    
      const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
      return total.toFixed(0); 
    };
    return(
      <div>
           <div className="titleDetail">
              <h2>Detalle de compra</h2>
              <p>TOTAL:${calculateTotal()}</p>
              <Link to='/chekin'>
              <button className="finishbuy">Finalizar la compra</button>
              </Link>
           </div>
           <table className="cart-table">
             <thead>
               <tr>
                 <th>##</th>
                 <th>Producto</th>
                 <th>Precio</th>
                 <th>Cantidad</th>
                 <th className="delete-column">Eliminar</th>
               </tr>
             </thead>
             <tbody>
             
               {cart.length > 0 ? ( 
               cart.map((item) => (
              <CartItem key={item.id} item={item} handleDelete={handleDelete} handleIncrement={onIncrementCart} handleDecrement={onDecrementCart} />
               ))
               ) : (
                
                 <tr>
                  <th colSpan="5" className="cartVacio">El carrito de compras está vacío <br /> <Link to="/" className="Link" >Volver a comprar</Link></th>
                 </tr>
  )}           
             </tbody>
           </table>
      </div>
      
    )
}

export default CartList