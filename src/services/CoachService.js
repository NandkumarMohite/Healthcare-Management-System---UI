import axios from 'axios';
const COACH_API_BASE_URL1 = "http://localhost:8888/diplayCoach";
const COACH_API_BASE_URL2 = "http://localhost:8888/addcoach";
class CoachService{

    getCoaches(){
        return axios.get(COACH_API_BASE_URL1); 
    }
    createCoach(coach){
        return axios.post(COACH_API_BASE_URL2, coach);
    }

  

}
export default new CoachService()