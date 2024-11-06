import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube, faInstagram, faVk} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <Image
        src="/images/logoBig.png"
        alt="Автоподобор"
        width="300"
        height="100"
      />
      <div className="social-icons">
        <a
          href="https://vk.com/dimaxcar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faVk} color="#0077ff" />
        </a>
        <a
          href="https://www.youtube.com/@diMAXcar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} color="#ff0033" />
        </a>
        <a
          href="https://www.instagram.com/dimaxcar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} color="#833AB4" />
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} diMaxcar автоподбор. Все права
        защищены.
      </p>
    </footer>
  )
}
