import { useState } from "react";
import styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import logo from "../assets/saree-kart-logo.png";

import {
  FaTimes,
  FaPlus,
  FaHeart,
  FaShoppingBag,
  FaSearch,
  FaUser,
  FaWhatsapp
} from "react-icons/fa";

import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

import OfferBar from "./OfferBar/OfferBar";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Saree",
    "All Collection",
    "Designer Blouses",
    "Lehnga",
    "Jewellary",
    "Accessories",
    "Kids Wear",
    "Discount"
  ];

  return (
    <>
      {/* OFFER BAR */}
      <OfferBar />

      {/* NAVBAR */}
      <nav className={styles.navbar}>

        <div className="container-fluid px-lg-5 px-3">

          {/* NAV TOP */}
          <div className={styles.navTop}>

            {/* MOBILE MENU ICON */}
            <HiOutlineBars3CenterLeft
              className={styles.menuIcon}
              onClick={() => setMenuOpen(true)}
            />

            {/* SEARCH BOX */}
            <div className={styles.searchBox}>
              <FaSearch className={styles.searchIcon} />
              <input type="text" placeholder="Search for products..." />
            </div>

            {/* LOGO */}
            <div className={styles.logo}>
              <img src={logo} alt="SareeKart Logo" />
            </div>

            {/* RIGHT ICONS */}
            <div className={styles.icons}>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918423811106"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.icon} ${styles.whatsapp}`}
              >
                <FaWhatsapp />
              </a>

              {/* Account */}
              <div className={`${styles.icon} ${styles.hideMobile}`}>
                <FaUser />
              </div>

              {/* Wishlist */}
              <div className={`${styles.icon} ${styles.hideMobile}`}>
                <FaHeart />
              </div>

              {/* Cart */}
              <div className={`${styles.icon} ${styles.cart}`}>
                <FaShoppingBag />
                <span>0</span>
              </div>

            </div>

          </div>


          {/* DIVIDER */}
          <div className={styles.menuDivider}></div>


          {/* DESKTOP MENU */}
          <ul className={styles.desktopMenu}>
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

      </nav>


      {/* OVERLAY */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
        />
      )}


      {/* MOBILE SIDEBAR */}
      <aside className={`${styles.sidebar} ${menuOpen ? styles.show : ""}`}>

        {/* SIDEBAR HEADER */}
        <div className={styles.sidebarHeader}>

          <div className={styles.menuTitle}>
            <span>Menu</span>
            <p>Explore Categories</p>
          </div>

          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>

        </div>


        {/* MOBILE SEARCH */}
        <div className={styles.mobileSearch}>
          <FaSearch className={styles.mobileSearchIcon} />
          <input type="text" placeholder="Search products..." />
        </div>


        {/* MOBILE MENU LIST */}
        <ul className={styles.menuList}>

          {menuItems.map((item, index) => (
            <li key={index}>

              <div className={styles.menuItem}>
                <span>{item}</span>
                <FaPlus className={styles.menuArrow} />
              </div>

            </li>
          ))}

        </ul>


        {/* EXTRA LINKS */}
        <div className={styles.sidebarLinks}>
          <span>TRACK YOUR ORDER</span>
          <span>RETURN / EXCHANGE</span>
        </div>


        {/* BOTTOM ACTION */}
        <div className={styles.bottomBar}>

          <button className={styles.accountBtn}>
            Account
          </button>

          <button className={styles.orderBtn}>
            Track Order
          </button>

        </div>

      </aside>
    </>
  );
}