import Image from 'next/image'

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
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} diMaxcar автоподбор. Все права
        защищены.
      </p>
    </footer>
  )
}
