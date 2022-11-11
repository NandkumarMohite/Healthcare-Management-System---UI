import axios from 'axios';


// const USER_API_BASE_URL1="http://localhost:8888/diplayUser"
const USER_API_BASE_URL2="http://localhost:8888/addToChart"
// const USER_API_BASE_URL3=`http://localhost:8888/update/${srNo}`
const USER_API_BASE_URL="http://localhost:8888/addToChartCoach"

class AddToCartService{
    // getUser(){

    //     return axios.get(USER_API_BASE_URL1);
    // }
    AddToCartPlan(Robot){
        return axios.post(USER_API_BASE_URL2,Robot);
    }
    AddToCartCoach(Robot){
        return axios.post(USER_API_BASE_URL,Robot);
    }
    

}
export default new AddToCartService()