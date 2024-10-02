import type { LinkType, SerBoxType, cateBoxType, ProductType } from "../types/type";
import En from "@assets/images/flag/flagEn.webp"
import Ar from "@assets/images/flag/flagAr.png"
export const LangDropDown: LinkType[] = [
    {
        href: "#!",
        text: "English",
        aria: "English Language",
        Img: {
            alt: "English Flag",
            side: "left",
        },
        ImageSrc: En,
    },
    {
        href: "#!",
        text: "العربية",
        aria: "Ar Language",
        Img: {
            alt: "Ar Flag",
            side: "left",
        },
        ImageSrc: Ar,
    },
];
export const DropDownUser:LinkType[]=[
    {
        href:"MyAccount.html",
        aria:"editUser",
        text:"تعديل حسابي",
        icon:{
            names:'EditUser',
            side:'left'
        },
    },
    {
        href:"Order.html",
        aria:"userOrder",
        text:" طلباتي",
        icon:{
            names:'order',
            side:'left'
        },
    },
    {
        href:"notifications.html",
        aria:"notifications",
        text:" الاشعارات",
        icon:{
            names:'notifications',
            side:'left'
        },
    },
    {
        href:"#!",
        aria:"logout",
        text:" تسجيل الخروج",
        icon:{
            names:'logout',
            side:'left'
        },
    },
]
export const ListLinksPageData: LinkType[] = [
    {
        href: '/',
        text: 'الصفحة الرئيسية',
        aria: 'Home Page',
    },
    {
        href: 'About.html',
        text: 'من نحن',
        aria: 'AboutUs Page',
    },
    {
        href: 'Products.html',
        text: 'منتجاتنا',
        aria: 'Products Page',
    },
    {
        href: 'ContactUs.html',
        text: 'تواصل معانا',
        aria: 'contactUs Page',
    },
    {
        href: 'Blog.html',
        text: 'المدونة',
        aria: 'blog Page',
    },
]
// ============ser boxes==========
export const SerBoxData: SerBoxType[] = [
    {
        title: ' توصيل مجاني',
        des: ' للطلبات التي تزيد عن  100 ر.س',
        icon: 'delivery'
    },
    {
        title: 'دعم فني للشكاوي',
        des: ' 24 ساعة',
        icon: 'Support'
    },
    {
        title: ' سياسة استرجاع واضحة',
        des: ' إرجاع سهل ومجاني ',
        icon: 'return'
    },
    {
        title: ' جودة المنتج',
        des: ' ضمان 100%  ',
        icon: 'quality'
    },
]
// ============cate boxes==========
import img1 from "@assets/images/cate/cate-1.png";
import img2 from "@assets/images/cate/cate-2.png";
import img3 from "@assets/images/cate/cate-3.png";
import img4 from "@assets/images/cate/cate-4.png";
import img5 from "@assets/images/cate/cate-5.png";
import img6 from "@assets/images/cate/cate-6.png";

export const CateBoxData: cateBoxType[] = [
    {
        img: img1,
        title: 'مستلزمات طبية',
    },
    {
        img: img2,
        title: 'العلاج الطبيعي والتأهيل ',
    },
    {
        img: img3,
        title: 'الرعاية النهارية',
    },
    {
        img: img4,
        title: 'منتجات الاسنان',
    },
    {
        img: img5,
        title: 'مستلزمات طبية',
    },
    {
        img: img6,
        title: 'مستلزمات طبية',
    },

]

// ============product card==========
import pro1 from "@assets/images/products/pro-1.webp";
import pro2 from "@assets/images/products/pro-2.webp";
import pro3 from "@assets/images/products/pro-3.webp";
import pro4 from "@assets/images/products/pro-4.webp";
import pro5 from "@assets/images/products/pro-5.webp";
import pro6 from "@assets/images/products/pro-6.webp";
export const productData: ProductType[] = [
    {
        title: 'أومرون جهاز قياس ضغط الدم M3',
        des: 'أومرون جهاز قياس ضغط الدم M3 هو جهاز قياس ضغط الدم الأوتوماتيكي من أعلى الذراع من شركة أومرون، وهي ش',
        href: "ProductDetails.html",
        price: '200',
        discount: { value: '10', newPrice: '150' },
        img: pro1,
        // Status: false,
        StatusValue: 'جديد',
        StatusClass: 'new',
    },
    {
        title: 'جهاز توليد اكسجين نيولايف ايلت اير سيب 5 لتر ',
        des: 'جهاز توليد أكسجين جهاز توليد اكسجين نيوليف ايلت اير سيب 5 لتر هو جهاز طبي يستخدم لتزويد المرضى بالأك',
        href: "ProductDetails.html",
        price: '400',
        discount: null,
        img: pro2,
        // Status: false,
        StatusValue: 'منتهي',
        StatusClass: 'out',
    },
    {
        title: 'ماء مقطر نقي 1لتر SPI',
        des: 'ماء مقطر 1لتر SPI هو ماء خالٍ من الشوائب والمعادن، يتم الحصول عليه عن طريق عملية التقطير. مقطر 1لتر ',
        href: "ProductDetails.html",
        price: '10',
        discount: null,
        img: pro3,
        // Status: false,
        StatusValue: 'تم الشحن',
        StatusClass: 'delivered',
    },
    {
        title: 'سرير طبي للعناية المركزة 6 حركات هيل روم أمريكي مع المرتبة HR900',
        des: 'سرير طبي HR900 هو سرير طبي عالي الجودة مصمم لتوفير الراحة والدعم للمرضى الذين يعانون من مجموعة متنوع',
        href: "ProductDetails.html",
        price: '17,500',
        discount: { value: '30', newPrice: '12,400' },
        img: pro4,
        // Status: false,
        StatusValue: 'تم الشحن',
        StatusClass: 'delivered',
    },
    {
        title: 'مخدة نوم طبية كونتور',
        des: 'مخدة نوم طبية كونتور :وسادة طبية مصنوعه من الميموري فوم الماني الصنع وعالي الجودة ومزودة بغطاء داخلي',
        href: "ProductDetails.html",
        price: '500',
        discount: { value: '50', newPrice: '250' },
        img: pro5,
        StatusValue:'تم الدفع',
        StatusClass: 'paid',
    },
    {
        title: 'جبيرة قدم هوائية قصيرة',
        des: 'جبيرة القدم الهوائية هي جهاز طبي يستخدم لتثبيت ودعم القدم والكاحل بعد الإصابة أو الجراحة. تتكون الجب',
        href: "ProductDetails.html",
        price: '300',
        discount: null,
        img: pro6,
        StatusValue:'مرفوض',
        StatusClass: 'declined',
    },
    {
        title: 'جهاز توليد اكسجين نيولايف ايلت اير سيب 5 لتر ',
        des: 'جهاز توليد أكسجين جهاز توليد اكسجين نيوليف ايلت اير سيب 5 لتر هو جهاز طبي يستخدم لتزويد المرضى بالأك',
        href: "ProductDetails.html",
        price: '400',
        discount: null,
        img: pro2,
        StatusValue: 'جديد',
        StatusClass: 'new',
    },
    {
        title: 'ماء مقطر نقي 1لتر SPI',
        des: 'ماء مقطر 1لتر SPI هو ماء خالٍ من الشوائب والمعادن، يتم الحصول عليه عن طريق عملية التقطير. مقطر 1لتر ',
        href: "ProductDetails.html",
        price: '10',
        discount: null,
        img: pro3,
        StatusValue:'تم الدفع',
        StatusClass: 'paid',
    },
]
// ============footer ul==========
//==POPULAR CATEGORIES====
export const FooterCate_1Data: LinkType[] = [
    {
        text: 'الالكترونيات',
        href: '#!',
    },
    {
        text: 'مستحضرات التجميل',
        href: '#!',
    },
    {
        text: 'الاثاث',
        href: '#!',
    },
    {
        text: ' العدد والادوات',
        href: '#!',
    },
    {
        text: ' العدد والادوات',
        href: '#!',
    },
]
//==PRODUCTS===
export const FooterCate_2Data: LinkType[] = [
    {
        text: 'منتجاتنا الجديدة',
        href: '#!',
    },
    {
        text: 'افضل المبيعات',
        href: '#!',
    },
    {
        text: 'العروض اليومية',
        href: '#!',
    },
    {
        text: 'الاكثر طلبا',
        href: '#!',
    },
    {
        text: 'العروض الاسبوعية',
        href: '#!',
    },
]
//==OUR COMPANY===
export const FooterCate_3Data: LinkType[] = [
    {
        text: 'توصيل',
        href: '#!',
    },
    {
        text: 'إشعار قانوني',
        href: '#!',
    },
    {
        text: 'الأحكام والشروط',
        href: '#!',
    },
    {
        text: 'من نحن',
        href: '#!',
    },
    {
        text: 'دفع امن',
        href: '#!',
    },
]
//==OUR SERVICES===
export const FooterCate_4Data: LinkType[] = [
    {
        text: 'اسعار مخفضة',
        href: '#!',
    },
    {
        text: 'توصيل مجاني',
        href: '#!',
    },
    {
        text: '  سياسة استرجاع واضحة',
        href: '#!',
    },
    {
        text: 'دعم فني',
        href: '#!',
    },
    {
        text: 'جودة المنتج',
        href: '#!',
    },
]

// =======client ================
import Prand_1 from "@assets/images/prand/b2.webp";
import Prand_2 from "@assets/images/prand/b3.png";
import Prand_3 from "@assets/images/prand/b4.png";
import Prand_4 from "@assets/images/prand/b5.png";
import Prand_5 from "@assets/images/prand/b6.webp";
export const ClientData:cateBoxType[] = [
    {
        img:Prand_1,
    },
    {
        img:Prand_2,
    },
    {
        img:Prand_3,
    },
    {
        img:Prand_4,
    },
    {
        img:Prand_5,
    },
    {
        img:Prand_3,
    },
    {
        img:Prand_1,
    },
]