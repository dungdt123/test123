export default function callAPI(data) {
    console.log("api search",data)
    return new Promise((resolve, reject) => {

        const url = `http://localhost:3001/items?q=${data}`
        fetch(url, {
            method: "GET",
           
        })
            .then((response) => response.json())
            .then((res) => { resolve(res); })
            .catch((error) =>{
                reject(error);
            });
    });
}