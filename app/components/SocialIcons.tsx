import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faYoutube,
  faInstagram,
  faVk,
  faWhatsapp,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import {INSTAGRAM, VK, WHATSHAPP, YOUTUBE} from '../services/constants'

type Props = {
  fontSize?: number
}

type Social = 'VK' | 'YOUTUBE' | 'INSTAGRAM' | 'WHATSHAPP'

type SocialMap = Record<
  Social,
  {url: string; color: string; icon: IconDefinition}
>

const socialMap: SocialMap = {
  WHATSHAPP: {url: WHATSHAPP, color: '#00d757', icon: faWhatsapp},
  VK: {url: VK, color: '#0077ff', icon: faVk},
  YOUTUBE: {url: YOUTUBE, color: '#ff0033', icon: faYoutube},
  INSTAGRAM: {url: INSTAGRAM, color: '#833AB4', icon: faInstagram},
}

export default function SocialIcons({fontSize}: Props) {
  return (
    <div className="social-icons">
      {Object.values(socialMap).map(({url, color, icon}) => (
        <a href={url} target="_blank" rel="noopener noreferrer" key={url}>
          <FontAwesomeIcon
            icon={icon}
            color={color}
            style={{fontSize: fontSize}}
          />
        </a>
      ))}
    </div>
  )
}
