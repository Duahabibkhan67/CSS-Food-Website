import Image from "next/image";
import Link from "next/link";
import '../style/card.css'
export default function Card(){
 return(
  <div>
   <div >
    <h1 id="h1-1"><b>Crispy,Every Bite</b></h1>
    <h1 id="h1-2"><b>POPULAR FOOOD ITEMS</b></h1>
   </div>
   <section id="card">
    <div id="card-div" data-aos="zoom-out-down" >
     <Image id="card-div-img"  className="rounded-full ml-14 mt-10" height={150} width={150} src="/chowmein.png" alt="chowmein"></Image>
     <h1 id="card-div-h1"><b>MEXICAN CHOWMEIN</b></h1>
     <h1  id="card-div-p" ><b>5 products</b></h1>
    </div>
    <div id="card-div" data-aos="zoom-out-down" >
     <Image id="card-div-img"  height={120} width={120} src="/manchurian.png" alt="chowmein"></Image>
     <h1 id="card-div-h1"><b>CHICKEN MANCHURIAN</b></h1>
     <h1 id="card-div-p"><b>5 products</b></h1>
    </div>
    <div id="card-div" data-aos="zoom-out-down" >
     <Image id="card-div-img" height={200} width={200} src="/pizza.png" alt="chowmein"></Image>
     <h1 id="card-div-h1"><b>ALFREDO PASTA</b></h1>
     <h1  id="card-div-p"><b>5 products</b></h1>
    </div>
   </section>
   <section id="card-sec-2" >
    <div >
     <Image id="card-sec-2-1" data-aos="fade-up" height={400} width={400} src="/burgerposter.jpg" alt="burgerposter"
     data-aos-anchor-placement="center-bottom" ></Image>
     <Image id="card-sec-2-1-2" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"  height={400} width={600} src="/pizzaposter.jpg" alt="burgerposter"></Image>
    </div>
   </section>
  </div>
 )
}