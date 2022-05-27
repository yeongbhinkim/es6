const httpReq = {
    get(url) {
        return fetch(url,{
            method:'GET'
        });
    },
    post(url, payload){
        return fetch(url,{
            method:'POST',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(payload)
        });
    },
    put(url, payload){
        return fetch(url,{
            method:'PUT',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(payload)
        });
    },
    patch(url, payload){
        return fetch(url,{
            method:'PATCH',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(payload)
        });
    },
    delete(url) {
        return fetch(url,{
            method:'DELETE'
        });
    }
}



//get방식
// httpReq.get('/todos')
//        .then(res=>console.log(res.json()))
//        .catch(err=>console.log(err));