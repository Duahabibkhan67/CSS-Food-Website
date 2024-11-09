import Link from "next/link";
import Image from "next/image";
import '../style/hero.css'
export default function Hero(){
 return(
  <div>
   <section  id="hero">
    <div id="hero-h1">
     <h1 id="hero-h1-h" data-aos="fade-up"
     data-aos-duration="3000" ><b>Crispy,Every Bite Taste</b></h1>
     <h1 id="hero-h2" data-aos="fade-up"
     data-aos-duration="3000" ><b>Just One <br /> More Bite</b></h1>
     <Link data-aos="fade-up"
     data-aos-duration="3000" href="/contact"><button id="book-a-tab-1" ><b >Order Now</b></button></Link>
    </div>
    <div id="hero-img">
     <Image id="hero-img" data-aos="fade-up"
     data-aos-duration="3000" height={500} width={500} src="/burger2.jpg" alt="burger1"></Image>
    </div>
   </section>
  </div>
 )
}