import React from 'react'
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'

const Banner = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h1>
            <div className='line'>
              <span>Создаём уникальные проекты</span>
            </div>
            <div className='line'>
              <span>с душой.</span>
            </div>
          </h1>
          <div className='btn-row'>
            <a className='hover:bg-yellow-400 bg-yellow-300 py-2 px-6 rounded-xl' href='/'>
              Больше о нас
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
