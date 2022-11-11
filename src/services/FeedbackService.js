import axios from 'axios';


const USER_API_BASE_URL1="http://localhost:8888/displayfeedback"
const USER_API_BASE_URL2="http://localhost:8888/addfeedback"

class FeedbackService{
    
    
    getFeedback(){

        return axios.get(USER_API_BASE_URL1);
    }
    createFeedback(feedback){
        return axios.post(USER_API_BASE_URL2,feedback);
    }
}
export default new FeedbackService()