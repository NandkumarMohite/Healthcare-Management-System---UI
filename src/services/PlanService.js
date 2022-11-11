import axios from 'axios';
const PLAN_API_BASE_URL1 = "http://localhost:8888/Displayplan";
const PLAN_API_BASE_URL2 = "http://localhost:8888/addplan";
class PlanService{

    getPlan(){
        return axios.get(PLAN_API_BASE_URL1);
    }
    createPlan(plan){
        return axios.post(PLAN_API_BASE_URL2, plan);
    }

    // getCoachById(coachId){
    //     return axios.get(COACH_API_BASE_URL + '/' + coachId);
    // }

    // updateCoach(coach, coachId){
    //     return axios.put(COACH_API_BASE_URL + '/' + coachId, coach);
    // }

    // deleteCoach(coachId){
    //     return axios.delete(COACH_API_BASE_URL + '/' + coachId);
    // }

}
export default new PlanService()