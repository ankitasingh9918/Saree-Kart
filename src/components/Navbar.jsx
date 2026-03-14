import { useState } from "react";
import styles from "./Navbar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../assets/saree-kart-logo.png";

import {
FaTimes,
FaPlus,
FaHeart,
FaShoppingBag,
FaSearch,
FaUser,
FaGift,
FaWhatsapp
} from "react-icons/fa";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

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

{/* TOP BAR */}

<div className={styles.topBar}>

<div className="container">

<div className={styles.offerContent}>

<FaGift className={styles.offerIcon} />

<div className={styles.marquee}>
<div className={styles.marqueeContent}>
🎉 Festival Special Offer — Flat <strong>30% OFF</strong> on Sarees, Jewellery & Accessories | Free Shipping on Orders Above ₹999
</div>
</div>

</div>

</div>

</div>


{/* NAVBAR */}

<nav className={styles.navbar}>

<div className="container-fluid px-lg-5 px-3">

<div className={styles.navTop}>

{/* MOBILE MENU */}
<HiOutlineBars3CenterLeft
className={styles.menuIcon}
onClick={() => setMenuOpen(true)}
/>

{/* SEARCH */}

<div className={styles.searchBox}>
<FaSearch className={styles.searchIcon}/>
<input placeholder="Search for products..." />
</div>


{/* LOGO */}

<div className={styles.logo}>
<img src={logo} alt="SareeKart Logo"/>
</div>


{/* ICONS */}

<div className={styles.icons}>

<a
href="https://wa.me/919876543210"
target="_blank"
rel="noopener noreferrer"
className={`${styles.icon} ${styles.whatsapp}`}
>
<FaWhatsapp/>
</a>

<div className={`${styles.icon} ${styles.hideMobile}`}>
<FaUser/>
</div>

<div className={`${styles.icon} ${styles.hideMobile}`}>
<FaHeart/>
</div>

<div className={`${styles.icon} ${styles.cart}`}>
<FaShoppingBag/>
<span>0</span>
</div>

</div>
</div>


{/* DIVIDER */}

<div className={styles.menuDivider}></div>


{/* DESKTOP MENU */}

<ul className={styles.desktopMenu}>

{menuItems.map((item,index)=>(
<li key={index}>{item}</li>
))}

</ul>

</div>

</nav>


{/* OVERLAY */}

{menuOpen && (
<div
className={styles.overlay}
onClick={()=>setMenuOpen(false)}
/>
)}


 {/* MOBILE SIDEBAR */}

<div className={`${styles.sidebar} ${menuOpen ? styles.show : ""}`}>

{/* HEADER */}

<div className={styles.sidebarHeader}>

<div className={styles.menuTitle}>
<span>Menu</span>
<p>Explore Categories</p>
</div>

<button
className={styles.closeBtn}
onClick={()=>setMenuOpen(false)}
>
<FaTimes/>
</button>

</div>


{/* SEARCH */}

<div className={styles.mobileSearch}>
<FaSearch className={styles.mobileSearchIcon}/>
<input placeholder="Search products..." />
</div>


{/* MENU ITEMS */}

<ul className={styles.menuList}>

{menuItems.map((item,index)=>(
<li key={index}>

<div className={styles.menuItem}>
<span>{item}</span>
<FaPlus className={styles.menuArrow}/>
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

</div>

</>
);
}