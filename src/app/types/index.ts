export interface BannerSection {
 content:{
  background_image:{url:string},
  cta_buttons:{text:string}[],
  title:string
 }[]
}
export interface Section1{
  content:{
    title:string,
    description:string
  }[]
}

export interface Section2 {
  content:{
    title:string,
    description:string,
    subContent:{
      title:string,
      description:string,
    }[]
  }[]
}

export interface Section3 {
    content:{
        title:string,
        content:{
            images:string[]
        }
    }
}

export interface FaqData {
  type: string;
  content: {
    title: string;
    faq: {
      answer:string,
      question:string,
    }[];
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterBannerSection {
  content:{
   background_image:{url:string},
   cta_buttons:{text:string},
   title:string
  }[]
 }
 

 export interface FooterSection1{
  content:{
    title:string,
    description:string,
    socials:{
      type:string,
      url:string,
    }[]
  }[]
 }
 export interface FooterSection2{
  content:{
    title:string,
    description:{
      name:string,
      link:string,
    }[]
  }
 }