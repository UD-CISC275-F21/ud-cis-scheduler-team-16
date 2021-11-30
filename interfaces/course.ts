/*
TEMPLATE FOR JSON
{
        "Index": ,
        "School": "",
        "Class ID": ,
        "CourseName": "",
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
    CourseName: string,
    Desc: string,
    //"PreReq": string,
    //"CoReq": string,
    Credits: number 
}