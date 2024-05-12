import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacity = Math.min(scrollPosition / 500, 1); // 여기서 100은 임의의 값이므로 필요에 따라 조절 가능
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={styles.header} style={{ opacity: scrollOpacity }}>
        <div className={styles.container}></div>
      </header>
    </>
  );
};

export default Header;
