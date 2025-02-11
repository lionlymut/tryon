import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    iterations:25,
    vus:20
};

export default function(){
    let res = http.get("http://10.201.1.138:800/eazyn/index.php");

    res = res.submitForm({
        formSelector: 'form',
        fields: {username:"mutiara", password:"123456"}
    })
    sleep(1);
}