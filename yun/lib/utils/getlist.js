const axios = require('axios').default;
var request = require('request');
const config = require('../../config/config');

module.exports ={
    getToken,getlist
}

async function getToken(username,password){

  
    var access_token
    await axios({
        url: 'http://8.142.81.91:3000/v1/oauth2/token',
        data: {
            "grant_type":"password",
            "client_id":"1002",
            "client_secret":"777.777.777",
            // "username": this.options.username, 
            // "password": this.options.password, 
            "username":config.connect.username,
            "password":config.connect.password,
            "device_type": "user"
        },
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        console.log('got token!')
        // console.log(res.data.access_token)
        access_token = res.data.access_token
    })
    .catch('got token failed', error => { console.log(error) })

    return access_token
}

async function getlist(){

    var access_token=await getToken()
    var did2PK={}

    var sm=await axios({
        url: "http://8.142.81.91:3000/v1/devices",
        data: {},
        method: 'get',
        headers: {
            "Content-Type": "application/json",
            'Authorization': access_token
        }
    })
    .then(res => {
        console.log('get list!')
        // console.log(res.data)
        for(key in res.data){
            // console.log(res.data[key].did)
            did2PK[res.data[key].did]=res.data[key].product_key
        }
        console.log(did2PK)
    })
    .catch('get list failed', error => { console.log(error) })

    return did2PK
}