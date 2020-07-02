export default function callAPI(data) {
    console.log("api  delete",data)
    return new Promise((resolve, reject) => {

        const url = `http://localhost:3001/items/${data}`
        fetch(url, {
            method: "DELETE",
           
        })
            .then((response) => response.json())
            .then((res) => { resolve(res); })
            .catch((error) =>{
                reject(error);
            });
    });
}