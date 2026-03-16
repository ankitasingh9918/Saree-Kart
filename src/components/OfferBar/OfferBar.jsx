import styles from "./OfferBar.module.css";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function OfferBar(){

const [show,setShow] = useState(true);

if(!show) return null;

return(

<div className={styles.offerBar}>

<div className={styles.marquee}>

<span>

✨ Festive Sale – Flat 25% OFF on Silk Sarees |
🚚 Free Shipping Above ₹999 |
💃 Wedding Collection Just Launched

</span>

</div>

<button
className={styles.closeBtn}
onClick={()=>setShow(false)}
>

<FaTimes/>

</button>

</div>

)

}