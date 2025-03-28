interface BrandingSection1{
    content:{
        title:string,
        description:string,
        subContent:{
            title:string,
            description:string,
        }[]
    }[]
}

interface BrandingSection2{
    content:{
        image:string,
        title:string,
        description:string,
    }
}

interface BrandingSection3{
    content:{
        title:string,
        subContent:{
            title:string,
            description:string,
        }[]
    }
}

interface BrandingSection4{
    content:{
        images:string[],
        title:string,
        description:string,
    }
}