import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <nav>
        {/* <h1>Автоподбор и Диагностика Авто Автомобили из Японии и Европы</h1> */}
        <Image
          src="/images/logoBig.png"
          alt="Автоподобор"
          width="300"
          height="100"
        />
        <ul className="list">
          <li>
            <a href="#features">Услуги</a>
          </li>
          <li>
            <a href="#about">О нас</a>
          </li>
          <li>
            <a href="#contact">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
