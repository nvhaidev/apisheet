const axios = require('axios').default;
const json= require('@ptndev/json');

class ApiSheet{
    constructor(url) {
        if(!url){
            throw new Error('Url & id is required');
        }
        const isUrl = url.includes('https://script.google.com/macros/s/');
        if(isUrl){
            this.url=url;
        }
        else{
            this.url=`https://script.google.com/macros/s/${url}/exec`;
        }

    }
   async create(table,data){
        const response =await axios.post(`${this.url}?method=create&table=${table}`,json.stringify(data),{headers:{'Content-Type':'application/json'}});
        return response.data;
    }
    async findOne(table,options){
        const response =await axios.get(`${this.url}?method=findOne&table=${table}&options=${encodeURIComponent(json.stringify(options))}`);
        return response.data;

    }
    async findByPk(table,id){
        const response =await axios.get(`${this.url}?method=findByPk&table=${table}&options=${encodeURIComponent(json.stringify({id:id}))}`);
        return response.data;
    }
    async findAll(table,options){
        const response =await axios.get(`${this.url}?method=findAll&table=${table}&options=${encodeURIComponent(json.stringify(options))}`);
        return response.data;
    }
    async findAndCountAll(table,options){
        const response =await axios.get(`${this.url}?method=findAndCountAll&table=${table}&options=${encodeURIComponent(json.stringify(options))}`);
        return response.data;
    }
    async updateById(table,data){
        const response =await axios.post(`${this.url}?method=updateById&table=${table}`,json.stringify(data),{headers:{'Content-Type':'application/json'}});
        return response.data;
    }
    async deteleById(table,id){
        const response =await axios.get(`${this.url}?method=deleteById&table=${table}&options=${encodeURIComponent(json.stringify({id:id}))}`);
        return response.data;
    }
}
module.exports = ApiSheet;