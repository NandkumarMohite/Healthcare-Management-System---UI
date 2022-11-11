import axios from 'axios';

const USER_API_BASE_URL1="http://localhost:8888/diplayUser"
const USER_API_BASE_URL2="http://localhost:8888/addUser"
// const USER_API_BASE_URL3=`http://localhost:8888/update/${srNo}`


class UserService{
    getUser(){

        return axios.get(USER_API_BASE_URL1);
    }
    createUser(user){
        return axios.post(USER_API_BASE_URL2,user);
    }
    

}
export default new UserService()