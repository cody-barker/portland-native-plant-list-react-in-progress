import githubIcon from '../assets/brand-github.svg'
import userIcon from '../assets/user-icon.svg'

function Footer() {
  return (
    <footer>
        <a target="_blank" href="https://github.com/cody-barker/portland-native-plant-list-react-in-progress"><img src={githubIcon}/></a>
        <a target="_blank" href="https://codybarker.dev"><img src={userIcon}/></a>
    </footer>
  )
}

export default Footer