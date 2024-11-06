import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <nav>
        <h1 className="header-title">
          Автоподбор и Диагностика Авто Автомобили из Японии и Европы
        </h1>
        <Image
          src="/images/logoHeader.png"
          alt="Автоподобор"
          width="300"
          height="100"
        />
        <ul className="list">
          <li>
            <a href="#features">Услуги</a>
          </li>
          <li>
            <a href="#about">О себе</a>
          </li>
          <li>
            <a href="#contact">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
