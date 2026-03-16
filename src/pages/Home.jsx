import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";




import p1 from "../assets/sarees/sarees1.webp";
import p2 from "../assets/sarees/sarees2.webp";
import p3 from "../assets/sarees/sarees3.webp";
import p4 from "../assets/sarees/sarees4.webp";
import p5 from "../assets/sarees/sarees5.webp";
import { Link } from "react-router-dom";
import Slider from "../components/Slider.jsx";

export default function Home() {

  



      const products = [
            {
                  img: p1,
                  title: "Light Green Colour Pure Viscose Dola Silk Saree",
                  price: "₹1,850.00",
                  oldPrice: "₹3,295.00",
                  discount: "43% off",
                  rating: "4.6"
            },
            {
                  img: p2,
                  title: "Blue Graceful Bandhej Silk Saree",
                  price: "₹1,850.00",
                  oldPrice: "₹2,895.00",
                  discount: "36% off",
                  rating: "4.9"
            },
            {
                  img: p3,
                  title: "Patchwork Grace Viscose Dola Silk Saree",
                  price: "₹1,850.00",
                  oldPrice: "₹2,895.00",
                  discount: "36% off",
                  rating: "4.8"
            },
            {
                  img: p4,
                  title: "Black Graceful Bandhej Silk Saree",
                  price: "₹1,850.00",
                  oldPrice: "₹2,895.00",
                  discount: "36% off",
                  rating: "4.9"
            },
            {
                  img: p5,
                  title: "Pista Hand Kalamkari Saree",
                  price: "₹1,850.00",
                  oldPrice: "₹3,295.00",
                  discount: "43% off",
                  rating: "4.9"
            }
      ];


      return (

            <div>
              
            <Slider/>


<section className={styles.section}>

  {/* HEADER */}
  <div className={styles.header}>
    <h2>Threads of Tradition</h2>

    <Link to="/products" className={styles.viewBtn}>
      View All
    </Link>
  </div>


  {/* PRODUCTS */}
  <div className={styles.products}>

    {products.map((item, index) => (

      <div className={styles.card} key={index}>

        <div className={styles.imgBox}>
          <img src={item.img} alt={item.title} />

          <div className={styles.rating}>
            <FaStar /> {item.rating}
          </div>
        </div>

        <h4>{item.title}</h4>

        <div className={styles.priceRow}>
          <span className={styles.price}>{item.price}</span>
          <span className={styles.oldPrice}>{item.oldPrice}</span>
          <span className={styles.discount}>{item.discount}</span>
        </div>

      </div>

    ))}

  </div>

</section>
            </div>

      );

}