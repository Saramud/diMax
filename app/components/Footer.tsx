import Image from 'next/image'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer id="contact">
      <Image
        src="/images/logoBig.png"
        alt="Автоподобор"
        width="300"
        height="100"
      />
      <SocialIcons />
      <p>
        &copy; {new Date().getFullYear()} diMaxcar автоподбор. Все права
        защищены.
      </p>
    </footer>
  )
}
