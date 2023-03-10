import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Services from '../components/Services'
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'
import IntroOverlay from '../components/IntroOverlay'

const tl = gsap.timeline()

const serviceAnimation = ({ completeAnimation }) => {
  tl.from('.line span', 1.8, {
    y: 100,
    ease: 'power4.out',
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  })
    .to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4
    })
    .to('.overlay-bottom', 1.6, {
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.4
      }
    })
    .to('.intro-overlay', 0, { css: { display: 'none' } })
    .from('.case-image img', 1.6, {
      scale: 1.4,
      ease: 'ease.inOut',
      delay: -2,
      stagger: {
        amount: 0.4
      },
      onComplete: completeAnimation
    })
}

const ServiceLists = () => {
  const [animationComplete, setAnimationComplete] = useState(false)

  const completeAnimation = () => {
    setAnimationComplete(true)
    alert('complete')
  }

  useEffect(() => {
    // onload animation
    serviceAnimation(completeAnimation)
  }, [])

  return (
    <>
    {animationComplete === false ? <IntroOverlay /> : ''}
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h1>
            <div className='line'>
              <span>Услуги</span>
            </div>
          </h1>
          <div className='btn-row'>
            <a className='hover:bg-yellow-400 bg-yellow-300 py-2 px-6 rounded-xl' href='/'>
              Бесплатная консультация
            </a>
          </div>
        </div>
      </div>
    </section>
    <Services />
    </>
  )
}

export default ServiceLists
