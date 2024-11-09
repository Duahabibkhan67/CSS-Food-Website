import Link from "next/link";
import React, { use } from "react";
import { PiHamburgerBold } from "react-icons/pi";
import '../style/header.css';

export default function Header(){
 return(
<div>
<header  id="header" >
 <section id="whole-header-sec">
<div id="left-sec">
 <div id="logo">
<p id="burger-logo"><  PiHamburgerBold /></p>
<h1 id="header-h1"><b id="bold-h-h1">DUA</b><b>LAB</b></h1>
</div>
</div>
<div id="right-sec" >
 <div id="nav">
<Link href="/"><button id="button-head" ><b>Home</b></button></Link>
<Link href="/menu"><button id="button-head" ><b>Menu</b></button></Link>

<Link href="/about"><button id="button-head" ><b>About</b></button></Link>
<Link href="/contact"><button id="button-head" > <b>Contact</b></button></Link></div>


</div>
</section>
</header>
</div>
 )
}
