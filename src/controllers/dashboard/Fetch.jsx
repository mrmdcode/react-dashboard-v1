const FetchNormal =async ( url , method="GET",body={} ) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "aplication/json");

    var raw = JSON.stringify(myHeaders);

    var requestOptions = {
        method: method,
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const response = await fetch(url, requestOptions);
    const jsonresponse =await response.json();
    return await jsonresponse;
}




// const FetchAuth = async () => {
//     const Data =await fetch(`${url}`,{
//         method : `${method}` , // *GET, POST, PUT, DELETE, etc.
//
//         headers :{
//             "Content-Type": "application/json",
//
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//             ...header
//         },
//
//         body : JSON.stringify(body) ,
//     });
//     return await Data.json();
// }

export {FetchNormal};