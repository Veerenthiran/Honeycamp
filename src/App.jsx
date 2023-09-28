
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { ImWhatsapp} from "react-icons/im";
import { ImGithub} from "react-icons/im";
import { ImFacebook} from "react-icons/im";





function App() {
const [backShow, setBackShow] = useState(true);
function handleTapMe() {
setBackShow((state) => !state);
}

const [show, setShow] = useState(false);
const [show1, setShow1] = useState(false);
const [show2, setShow2] = useState(false);
const [show3, setShow3] = useState(false);
const [show4, setShow4] = useState(false);
return (
<>


<img src="https://images.unsplash.com/photo-1572509018340-1fc13b5df491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" className="w-full h-full absolute block"></img>
<div className="relative text-center">


<h1
className="absolute z-10 p-5 text-xl m-24 ml-36 text-gray-300 font-bold hover:bg-gray-600 hover:text-black"
onMouseEnter={() => {
setShow(true);
}}

onMouseLeave={() => {
setShow(false);
}}

>
Home
</h1>
<div className="absolute mt-24 w-full">
{show && (
<Marquee speed="50" className="  text-white p-5">
Weaving brand identities of businesses since 2008 with a strong sense of design. We are an eminent marketing communication agency creating future-proof strategies, headquartered in Bangalore with branches in Mumbai and Hyderabad. Armed by a diverse pool of experts busy designing world-class digital experiences through Web Design & Software Development, Graphic Design, Video Production and Digital marketing contributing to your sturdy business growth.
</Marquee>
)}
</div>

 </div>
 
 
<div className="relative">


<h1
className="absolute z-10 p-5 text-xl m-24 ml-36 mt-40 text-gray-300 font-bold hover:bg-red-600 hover:text-black"
onMouseEnter={() => {
setShow1(true);
}}

onMouseLeave={() => {
setShow1(false);
}}

>
About Us
</h1>
<div className="absolute mt-24 w-full">
{show1 && (
<Marquee speed="50" className="  text-white p-5 mt-16">
Weaving brand identities of businesses since 2008 with a strong sense of design. We are an eminent marketing communication agency creating future-proof strategies, headquartered in Bangalore with branches in Mumbai and Hyderabad. Armed by a diverse pool of experts busy designing world-class digital experiences through Web Design & Software Development, Graphic Design, Video Production and Digital marketing contributing to your sturdy business growth.
</Marquee>
)}
</div>

 </div>

 
<div className="relative">


<h1
className="absolute z-10 p-5 text-xl m-24 ml-36 mt-60 text-gray-300 font-bold hover:bg-gray-600 hover:text-black"
onMouseEnter={() => {
setShow2(true);
}}

onMouseLeave={() => {
setShow2(false);
}}

>
Services
</h1>
<div className="absolute mt-24 w-full">
{show2 && (
<Marquee speed="50" className="  text-white p-5 mt-36">
Weaving brand identities of businesses since 2008 with a strong sense of design. We are an eminent marketing communication agency creating future-proof strategies, headquartered in Bangalore with branches in Mumbai and Hyderabad. Armed by a diverse pool of experts busy designing world-class digital experiences through Web Design & Software Development, Graphic Design, Video Production and Digital marketing contributing to your sturdy business growth.
</Marquee>
)}
</div>

 </div>


<div className="relative">


<h1
className="absolute z-10 p-5 text-xl m-24 ml-36 mt-80 text-gray-300 font-bold hover:bg-red-600 hover:text-black"
onMouseEnter={() => {
setShow3(true);
}}

onMouseLeave={() => {
setShow3(false);
}}

>
Carrers
</h1>
<div className="absolute mt-24 w-full">
{show3 && (
<Marquee speed="50" className="  text-white p-5 mt-56">
Weaving brand identities of businesses since 2008 with a strong sense of design. We are an eminent marketing communication agency creating future-proof strategies, headquartered in Bangalore with branches in Mumbai and Hyderabad. Armed by a diverse pool of experts busy designing world-class digital experiences through Web Design & Software Development, Graphic Design, Video Production and Digital marketing contributing to your sturdy business growth.
</Marquee>
)}
</div>

 </div>

 
<div className="relative">


<h1
className="absolute z-10 p-5 text-xl m-24 ml-36 mt-96 text-gray-300 font-bold hover:bg-gray-600 hover:text-black"
onMouseEnter={() => {
setShow4(true);
}}

onMouseLeave={() => {
setShow4(false);
}}

>
Contact Us
</h1>
<div className="absolute mt-24 w-full">
{show4 && (
<Marquee speed="50" className="  text-white p-5 mt-72">
Weaving brand identities of businesses since 2008 with a strong sense of design. We are an eminent marketing communication agency creating future-proof strategies, headquartered in Bangalore with branches in Mumbai and Hyderabad. Armed by a diverse pool of experts busy designing world-class digital experiences through Web Design & Software Development, Graphic Design, Video Production and Digital marketing contributing to your sturdy business growth.
</Marquee>
)}
</div>
 </div>

 
 



<div
className={
backShow
? "ml-[1495px]  flex translate-x-2 transform items-center justify-center duration-1000"
: " flex -translate-x-2 transform items-center  justify-center duration-1000"
}

>
<button onClick={handleTapMe} className="mr-4 mt-36">

<BsFillArrowLeftCircleFill size={30} color="#fff" />
</button>

<div className="mt-40 h-96 w-96 rounded-lg bg-gray-700"></div>

</div>

<div className="relative float-right mr-36">
<a href="https://www.whatsapp.com/" target="_blank" className="mt-36 flex flex-col ">
<ImWhatsapp color="#fff"size={25} />
</a>
</div>

<div className="relative float-right mr-16">
<a href="https://github.com/" target="_blank" className="mt-36 flex flex-col ">
<ImGithub color="#fff"size={25} />
</a>
</div>

<div className="relative float-right mr-16">
<a href="https://www.facebook.com/" target="_blank" className="mt-36 flex flex-col ">
<ImFacebook color="#fff"size={25} />
</a>
</div>
</>
);
}

export default App;


