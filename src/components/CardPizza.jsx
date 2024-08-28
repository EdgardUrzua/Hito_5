import formatCurrency from "../utils/formatcurrency";

function CardPizza({ nombre, precio, imagen, descripcion, ingredientes = [] }) {
  return (
    <div className="card">
      <img src={imagen} className="card-img-top" alt={nombre} /> {}
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Descripcion: {descripcion}</p>
        <p className="card-text">Ingredientes: {ingredientes.join(", ")}</p>
        <p className="card-text">{formatCurrency(precio)}</p>
        <a href="#" className="btn btn-secondary">
          Ver más 👀
        </a>
        <button className="btn btn-dark ms-2"> 🛒Añadir</button>
      </div>
    </div>
  );
}

export default CardPizza;
