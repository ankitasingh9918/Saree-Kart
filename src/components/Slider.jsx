import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { slides } from "../data/slidesdata.js";
import styles from "./Slider.module.css";

export default function Slider() {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.slider}>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${
            index === current ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay}></div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        className={`${styles.navBtn} ${styles.prev}`}
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>

      {/* Next Button */}
      <button
        className={`${styles.navBtn} ${styles.next}`}
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>

      {/* Pagination Dots */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === current ? styles.activeDot : ""
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

    </section>
  );
}