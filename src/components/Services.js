import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ServicesNext } from '../assets/arrow-right.svg'
import { ReactComponent as ServicesPrev } from '../assets/arrow-left.svg'

const serviceStudies = [
  {
    id: 1,
    subtitle: '',
    title: "Разработка сайта",
    link: '',
    img: 'moncaprice-min'
  },
  {
    id: 2,
    subtitle: 'Яндекс.Карты, 2GIS, Zoon',
    title: 'Продвижение на ГЕО сервисах',
    link: 'uslugi/geo-servisy',
    img: 'maps-min'
  },
  {
    id: 3,
    subtitle: 'SEO продвижение',
    title: `SEO продвижение в поиске Яндекса`,
    link: '',
    img: 'winedeal-min'
  }
]

const Services = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='cases-navigation'>
          <div className='cases-arrow prev disabled'>
            <ServicesPrev />
          </div>
          <div className='cases-arrow next'>
            <ServicesNext />
          </div>
        </div>
        <div className='row'>
          {serviceStudies.map((serviceItem) => (
            <div className='case' key={serviceItem.id}>
              <Link to={serviceItem.link}>
                <div className='case-details'>
                  <span>{serviceItem.subtitle}</span>
                  <h2>{serviceItem.title}</h2>
                </div>
                <div className='case-image'>
                  <img src={`/assets/${serviceItem.img}.png`} alt={serviceItem.title} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
