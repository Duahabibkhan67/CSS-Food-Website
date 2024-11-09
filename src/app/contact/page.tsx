import Link from "next/link";
import Image from "next/image";
import '@/style/contact.css'

export default function Contact(){
 return(
  <div id="fir">
<div >
    <section id="contact-sec-1" >
    <div id="contact-div-1" data-aos="fade-up"
     data-aos-duration="3000" >
     <Image  id="contact-div-img" height={150} width={150} src="/location.png" alt="location"></Image>
     <h1 id="contact-div-h1"><b>Address Line</b></h1>
     <h1 id="contact-div-h1"><b>570th 8th Ave,New York,Ny united states</b></h1>
    </div>
    <div id="contact-div-1" data-aos="fade-up"
     data-aos-duration="3000" >
    <Image id="contact-div-img"  height={150} width={150} src="/call.png" alt="location"></Image>
     <h1 id="contact-div-h1"><b>Phone Number</b></h1>
     <h1 id="contact-div-h1"><b>+124-567-890 <br />+125-789-564 </b></h1>
    </div>
    <div id="contact-div-1" data-aos="fade-up"
     data-aos-duration="3000" >
    <Image id="contact-div-img"  height={150} width={150} src="/mailicon.png" alt="location"></Image>
     <h1 id="contact-div-h1"><b>Mail Address</b></h1>
    
     <h1 id="contact-div-h1" ><b>email@example.com <br />inf@example.com</b></h1>
    </div>
   </section>

<section id="contact" >
<div id="contact-form-container">
        <h1 id="contact-h1">Contact Us</h1>
        <form action="submit_form.php" method="POST" id="contact-form">
            <div id="form-group">
                <label id="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Enter your name"/>
            </div>
            
            <div id="form-group">
                <label id="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="Enter your email"/>
            </div>
            
            <div id="form-group">
                <label id="subject">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="Subject of your message"/>
            </div>
            
            <div id="form-group">
                <label id="message">Message</label>
                <textarea id="message" name="message" required placeholder="Write your message here"></textarea>
            </div>
            
            <button type="submit" id="submit-btn">Send Message</button>
        </form>
    </div>
 
</section>
 
   {/* contact-section-2 */}
   <section id="deliver-sec" >
   <div >
      <h1 id="deliver-sec-h1" ><b>Crispy,Every <br /> Bite Taste</b></h1>
      <div id="deliver-div">
      <h1 id="deliver-sec-h2" data-aos="fade-up"
        data-aos-duration="3000" ><b>Delivery</b> Challenge</h1>
        <Link href="/contact"><button id="book-a-tab-1"><b >Order Now</b></button></Link>
</div>
   </div >
   <div >
   <Image  id="deliver-img" data-aos="fade-left"  height={300} width={300} src="/deliverymen.png" alt="burger1"></Image>
   </div>
   
   </section>
 </div>
  </div>
 )
}