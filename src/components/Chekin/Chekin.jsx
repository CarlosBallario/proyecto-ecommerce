import React from "react";
import { useState } from "react"
import "./chekin.css"
import useCartContext from "../../hook/useCartContext";
import Swal from "sweetalert2";
import { createOrder } from '../../services/firebaseServices';

const Chekin = () => {
  const [user, setUser] = useState({});
  const [orderNumber, setOrderNumber] = useState(null);
  const { cart } = useCartContext()
  const formRef = React.createRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInput = ({ target }) => {
    setUser(currentValue => {
      currentValue[target.name] = target.value
      return currentValue
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!user.email || !user.username || !user.tel || !user.userlastname || !user.emailconfirm) {
      Swal.fire({
        title: "Todos los campos son obligatorios",
        icon: "error",
        confirmButtonText: "OK",
      });

      return;
    }

    const buy = (cart, user)
    const order = await createOrder(buy);
    setOrderNumber(order);
    Swal.fire({
      title: `¡Su compra fue realizada con exito!   Su número de orden: ${order}`,
      width: 600,
      padding: "3em",
      color: "#716add",
      backdrop: `rgba(0,0,123,0.4)`
    });

    formRef.current.reset();
    setUser({});
    setFormSubmitted(true);
  }
  return (
    <div>
      <form className="form" ref={formRef} onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <br />
        <input type="text" name="username" placeholder="Nombre" value={user.username} onChange={handleInput} />
        <br />
        <label>Apellido:</label>
        <br />
        <input type="text" name="userlastname" placeholder="Apelido" value={user.userlastname} onChange={handleInput} />
        <br />
        <label> Correo electrónico: </label>
        <br />
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleInput} />
        <br />
        <label> Confirme Correo electrónico: </label>
        <br />
        <input type="email" name="emailconfirm" placeholder="Email" value={user.emailconfirm} onChange={handleInput} />
        <br />
        <label>Teléfono:</label>
        <br />
        <input type="number" name="tel" placeholder="011 555 5555" value={user.tel} onChange={handleInput} />
        <br />
        <button type="submit" className="buttonConfirm" onSubmit={handleSubmit}>Confirmar compra</button>
      </form>
      {formSubmitted && orderNumber && (
        <div className="orderNumber">
          <p>Número de orden: {orderNumber}</p>
        </div>
      )}

    </div>

  )
}

export default Chekin