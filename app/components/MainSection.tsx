import Image from 'next/image'
import {INSTAGRAM, WHATSHAPP} from '../services/constants'

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
      <a href={WHATSHAPP} target="_blank">
        <Image src={url} alt={alt} width="300" height="300" />
      </a>
    )
  }

  return (
    <main>
      <section id="features">
        <h2 className="main-title">Услуги</h2>
        <div className="features">
          {Object.values(serviceMap).map(servicesRender)}
        </div>
      </section>
      <section id="about">
        <h2 className="main-title">О себе</h2>
        <div className="about-wrapper">
          <div className="about-image-container">
            <Image
              src={'/images/Maks.png'}
              alt={'Максим автоподбор Санкт-Петербург'}
              width="200"
              height="200"
              className="about-image"
            />
          </div>
          <div className="about-container">
            <p className="text-justify">
              Вас приветствует Максим, специалист по подбору и диагностике
              автомобилей в Санкт-Петербурге, а также организатор доставки
              автомобилей под заказ из Японии и Европы. С многолетним опытом в
              сфере автоподбора, я создал свой собственный бренд —{' '}
              <strong>diMAXcar</strong>, который заслужил доверие клиентов
              благодаря качеству и прозрачности.
            </p>
            <div className="about-container__main-info">
              <h2 className="about-container__title">
                О моем опыте и достижениях
              </h2>
              <ul>
                <li className="text-justify">
                  <strong>Опыт</strong>: Более 8 лет практики в подборе и
                  диагностике автомобилей. Мой первый официальный пост в
                  Instagram датируется 10 января 2016 года, а на платформе
                  Drive2 — 23 апреля 2016 года.
                </li>
                <li className="text-justify">
                  <strong>Диагностика пробега BMW</strong>: Один из первых в
                  России начал использовать компьютерную диагностику для
                  проверки оригинальности пробега на BMW.
                </li>
              </ul>
              <p>
                Подробности о моих подходах можно найти здесь —{' '}
                <a
                  href="https://www.drive2.ru/b/2999748/"
                  target="_blank"
                  className="about-container__href"
                >
                  статья на Drive2
                </a>
                .
              </p>
              <p>
                Примеры успешных кейсов и работы с клиентами —{' '}
                <a
                  href="https://www.drive2.ru/b/471620670401283011/"
                  target="_blank"
                  className="about-container__href"
                >
                  другая статья на Drive2
                </a>
                .
              </p>
            </div>

            <div className="about-container__section">
              <h2 className="about-container__title">
                Мой аккаунт в Instagram
              </h2>
              <p className="text-justify">
                С июля 2018 года я веду
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  className="about-container__href"
                >
                  {' '}
                  instagram-аккаунт
                </a>
                , где делюсь отчётами о проделанной работе, отзывами и
                рекомендациями. На данный момент аккаунт насчитывает более 200
                положительных отзывов от довольных клиентов.
              </p>
            </div>

            <div className="about-container__section">
              <h2 className="about-container__title">
                Уникальный отчёт диагностики
              </h2>
              <p className="text-justify">
                Я разработал{' '}
                <strong>уникальный отчёт диагностики автомобиля</strong>, в
                котором собрана исключительно полезная и важная информация о
                транспортном средстве. Каждый отчёт нацелен на то, чтобы клиент
                получил полное представление о состоянии автомобиля. Работаю на
                совесть и всегда стремлюсь к качественному результату.
              </p>
            </div>

            <div className="about-container__section">
              <h2 className="about-container__title">
                Сотрудничество с известными личностями
              </h2>
              <p className="text-justify">
                Моя работа замечена и оценена популярными блогерами и известными
                людьми. Пример сотрудничества:{' '}
                <a
                  href="https://youtu.be/epmUm_vkrCw?si=REH6MRELyBSip2SO"
                  target="_blank"
                  className="about-container__href"
                >
                  видео на YouTube
                </a>
                .
              </p>
            </div>
            <p className="about-container__ps text-justify">
              P.S. Опыт — это когда каждый день ты становишься лучше, чем вчера.
              Работаю над собой и своими навыками, чтобы предоставить вам
              наилучший сервис в автоподборе и диагностике автомобилей.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
