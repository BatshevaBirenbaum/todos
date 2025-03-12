import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const apiUrl = "http://localhost:5206"
axios.interceptors.response.use(
    response => response,
    error => {
        console.log("error"); 
        console.log("Error Data:", error.response.error);
    }
);
export default {
    
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/getItems`)  
    return result.data;
  },

  addTask: async(name) => {
    console.log('addTask', name);
    await axios.post(`${apiUrl}/addItem`, name, {
        headers: {
            'Content-Type': 'application/json' 
        }
    });
},
  setCompleted: async(id, isComplete)=>{
   
    await axios.put(`${apiUrl}/updateItem?id=${id}&&IsComplete=${isComplete}`);
  },

  deleteTask:async(id)=>{
    await axios.delete(`${apiUrl}/deleteItem?id=${id}`);
  }
};
