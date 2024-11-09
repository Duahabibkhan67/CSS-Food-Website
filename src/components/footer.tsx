import Image from "next/image";
import Link from "next/link";
import '../style/footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export default function Footer(){
 return(
  <div>
  
   <section id="footer-sec">
    <div>
  
<h1 id="footer-sec-h1"><b>DUA</b><b>LAB</b></h1>
   <p >We believe it has the power to do small things.</p>
   <p >Interested in working with us?</p>
   <p >Info@example.com</p>
<p ><FaFacebookF /><FaXTwitter /><FaWhatsapp /> <FaInstagram /></p>
   </div>
   <div>
    <h1 id="footer-sec-h1"><b>Quick Links</b></h1>

 <ul >
  <li >
   Service
  </li>
  <li>
 About Company
  </li>
  <li >
   Latest News
  </li>
  <li >
   Team Member
  </li>
  <li >
 Testimonials
  </li>
 </ul>
   </div>
   <div>
    <h1 id="footer-sec-h1"><b>My Account</b></h1>

 <ul >
  <li >
  My profile
  </li>
  <li >
 My Order History
  </li>
  <li >
My Wish List
  </li>
  <li>
Order Tracking
  </li>
  <li >
   Shopping Cart
  </li>
 </ul>
   </div>
   <div>
    <h1 id="footer-sec-h1" ><b>Address</b></h1>
    <p >570th 8th Ave,New York,Ny united states</p>
    <h1 ><b>Hours </b></h1>
    <p >9.30am-6.30pm</p>
    <p >ALl days</p>
   </div>
   </section>
  </div>
 )
}