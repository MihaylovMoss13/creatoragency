import React from 'react'
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg'
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg'

const caseStudies = [
  {
    id: 1,
    subtitle: 'Салон красоты "Mon Caprice"',
    title: "Разработка Промо сайта сети салона красоты в Москве",
    img: 'moncaprice-min'
  },
  {
    id: 2,
    subtitle: 'Nardy.pro',
    title: 'Первый магазин спортивного инвентаря в России',
    img: 'nardypro-min'
  },
  {
    id: 3,
    subtitle: 'Wine Deal',
    title: `Разработка интернет-магазина алкогольных напитков`,
    img: 'winedeal-min'
  }
]

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='cases-navigation'>
          <div className='cases-arrow prev disabled'>
            <CasesPrev />
          </div>
          <div className='cases-arrow next'>
            <CasesNext />
          </div>
        </div>
        <div className='row'>
          {caseStudies.map((caseItem) => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span className='case-subtitle'>{caseItem.subtitle}</span>
                <span className='case-title'>{caseItem.title}</span>
              </div>
              <div className='case-image'>
                <img src={`/assets/${caseItem.img}.png`} alt={caseItem.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cases
