import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <h1 className="title">Weather App</h1>
    <a
      className={styles.link}
      href="/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={['fab', 'github']} />
    </a>
  </header>
);

export default Header;
