import githubIcon from "../assets/brand-github.svg";
import userIcon from "../assets/user-icon.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <h1 className="footer__content green h1--small">Portland Native Plants</h1>
        <div className="footer__links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/cody-barker/portland-native-plant-list-react-in-progress"
          >
            <img src={githubIcon} alt="link to github repo" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://codybarker.dev">
            <img src={userIcon} alt="developer website" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
