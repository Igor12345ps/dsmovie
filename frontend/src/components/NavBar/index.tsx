import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './styles.css';

function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Igor12345ps">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/igor12345ps</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;