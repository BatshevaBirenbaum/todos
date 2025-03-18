import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const apiUrl = process.env.REACT_APP_API_URL
axios.interceptors.response.use(
    response => response,
    error => {
        console.log("error"); 
        console.log("Error Data:", error.response.error);
    }
);
export default {
    
  getTasks: async () => {
    const result = await axios.get(`/getItems`)  
    return result.data;
  },

  addTask: async(name) => {
    console.log('addTask', name);
    await axios.post(`addItem`, name, {
        headers: {
            'Content-Type': 'application/json' 
        }
    });
},
  setCompleted: async(id, isComplete)=>{
   
    await axios.put(`/updateItem?id=${id}&&IsComplete=${isComplete}`);
  },

  deleteTask:async(id)=>{
    await axios.delete(`/deleteItem?id=${id}`);
  }
};
