import React, { useState, useEffect } from 'react';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]); //almacena las pizzas
  const [loading, setLoading] = useState(true); //maneja la carga
  const [error, setError] = useState(null); //maneja errores

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las pizzas');
        }
        return response.json();
      })
      .then(data => {
        setPizzas(data); 
        setLoading(false); 
      })
      .catch(error => {
        setError(error.message); 
        setLoading(false); 
      });
  }, []);

  
  if (error) {
    return <p>Error: {error}</p>;
  }

  
  if (loading) {
    return <p>Cargando pizzas...</p>;
  }

  return (
    

      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-4 mb-3">
            <CardPizza 
              nombre={pizza.name}
              descripcion={pizza.desc}
              precio={pizza.price}
              imagen={pizza.img}
              ingredientes={pizza.ingredients}
            />
          </div>
        ))}
      </div>
    
  );
};

export default Home;
