import axios from 'axios';

axios.get('url').then(function (res) {
    console.log(res);
}).catch(function(err){
    console.log(err);
});