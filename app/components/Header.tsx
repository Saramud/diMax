import Image from 'next/image'
import SocialIcons from './SocialIcons'

export default function Header() {
  return (
    <header>
      <nav>
        <Image
          src="/images/logoHeader.png"
          alt="Автоподобор"
          width="300"
          height="100"
        />
        <h1 className="header-title">
          Автоподбор и Диагностика Авто Автомобили из Японии и Европы
        </h1>
        <div>
          <SocialIcons fontSize={40} />
          <ul className="list">
            <li>
              <a href="#features">Услуги</a>
            </li>
            <li>
              <a href="#about">О себе</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
