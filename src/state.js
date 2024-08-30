import { reactive } from "vue";
import axios from 'axios';

export const state = reactive({
    message: 'Hello Reactive World',
    //methods below
    
    getDays(url){
        axios.get(url)
        .then(response => {
            this.days = response.data
        })
    
    }
})
