const langInput = document.querySelector('.localize__input');

AOS.init();

var typed = new Typed('.second-text')

const typedfun = function (string) {
    typed.destroy()
    typed.constructor('.second-text',{
        strings : string,
        typeSpeed : 100,
        backSpeed : 50,
        loop : true
    })
    console.log(typed)
}

function removeLoader(){

setTimeout(()=>{
 let loader = document.getElementById('loader');

// hide the loader
loader.style = 'display: none;';
},2000)}

document.addEventListener('DOMContentLoaded' , function (e) {
    e.preventDefault()
    const lang = localStorage.getItem('lang')
    if(!lang) lang = "en";
    langInput.value = lang;
    setText(lang)
    template(lang)
})

langInput.addEventListener('change', function (e) {
    e.preventDefault()
    localStorage.setItem('lang' , langInput.value)
    setText(langInput.value)
    template(langInput.value)
})

const setText = (payload) => {
    const containers = document.querySelectorAll(`[data-text]`);

    locales.forEach(locale => {
        if (locale[payload]) {
            containers.forEach(el => {
                el.textContent = locale[payload][el.dataset.text];
            })
        }
    });
};


const template = function (lang) {
    const x = window.matchMedia("(max-width: 1000px)")
    const body = document.querySelector(".body")
    const header3 = document.querySelectorAll('.header-3')
    const list = document.querySelector('.nav_bar__list')
    if (lang === 'fa') {
        body.style.direction = "rtl" 
        body.style.fontFamily = "Vazir"
        header3.forEach(head => head.style.textAlign = 'right')
        x.matches ? list.style.textAlign = 'left' : list.style.textAlign = 'center';
        typedfun(["محمدحسین داخواه هستم", "توسعه دهنده فرانت هستم", "طراح سایت هستم"])
    } else {
        body.style.direction = "ltr";
        body.style.fontFamily = "Nunito"
        header3.forEach(head => head.style.textAlign = 'left')
        x.matches ? list.style.textAlign = 'right' : list.style.textAlign = 'center';
        typedfun(["Mohammad Hosein Dadkhah", "a Freelanser", "a Front-end Developer", "a Web Disaner"])
    }
}
const locales = [
    {
        en: {
            language: "language",
            loading: "Loading...",
            name: "Mohammad Hosein Dadkhah",
            home:"Home",
            about:"About Me",
            whatDo:"What I Do",
            resume:"Resome",
            portfolio:"Portfolio",
            contact:"Contact",
            welcome: "Wlecome",
            me:"I'm",
            based:"Based in Esfahan,Iran",
            hire:"Hire Me",
            about1:"Know Me More",
            about2:"I'm Mohammad Hosein Dadkhah",
            about3:`If you need a business site or a content site, I can help you.
                    Born in the city of Najaf Abad, Isfahan in 1378.
                    I started programming for the first time in 2019 when I met a senior.`,
            about4:"Name : Mohammad Hosein Dadkhah",
            about5:"Email : mohamaddadkhah69@gmail.com",
            about6:"Age : 28",
            about7:"from : Esfahan,Iran",
            services1:"What I Do ?",
            services2:"Web Design",
            services3:"Website design with various ideas of coloring and animation and all kinds of effects",
            services4:"Web developing",
            services5:"Converting a photo designed by web designers into a code and running it as a web         application",
            services6:"front-end",
            services7:"Developing the appearance of the site and creating the reaction of the installation to   user actions and responsive design",
            services8:"back-end",
            services9:"Connecting the user interface to the database and transferring data",
            resume1:`Resume`,
            resume2:`My Education`,
            resume3:`2016 - 2022`,
            resume4:`Mecanical Enginer`,
            resume5:`University of Yazd`,
            resume6:`In 2016, I passed the national entrance exam for mechanics in Yazd University`,
            resume7:`2020 - 2021`,
            resume8:`Self Taught`,
            resume9:`In about a year and a half and different courses and cooperation with a signor in several  projects.`,
            resume10:`My Experience`,
            resume11:`2021`,
            resume12:`Jr. Advanced CSS`,
            resume13:`Jonass Chmedtmann Course`,
            resume14:`Advanced css course and use of node-sass and responsive design with flex-box and grid`,
            resume15:`2022`,
            resume16:`jr. Java Scritp`,
            resume17:`Jonass Chmedtmann Course`,
            resume18:`Working with arrays and object orientation and receiving API submissions and reactivity and receiving user information`,
            resume19:`My Skills`,
            portfolio1:`My Work`,
            portfolio2:`Forkify web application can search all kinds of food and view their ingredients. 
                        The ability to save a food and view it again in the bookmark section at any time. 
                        The possibility of adding new raw materials and access to it by all users`,
            portfolio3:`Banking web application.
                        Login to the bank account with username and password.
                        Transfer money to another bank account with a username.
                        Setting the time to exit the account`,
            portfolio4:`Web application for recording daily exercises on the map.
                        The possibility of recording walking or cycling with the meter or step`,
            portfolio5:`Responsive design with flex-box`,
            portfolio6:`Responsive design with grid`,

            contact1:`Get In Thouch`,
            contact2:`Address`,
            contact3:`Esfhan,Najaf Abad,Sheriati St,Polt No.16`,
            contact4:`Follow Me`,
            contact5:`Send Me A Note`,
            contact6:`Tell Me More About To Need...`,
            contact7:`Send Message`,
        },
    },
    {
        fa: {
            language: "زبان",
            loading: "درحال بارگذاری...",
            name: "محمدحسین دادخواه",
            home:"خانه",
            about:"درباره من",
            whatDo:"چه کاری انجام میدهم",
            resume:"رزومه",
            portfolio:"نمونه کار",
            contact:"ارتباط",

            welcome: "خوش آمدید",
            me:"من",
            based:"مستقر در اصفهان,نجف آباد",
            hire:"استخدام من",

            about1:"منو بیشتر بشناس",
            about2:"من محمدحسین داخواه هستم",
            about3:`اگر یک سایت کسب کار یا یک سایت محتوا نیاز داشته باشید میتوانم کمکتان کنم.
                     متولد شده در شهر نجف آباد اصفهان در سال 1378 .
                     اولین بار در سال 1399 با آشنایی یک سینور شروع به برنامه نویسی کردم.`,
            about4:"نام : محمدحسین داخواه",
            about5:"پست الکترونیکی : mohamaddadkhah69@gmail.com",
            about6:"سن : 24",
            about7:"از : اصفهان,نجف آباد",

            services1:"چه کاری انجام میدهم؟",
            services2:"طراحی سایت",
            services3:"طراحی سایت با ایده های متنوع رنگ بندی و انیمیشن سازی و انواع افکت ها",
            services4:"توسعه وب",
            services5:"تبدیل عکس طراحی شده توسط طراحان وب یه کد و اجرا به صورت وب اپلیکیشن",
            services6:"فرانت اند",
            services7:"توسعه ظاهر سایت و ایجاد واکنش نصبت به اعمال کاربر و طراحی ریسپانیسو",
            services8:"بک اند",
            services9:"متصل کردن رابط کاربری به پایگاه داده و انتقال داده ها",

            resume1:`رزومه`,
            resume2:`تحصیلات من`,
            resume3:`1396 - 1401`,
            resume4:`مهندسی مکانیک`,
            resume5:`دانشگاه یزد`,
            resume6:`سال 1396 در کنکور سراسری ریاضی رشته مکانیک دانشگاه یزد را قبول شدم`,
            resume7:`1400 - 1399`,
            resume8:`خودآموز`,
            resume9:`در حدود یک سال و نیم و دوره های مختلف و همکاری با یک سینور در چند پروژه.`,
            resume10:`تجربیات من`,
            resume11:`1401`,
            resume12:`CSS پیشرفته`,
            resume13:`دوره Jonass Chmedtmann`,
            resume14:`دوره css پیشرفته واستفاده از node-sass وطراحی ریسپانیسو با flex-box و grid`,
            resume15:`1401`,
            resume16:`Java Scritp پیشرفته`,
            resume17:`دوره Jonass Chmedtmann`,
            resume18:`کارکردن با آرایه ها و شی گرایی و دریافت ارسال API و واکنش پذیری ودریافت اطلاعات کاربر`,
            resume19:`مهارت های من`,

            portfolio1:`نمونه کارهای من`,
            portfolio2:`وب اپلیکیشن forkify قابل سرچ انواع غذا ها و مشاهده مواد اولیه آن ها.
                        قابلیت ذخیره کردن یک غذا و مشاهده مجدد آن در قسمت bookmark در هر زمان.
                         امکان اضافه کردن مواد اولیه جدید و دسترسی همه کاربران به آن`,
            portfolio3:`وب اپلیکیشن بانکداری.
                        وارد شدن داخل اکانت بانکی با نام کاربری و رمز عبور.
                        انتقال پول به حساب بانکی دیگری با داشتن نام کاربری.
                         نتظیم زمان خارج شدن از حساب`,
            portfolio4:`وب اپلیکیشن ثبت تمرین های روزانه روی نقشه.
                        امکان ثبت پیاده روی یا دوچرخه سواری همراه با متراژ یا قدم`,
            portfolio5:`طراحی ریسپانیسو با flex-box`,
            portfolio6:`طراحی ریسپانیسو با grid`,

            contact1:`با من در تماس باشید`,
            contact2:`آدرس`,
            contact3:`اصفهان,نجف آباد-خیابان شریعتی`,
            contact4:`دنبال کنید`,
            contact5:`پیام بفرستید`,
            contact6:`درباره چیزی که میخواهید بنویسید...`,
            contact7:`ارسال پیام`,
        }
    }
];
