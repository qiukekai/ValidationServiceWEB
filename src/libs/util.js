import Vue from 'vue';
import axios from 'axios';
import env from '../config/env';
import VueResource from 'vue-resource'
Vue.use(VueResource);


let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://127.0.0.1:8888' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

var aj = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

util.base = {
    success(response) {
        console.log(response);
        return response
    },
    error(err) {
        console.log(err);
        return err
    },
    get(url, option) {
        return Vue.$http.get(url, option)
            .then(this.success, this.error)
    }
};

export default util;