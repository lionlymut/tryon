import http from 'k6/http';
import {sleep} from 'k6'; //sleep untuk seberapa lama berhenti 

export const options ={
    iterations:5, //banyak kali user akan meakses
    vus:2
};

export default function(){
    http.get("https://komdigi.go.id/"); //untuk diarahkan kemana

    sleep(1)
}
