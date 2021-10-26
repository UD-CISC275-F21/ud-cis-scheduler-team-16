/*
TEMPLATE FOR JSON
{
        "Index": ,
        "School": "",
        "Class ID": ,
        "Name": "",
        "Desc": "",
        "PreReq": "",
        "CoReq": "",
        "Credits": 
    },
*/
export interface Course{
    ID: string,
    School: string,
    ClassID: number,
    Name: string,
    Desc: string,
    //"PreReq": string,
    //"CoReq": string,
    Credits: number 
}