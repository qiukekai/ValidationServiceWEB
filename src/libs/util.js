import Vue from 'vue';
// import axios from 'axios';
import env from '../config/env';
import VueResource from 'vue-resource'
import comp from './myunits'
Vue.use(VueResource);

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};


util.setList = function(stat) {
    let arr = [];
    Vue.http.post('/certification/JobList',{status: stat}).then(
    function(data) {
        if(data.body.Success == true){
            var i = 0;
            data.body.ResultList.map((each) =>{
                Vue.set(arr,i, {
                                JobId: each.JobId,
                                SkillName: each.SkillName,
                                Status: each.Status,
                                FinishTime: each.FinishTimes,
                                Operation: '???'
                });
                i++;
            });
        } else {
            return []
        }
    },
    function(error) {
        console.info('mian.js  error ************** ' + JSON.stringify(error));
    });

    return arr;
};

util.getInfo = function(Id) {
    // let d = {}
    // .then(
    // function(data) {
    //     if(data.body.Success == true){
    //         d = data.body;
    //         console.info("@@@@@@@@@@@  " + JSON.stringify(d))
    //     } else {
    //         return {}
    //     }
    // },
    // function(error) {
    //     console.info('mian.js getInfo error ************** ' + JSON.stringify(error));
    // });

    return Vue.http.post('/certification/GetJobById',{JobId: Id});
};

export default util;