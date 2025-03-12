import styles from './Navbar.module.scss' 

import LanguageSwitcher from "./LanguageSwitcher"
import Link from 'next/link'

const Navbar = () => {
    return <nav className={styles.navbar}>
    <ul className={styles.navList}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/posts">Posts</Link>
      </li>
      <li>
        <LanguageSwitcher />
      </li>
    </ul>
  </nav>
  }
  
  export default Navbar