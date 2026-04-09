interface PressSection1{
    content:{
        title:string,
        description:string,
        subContent:{
            title:string,
            description:string,
        }[]
    }[]
}
interface PressSection2{
    content:{
        title:string,
        description:string,
        subContent:{
            image:{url:string}
            description:string,
        }
    }
}

interface PressSection3{
    content:{
        title:string,
        subContent:{
            title:string,
            description:string,
        }[]
    }
}
interface PressSection4{
    content:{
        title:string,
        description:string,
        images:string,
    }
}