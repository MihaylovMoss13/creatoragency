import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Меню</div>
            <ul className='nav-links'>
              <li>
                <Link to='/case-studies'>Кейсы студии</Link>
              </li>
              <li>
                <Link to='/approach'>Подход к работе</Link>
              </li>
              <li>
                <Link to='/uslugi'>Услуги</Link>

                <ul>
                  <li>
                    <Link to='/uslugi/geo-servisy'>Продвижение в Гео-сервисах</Link>
                  </li>
                  <li>
                    <Link to='/uslugi/geo-servisy'>Разработка интернет-магазина</Link>
                  </li>
                  <li>
                    <Link to='/uslugi/geo-servisy'>Разработка портала</Link>
                  </li>
                  <li>
                    <Link to='/uslugi/geo-servisy'>Разработка маркетплейсов</Link>
                  </li>
                  <li>
                    <Link to='/uslugi/geo-servisy'>Разработка дизайна веб-сайта</Link>
                  </li>
                  <li>
                    <Link to='/uslugi/geo-servisy'>Seo продвижение сайтов</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/about-us'>О нас</Link>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Контакты</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <Link to='/contact'>Свяжитесь с нами</Link>
                </li>
                <li>
                  <Link to='/audit'>Получите бесплатный аудит</Link>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Офис</li>
                <li>г Москва, ул. Шаболовская, 34</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Телефон</li>
                <li>+7 (999) 755-99-99</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Юридическая информация</li>
                <li>Реквизиты</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
