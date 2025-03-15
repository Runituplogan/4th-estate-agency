export interface BannerSection {
 content:{
  background_image:{url:string},
  cta_buttons:{text:string}[],
  title:string
 }[]
}
export interface BannerSection2 {
 content:{
  background_image:{url:string},
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