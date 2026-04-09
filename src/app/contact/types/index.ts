interface ContactSection1{
    content:{
        title:string,
        description:string,
        form:{
            type:string,
            label:string,
            placeholder:string,
        }[],
        map:{
            title:string,
            address:string,
            timezone:string,
            details:string,
            image:string,
        }
    }
}