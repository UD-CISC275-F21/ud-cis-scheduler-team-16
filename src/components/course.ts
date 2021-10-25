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
    "Index": number,
    "School": string,
    "Class ID": number,
    "Name": string,
    "Desc": string,
    "PreReq": string,
    "CoReq": string,
    "Credits": number 
}