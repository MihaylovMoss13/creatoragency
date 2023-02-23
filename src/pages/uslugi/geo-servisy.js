import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

const tl = gsap.timeline()

const serviceAnimation = ({ completeAnimation }) => {
  tl.from('h1 .line span', 1.8, {
    y: 100,
    ease: 'power4.out',
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  })
    .from('h2 .line span', 1.6, {
      y: 100,
      ease: 'power4.out',
      delay: -1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    })
    .from('.btn-row', 1.6, {
      y: 100,
      ease: 'power4.out',
      delay: -1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    })
    .to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      delay: -1,
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
    .from('.section-feauture h2', 1.6, {
      y: 100,
      ease: 'power4.out',
      delay: -1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    })
    .from('.section-feauture p', 1.6, {
      y: 100,
      ease: 'power4.out',
      delay: -1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    })
}

const ServiceItem = () => {
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
    {animationComplete === false ? 
    <>
      <div className='service-page intro-overlay'>
        <div className='top'>
          <div className='overlay-top'></div>
          <div className='overlay-top'></div>
          <div className='overlay-top'></div>
        </div>
        <div className='bottom'>
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom'></div>
        </div>
      </div>
    </>
    : ''}
    <section className='service-page main' style={{'background-image': 'url(/assets/maps-min.png)'}}>
      <div className='container'>
        <div className='row'>
          <h1>
            <div className='line'>
              <span>Продвижение </span>
            </div>
            <div className='line'>
              <span>организации в </span>
            </div>
            <div className='line'>
              <span>Яндекс.Картах, 2ГИС, ZOON</span>
            </div>
          </h1>
          <h2>
            <div className='line'>
              <span>Выведем Вашу карточку в ТОП ГЕО сервисов Яндекс и 2GIS.</span>
            </div>
            <div className='line'>
              <span>Увеличим целевой трафик, лиды и продажи!</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a className='hover:bg-yellow-400 bg-yellow-300 py-2 px-6 rounded-xl' href='/'>
              Бесплатная консультация
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className='section-feauture'>
      <div className='container'>
        <div className='row'>
          <div className='text-center py-24 space-y-8'>
            <h2 className='text-4xl font-extrabold mb-8'>
              <div className='line'>
                <span>Почему важно иметь оформленную карточку?</span>
              </div>
            </h2>
            <p className='text-2xl font-bold px-64'>
              <div className='line'>
                <span>Приведем несколько весомых аргументов, в пользу необходимости настройки ГЕО-сервисов для бизнеса:</span>
              </div>
            </p>

            <div class="section-feautures grid grid-cols-3 py-6">
              <div class="feauture-item space-y-6 py-6 pr-8 border-r">
                <div className='h-14'>
                  <bold className='text-2xl font-bold'>Клиентский Трафик</bold>
                </div>
                <p className='text-lg'>Правильно заполненная и настроенная по алгоритмам Яндекса карточка организации показывается выше и чаще, чем привлекает гораздо больший трафик целевых посетителей.</p>
                <p className='text-lg'>Мы настроим ваши карточки организаций на ГЕО сервисах, так, что вы будете получать с них максимальную отдачу!</p>
              </div>

              <div class="feauture-item space-y-6 py-6 px-8 border-r">
                <div className='h-14'>
                  <bold className='text-2xl font-bold'>Бесплатный способ продвижения</bold>
                </div>
                <p className='text-lg'>После того как на карточку компании начал идти трафик, встает задача превратить посетителей в клиентов. Красивая и информативная карточка дает гораздо больше шансов что клиенты выберут именно вас.</p>
                <p className='text-lg'>Самое главное - можно обойтись даже без платы за рекламу!</p>
              </div>
              
              <div class="feauture-item space-y-6 py-6 pl-8">
                <div className='h-14'>
                  <bold className='text-2xl font-bold'>Имидж</bold>
                </div>
                <p className='text-lg'>Более 70 млн человек в России используют онлайн-карты, чтобы найти или выбрать ресторан, магазин, салон красоты или автосервис. Ищут товары и услуги, уточняют часы работы и контакты.</p>
                <p className='text-lg'>Хорошо заполненный в ГЕО сервисах профиль помогает компании выделиться среди конкурентов, привлечь новых клиентов и повысить продажи.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section-how-work bg-[#fff3d8]'>
      <div className='container'>
        <div className='row'>
          <div className='text-center py-24 space-y-8'>
            <h2 className='text-4xl font-extrabold mb-2'>
              <div className='line'>
                <span>Что мы делаем</span>
              </div>
            </h2>

            <div class="section-our-work grid columns-1 py-2 px-80">
              <div class="feauture-item space-y-4 py-6">
                <div className='h-auto'>
                  <bold className='text-2xl font-bold'>Оформим продающие карточки на Гео Сервисах</bold>
                </div>
                <p className='text-lg'>Как результат, хорошо оформленная карточка выделит вас среди конкурентов, чем привлечет дополнительный трафик. Клиент увидит полную информацию о вашей компании, контакты, сайт, меню или товары.</p>
              </div>

              <div class="feauture-item space-y-4 py-6">
                <div className='h-auto'>
                  <bold className='text-2xl font-bold'>Выводим карточки в ТОП по отзывам</bold>
                </div>
                <p className='text-lg'>Алгоритмы ГЕО сервисов работают так, что компании с более высоким рейтингом отображаются выше. Чем ниже рейтинг, тем меньше клиентского трафика. Если негативные отзывы уже есть, проработаем их и ответим. Сейчас особенно важно иметь хорошую репутацию.</p>
              </div>
              
              <div class="feauture-item space-y-4 py-6">
                <div className='h-auto'>
                  <bold className='text-2xl font-bold'>Отслеживаем статистику и проводим аналитику</bold>
                </div>
                <p className='text-lg'>Постоянно держим вас в курсе текущего положения дел, проводим регулярную аналитику по всем показателям, чтобы не потерять не одного клиента!</p>
              </div>

              <div class="feauture-item space-y-4 py-6">
                <div className='h-auto'>
                  <bold className='text-2xl font-bold'>Подключим рекламу</bold>
                </div>
                <p className='text-lg'>Настроим и подключим рекламу на картах там где это действительно нужно и экономически оправдано.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className='section-count'>
      <div className='container'>
        <div className='row'>
          <div className='text-center py-24 space-y-8'>
            <h2 className='text-4xl font-extrabold mb-8'>
              <div className='line'>
                <span>Сколько стоит?</span>
              </div>
            </h2>

            <div className="section-feautures grid grid-cols-3 py-6">
              <div className="feauture-item space-y-6 py-6 px-8 border relative mx-4">
                <div className='h-24'>
                  <bold className='text-2xl font-bold'>Консультация</bold>
                  <p className='mt-2'>Связыважемся с Вами и все подробно прорабатываем</p>
                </div>
                <p className='text-4xl font-bold uppercase text-red-900'>БЕСПЛАТНО</p>
                
                <ul className='py-4 space-y-4'>
                  <li>Аудит текущих карточек специалистом</li>
                  <li>Советы по оптимизации</li>
                  <li>Советы по правильному оформлению</li>
                </ul>

                <div className='h-14'>
                  <div className='absolute right-0 left-0 bottom-8'>
                    <button className='hover:bg-yellow-400 bg-yellow-300 py-2 px-6 rounded-xl'>Оставить заявку</button>
                  </div>
                </div>
              </div>

              <div className="feauture-item space-y-6 py-6 px-8 border relative mx-4">
                <div className='h-24'>
                  <bold className='text-2xl font-bold'>Карты с сопровождением</bold>
                  <p className='mt-2'>Сопровождение в течении 3-х месяцев</p>
                </div>
                <p className='text-4xl font-bold uppercase text-red-900'>15 000 ₽</p>

                <ul className='py-4 space-y-4'>
                  <li>Создание и настройка карточки в Яндекс-картах</li>
                  <li>Создание карточки в 2ГИС</li>
                  <li>Создание сайта-визитки в Яндекс-бизнес</li>
                  <li>Правильная оптимизация для обеспечения хороших позиций в Поиске</li>
                  <li>Проработаем все отзывы</li>
                  <li>Сопровождение на протяжении 3-х месяцев</li>
                  <li>Постоянное наполнение контентом</li>
                  <li>Анализ и отчет по переходам, звонкам, построению маршрутов</li>
                </ul>

                <div className='h-14'>
                  <div className='absolute right-0 left-0 bottom-8'>
                    <button className='hover:bg-yellow-400 bg-yellow-300 py-2 px-6 rounded-xl'>Оставить заявку</button>
                  </div>
                </div>
              </div>
              
              <div className="feauture-item space-y-6 py-6 px-8 border relative mx-4">
                <div className='h-24'>
                  <bold className='text-2xl font-bold'>Упаковка Карты</bold>
                  <p className='mt-2'>Сопровождение в течении 1 месяца</p>
                </div>
                <p className='text-4xl font-bold uppercase text-red-900'>10 000 ₽</p>

                <ul className='py-4 space-y-4'>
                  <li>Создание и настройка карточки в Яндекс-картах</li>
                  <li>Создание карточки в 2ГИС</li>
                  <li>Создание сайта-визитки в Яндекс-бизнес</li>
                  <li>Проработаем негативные отзывы</li>
                  <li>Правильная оптимизация для обеспечения хороших позиций в Поиске</li>
                  <li>Сопровождение на протяжение месяца</li>
                  <li>Бесплатные консультации, помощь даже после оказания услуг</li>
                </ul>

                <div className='h-14'>
                  <div className='absolute right-0 left-0 bottom-8'>
                    <button className='hover:bg-yellow-400 bg-yellow-300 py-2 px-6 rounded-xl'>Оставить заявку</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ServiceItem
