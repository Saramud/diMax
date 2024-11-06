import Image from 'next/image'

type Service = {
  url: string
  alt: string
}

type Services = Record<string, Service>

const serviceMap: Services = {
  selection: {url: '/images/selection.jpg', alt: 'Подбор автомобиля под ключ'},
  inspection: {url: '/images/inspection.jpg', alt: 'Разовый осмотр автомобиля'},
  expertForTheDay: {url: '/images/expertForTheDay.jpg', alt: 'Эксперт на день'},
  carFromJapanEurope: {
    url: '/images/carFromJapanEurope.jpg',
    alt: 'Автомобили из Японии и Европы',
  },
  helpForSale: {
    url: '/images/helpForSale.jpg',
    alt: 'Помощь в продаже автомобиля',
  },
}

export default function MainSection() {
  const servicesRender = ({url, alt}: Service) => {
    return (
      <a href="https://wa.me/79215607819">
        <Image src={url} alt={alt} width="300" height="300" />
      </a>
    )
  }

  return (
    <main>
      <section id="features">
        <h2>Услуги</h2>
        <div className="features">
          {Object.values(serviceMap).map(servicesRender)}
        </div>
      </section>
      <section id="about">
        <h2>О нас</h2>
        <p>Learn more about our team and mission.</p>
      </section>
      <section id="contact">
        <h2>Контакты</h2>
        <p>Get in touch with us.</p>
      </section>
    </main>
  )
}
