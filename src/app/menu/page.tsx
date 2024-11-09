import Link from "next/link";
import Image from "next/image";
import '@/style/menu.css'
export default function Menu(){
 return(
  <div id="first">
    <h1 ><b>Popular Items:</b></h1>
   <section id="menu-sec" >
   
    <div id="menu-div" >
     <Image id="menu-div-img"  height={100} width={150} src="/alfredobroast.png" alt="chowmein"></Image>
     <h1 id="menu-div-h1" ><b>45.00$</b></h1>
     <h1 id="menu-div-h1" ><b>Alfredo Broast</b></h1>
     <Link href="/contact"><button id="book-a-tab-1" ><b>Order Now</b></button></Link>
     <Image id="menu-div-img" height={80} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div id="menu-div">
     <Image id="menu-div-img" height={120} width={150} src="/chicagodeeppizza.png" alt="chowmein"></Image>
     <h1 id="menu-div-h1" ><b>50.00$</b></h1>
     <h1  id="menu-div-h1"><b>Chickago Deep Pizza</b></h1>
     <Link href="/contact"><button id="book-a-tab-1"><b>Order Now</b></button></Link>
     <Image id="menu-div-img" height={80} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div id="menu-div">
     <Image id="menu-div-img" height={100} width={150} src="/chinesepasta.png" alt="chowmein"></Image>
     <h1 id="menu-div-h1"><b>18.00$</b></h1>
     <h1 id="menu-div-h1"><b>Chinese Pasta</b></h1>
     <Link href="/contact"><button id="book-a-tab-1"><b>Order Now</b></button></Link>
    <Image id="menu-div-img" height={80} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div id="menu-div" >
     <Image id="menu-div-img"  height={120} width={150} src="/rutiwithbeef.png" alt="chowmein"></Image>
     <h1 id="menu-div-h1"><b>15.00$</b></h1>
     <h1 id="menu-div-h1"><b>Ruti With Beef Roll</b></h1>
     <Link href="/contact"><button id="book-a-tab-1"><b>Order Now</b></button></Link>
     <Image id="menu-div-img" height={80} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div id="menu-div">
     <Image id="menu-div-img"  height={100} width={150} src="/manchurian.png" alt="chowmein"></Image>
     <h1 id="menu-div-h1"><b>50.00$</b></h1>
     <h1  id="menu-div-h1"><b>Chicken and Vegetable Machurian</b></h1>
     <Link href="/contact"><button id="book-a-tab-1"><b >Order Now</b></button></Link>
     <Image id="menu-div-img" height={50} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div id="menu-div">
     <Image id="menu-div-img" height={100} width={150} src="/rutiwithchicken.png" alt="chowmein"></Image>
     <h1 id="menu-div-h1"><b>20.00$</b></h1>
     <h1 id="menu-div-h1"><b>Chicken Ruti Roll</b></h1>
     <Link href="/contact"><button id="book-a-tab-1"><b >Order Now</b></button></Link>
     <Image id="menu-div-img" height={80} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div id="menu-div">
     <Image id="menu-div-img" className="rounded-full ml-14 mt-10" height={100} width={150} src="/whopperburger.png" alt="chowmein"></Image>
     <h1 id="menu-div-h1"><b>53.00$</b></h1>
     <h1 id="menu-div-h1"><b>Whopper Burger</b></h1>
     <Link href="/contact"><button id="book-a-tab-1"><b >Order Now</b></button></Link>
     <Image id="menu-div-img" height={60} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div id="menu-div">
     <Image id="menu-div-img" height={100} width={120} src="/grillchicken.png" alt="chowmein"></Image>
     <h1 id="menu-div-h1"><b>50.00$</b></h1>
     <h1 id="menu-div-h1"><b>Grill Chicken</b></h1>
     <Link href="/contact"><button id="book-a-tab-1"><b >Order Now</b></button></Link>
     <Image id="menu-div-img" height={60} width={100} src="/star.png" alt="star"></Image>
    </div>

    <div id="menu-div" >
     <Image id="menu-div-img" height={100} width={150} src="/hotpasta.png" alt="chowmein"></Image>
     <h1 id="menu-div-h1"><b>18.00$</b></h1>
     <h1  id="menu-div-h1"><b>Chilli dry hot pasta</b></h1>
     <Link href="/contact"><button id="book-a-tab-1"><b >Order Now</b></button></Link>
     <Image id="menu-div-img"  height={60} width={100} src="/star.png" alt="star"></Image>
     </div>
  
   </section>
  </div>
 )
}
