import styles from "./Footer.module.css";
import {
FaFacebookF,
FaInstagram,
FaTwitter,
FaYoutube,
FaPhoneAlt,
FaEnvelope,
FaMapMarkerAlt
} from "react-icons/fa";

import logo from "../assets/saree-kart-logo.png";

export default function Footer() {

return (

<footer className={styles.footer}>

{/* NEWSLETTER */}

<div className={styles.newsletter}>

<div className={styles.newsletterContainer}>

<h2>Join Our SareeKart Family</h2>

<p>
Get updates on new arrivals, exclusive offers & fashion trends
</p>

<div className={styles.newsletterBox}>
<input type="email" placeholder="Enter your email address"/>
<button>Subscribe</button>
</div>

</div>

</div>


{/* MAIN FOOTER */}

<div className={styles.footerContent}>

<div className={styles.footerGrid}>


{/* ABOUT */}

<div className={styles.footerCol}>

<img
src={logo}
alt="SareeKart Logo"
className={styles.footerLogo}
/>

<p>
Discover elegant sarees, designer blouses and
ethnic fashion crafted with tradition and modern style.
</p>

<div className={styles.socialIcons}>

<span><FaFacebookF/></span>
<span><FaInstagram/></span>
<span><FaTwitter/></span>
<span><FaYoutube/></span>

</div>

</div>


{/* QUICK LINKS */}

<div className={styles.footerCol}>

<h4>Quick Links</h4>

<ul>
<li>Home</li>
<li>Shop</li>
<li>New Arrivals</li>
<li>Best Sellers</li>
<li>Discount Offers</li>
</ul>

</div>


{/* CATEGORIES */}

<div className={styles.footerCol}>

<h4>Categories</h4>

<ul>
<li>Sarees</li>
<li>Designer Blouses</li>
<li>Lehenga</li>
<li>Jewellery</li>
<li>Kids Wear</li>
</ul>

</div>


{/* CONTACT */}

<div className={styles.footerCol}>

<h4>Contact Us</h4>

<ul className={styles.contact}>

<li>
<FaMapMarkerAlt/>
Lucknow, India
</li>

<li>
<FaPhoneAlt/>
+91 8423811106
</li>

<li>
<FaEnvelope/>
support@sareekart.com
</li>

</ul>

</div>

</div>

</div>


{/* COPYRIGHT */}

<div className={styles.footerBottom}>

<p className={styles.developedBy}>
Developed by <strong>Sadhana Cybertech (OPC) Pvt Ltd</strong>
</p>

<p>
© {new Date().getFullYear()} SareeKart. All rights reserved.
</p>

</div>

</footer>

);
}