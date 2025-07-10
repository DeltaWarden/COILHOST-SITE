import styles from "./Header.module.css";
import Logo from "../../assets/coil.png";
import { BiHome } from "react-icons/bi";
import { IoServerOutline } from "react-icons/io5";
import { HiOutlineServerStack } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="DeltaCheats Logo" className={styles.logoImage} />
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="/" className={styles.navItem}>
            <BiHome className={styles.navIcon} />
            Главная
          </a>
          <a href="/catalog" className={styles.navItem}>
            <HiOutlineServerStack className={styles.navIcon} />
            Услуги
          </a>
          <a href="/services" className={styles.navItem}>
            <IoServerOutline className={styles.navIcon} />
            Ноды
          </a>
          <a href="/support" className={styles.navItem}>
            <BiSupport className={styles.navIcon} />
            Поддержка
          </a>
        </nav>

        <div className={styles.account}>
          <FaRegUser className={styles.accountIcon} />
          <span className={styles.accountName}>deltasquare</span>
        </div>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
