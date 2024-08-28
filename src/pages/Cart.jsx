import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import formatCurrency from "../utils/formatCurrency";

function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        if (!response.ok) {
          throw new Error("Error al obtener las pizzas");
        }
        const data = await response.json();

        
        const pizzasConCantidad = data.map((pizza) => ({
          ...pizza,
          cantidad: 0, 
        }));

        setCart(pizzasConCantidad);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  const handleIncrease = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
    );
    setCart(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza
      )
      .filter((pizza) => pizza.cantidad > 0);
    setCart(updatedCart);
  };

  const total = cart.reduce(
    (sum, pizza) => sum + (pizza.price || 0) * pizza.cantidad,
    0
  );

  if (loading) return <p>Cargando pizzas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((pizza) => (
            <div key={pizza.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={pizza.img}
                    className="img-fluid rounded-start"
                    alt={pizza.name}
                    onError={(e) => (e.target.src = "/path/to/placeholder.jpg")}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{pizza.name}</h5>
                    <p className="card-text">
                      Precio: {formatCurrency(pizza.price || 0)} {}
                    </p>
                    <p className="card-text">Cantidad: {pizza.cantidad}</p>
                    <button
                      className="btn btn-secondary me-2"
                      onClick={() => handleDecrease(pizza.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleIncrease(pizza.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: {formatCurrency(total)}</h3>
          <button className="btn btn-success me-2">Pagar</button>
          <Link to="/" className="btn btn-outline-secondary">
            Seguir Comprando
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
