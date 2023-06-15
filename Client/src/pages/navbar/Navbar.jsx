import React from "react";
import styles from "./Navbar.module.css"
import logo from "./logos.png"

const Navbar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarlogo}><img src={logo} alt="Sukh" /> <strong className={styles.header}>Sun Breathing</strong></div>
                <ul className={styles.navbarmenu}>
                    <li className={styles.navbaritem}><a href="#">Home</a></li>
                    <li className={styles.navbaritem}><a href="#">Detection</a></li>
                    <li className={styles.navbaritem}><a href="#">About</a></li>
                    <li className={styles.navbaritem}><a href="#">Contact</a></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;