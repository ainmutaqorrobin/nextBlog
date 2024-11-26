import Image from "next/image";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/robin.png"
          alt="Robin profile image"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I'm Robin</h1>
      <p>
        This is my blog about web development, my current paces is focusing on
        any JavaScript web framework such as React, Angular, Express etc.
      </p>
    </section>
  );
}

export default Hero;
