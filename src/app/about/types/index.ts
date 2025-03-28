interface AboutSection1{
    content:{
        title:string,
        description:string,
        image:string,
    }[]
}
interface AboutSection2{
    content:{
        title:string,
        subContent:{
            image:string,
            title:string,
            subTitle:string,
        }[],
    }
}
interface AboutSection3{
    content:{
        title:string,
        image:string,
        subContent:{
            title:string,
            description:string,
        }[],
    }
}