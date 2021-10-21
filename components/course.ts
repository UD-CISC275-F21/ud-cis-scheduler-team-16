/*
TEMPLATE FOR JSON
{
        "school": "",
        "id": ,
        "name": "",
        "desc": "",
        "preReq": "",
        "corReq": "",
        "credits": 
},
*/
export interface Course{
    school: string,
    id: number,
    name: string,
    desc: string,
    preReq: string,
    coReq: string,
    credits: number,
}