

export interface LinkType {
    title?: string;
    href: string;
    target?: string;
    
    id?: string;
    aria?: string;
    icon?: {
      names?: string ;
      side: "left" | "right";
    };
    text: string;
    Img?:{
      alt: string,
      side: "left" | "right",
    },
    ImageSrc?: string | any,
}
export interface SerBoxType{
  title:string,
  des:string,
  icon:string
}
export interface cateBoxType{
  img:string | any;
  title?:string,
}

export interface ProductType extends cateBoxType{
  des:string,
  href:string,
  price:string,
  discount?:{value:string , newPrice:string} | null,
  title:string,
  // Status?:boolean,
  StatusValue?: "جديد" | 'مرفوض' | 'تم الشحن' | 'تم الدفع' | 'منتهي' ,
  StatusClass?:string,
}