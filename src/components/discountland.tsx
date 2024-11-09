import Link from "next/link";
import Image from "next/image";
import '../style/discountcard.css'
export default function Discount(){
 return(
  <div>
   <section id="discount-sec" >
    <div id="discount-sec-div">
     <h1 id="discount-sec-div-h1"  data-aos="fade-up"
     data-aos-duration="3000" ><b>SAVE 20%</b></h1>
     <h1  id="discount-sec-div-h2" data-aos="fade-up"
     data-aos-duration="3000"><b>TODAYs  <b >ASTACKIN</b>DAY</b></h1>
     <h1 id="discount-sec-div-h1" data-aos="fade-up"
     data-aos-duration="3000" ><b>GRILLED <b >CHICKEN$59,00</b></b></h1>
     <Link  data-aos="fade-up"
     data-aos-duration="3000" href="/contact"><button id="book-a-tab-1"><b>Order Now</b></button></Link>
    </div>
    <div>
     <Image id="discount-img" data-aos="fade-up"
     data-aos-duration="3000" height={500} width={500} src="/grillchicken.png" alt="burger1"></Image>
    </div>
   </section>
  </div>
 )
}