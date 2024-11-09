import Image from "next/image";
import Link from "next/link";
import '@/style/about.css'
export default function About(){
 return(
  <div>
  <section  id="about-sec">
   
   <div  data-aos="fade-up"
     data-aos-duration="3000" >
    <h1 id="about-sec-h1"><b>About Our Food</b></h1>
    <h1 id="about-sec-h2"><b>WHERE QUALITY MEET EXCELLENT </b><b >SERVICE.</b></h1>
    <p id="about-sec-p">Its the perfect dining exprience where every dish is crafted with fresh,
     high-quality exprience quick and efficient service that ensure your food is served fresh 
     It&aposs the dinning exprience where evey dish is crafted with fresh,high-quality ingredients.
    </p>
   </div>
   <div>
   <Image id="about-sec-img" data-aos="fade-up"
     data-aos-duration="3000"  height={400} width={700} src="/burger4.png" alt="burger1"></Image>
   </div>
  </section>
  <section  id="about-sec-2">
   <div id="about-div-1" data-aos="fade-up"
     data-aos-duration="3000">
    <Image height={100} width={100} src="/burcold.png" alt="burger"></Image>
    <h1 ><b>Super Quality Food</b></h1>
    <p >A team of dreamers and doers builders unique interactive and music art.</p>
   </div>
   <div id="about-div-1" data-aos="fade-up"
     data-aos-duration="3000">
    <Image  height={100} width={100} src="/mixbowl.png" alt="burger"></Image>
    <h1 ><b>Original Recipe</b></h1>
    <p > A team of dreamers and doers builders unique interactive and music art.</p>
   </div>
   <div id="about-div-1" data-aos="fade-up"
     data-aos-duration="3000">
    <Image  height={100} width={100} src="/deliveryboy.png" alt="burger"></Image>
    <h1><b>Quick Fast Delivery</b></h1>
    <p >A team of dreamers and doers builders unique interactive and music art.</p>
   </div>
   <div id="about-div-1" data-aos="fade-up"
     data-aos-duration="3000">
    <Image  height={100} width={100} src="/burcold.png" alt="burger"></Image>
    <h1 ><b>100% Fresh Foods</b></h1>
    <p >A team of dreamers and doers builders unique interactive and music art.</p>
   </div>
  </section>
  </div>
 )
}