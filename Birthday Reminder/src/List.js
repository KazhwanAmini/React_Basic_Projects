import React from 'react'

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image, gender } = person
        return (
          <article key={id} className='person'>
            <img className={gender} src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <p>{gender}</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
