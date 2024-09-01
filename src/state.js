import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    message: 'Hello Reactive World',
    close: false,
    //methods below
    
    getDays(url){
        axios.get(url)
        .then(response => {
            this.days = response.data
        })        
        .catch(error => {
            console.error("Errore nel recupero dei giorni:", error);
        });
    },
    noBlur(){
        close = true
        console.log(close);
    }
});
