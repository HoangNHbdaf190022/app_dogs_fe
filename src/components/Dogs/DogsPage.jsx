import React from 'react'
import "animate.css";
import DogsCard from './DogsCard'

const DogsPage = (props) => {
  const { allDogs } = props;
  return (
    <>
        <section className="dogs-container animate__animated animate__flipInX">
          {allDogs.map((dogs) => { 
            return(
              <div key={dogs.id}>
                <DogsCard 
                id={dogs.id} 
                name={dogs.name} 
                breed={dogs.breed} 
                description={dogs.description} 
                price={dogs.price} 
                imageUrl={dogs.imageUrl} />
              </div>
            )
          })}
        </section>
    </>
  )
}

export default DogsPage