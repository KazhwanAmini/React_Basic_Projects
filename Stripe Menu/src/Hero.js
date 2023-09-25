import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the interner</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
            alias saepe ducimus nesciunt at, itaque officia inventore laudantium
            atque aspernatur nisi et laboriosam dolorem ullam!
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  )
}

export default Hero
