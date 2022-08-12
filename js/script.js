import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const hireMe = document.getElementById('hireMe');
const contactSec = document.getElementById('contact')

hireMe.addEventListener('click' , function (e) {
    e.preventDefault();
    contactSec.scrollIntoView({behavior : 'smooth'})
})