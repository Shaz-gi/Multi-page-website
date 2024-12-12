import React from 'react'

const Watch = () => {

const watchData = [
    { id: 1, name: 'Rolex', price: 12000, description: "Luxury", image: "/rolex.png"},
    { id: 2, name: 'Omega', price: 8000, description: "Sporty", image: "/omega.png"},
    { id: 3, name: 'Patek Philippe', price: 25000, description: "Class and Elegance", image: "/patek.webp"},
    { id: 4, name: 'TAG Heuer', price: 5000, description: "stylish", image: "/tag heuer.png"},
    { id: 5, name: 'Breitling', price: 7000, description: "Bold and Rugged", image: "/breitling.png"},
    { id: 6, name: 'Seiko', price: 1000, description: "Affordable and Reliable", image: "/seiko.webp"}
]

  return (
    <div>
        <div className='watches'>
            {watchData.map((watch) => (
                <div key={watch.id} className='watch-card'>
                    <img src={watch.image} alt={watch.name}/>
                    <h3>{watch.name}</h3>
                    <p>{watch.description}</p>
                    <div className='price'>${watch.price}</div>\
                    <button>Add to Cart</button> 
                </div>
            ))}
        </div>
    </div>
  )
}

export default Watch