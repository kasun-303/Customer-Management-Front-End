import axios from "axios";

const API_URL = "http://localhost:3002/customers";

export const addCustomer = async(data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("Error while calling addCustomer api", error.message);
  }

};

export const getCustomers = async () =>{
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error while calling getCustomers api", error.message);
  }   
}

export const getCustomer = async (data) =>{
  try {
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.log("Error while calling getCustomer api", error.message);
  }   
}

export const editCustomer = async (data,id) =>{
  try {
    return await axios.put(`${API_URL}/${id}`,data);
  } catch (error) {
    console.log("Error while calling editCustomer api", error.message);
  }   
}

export const deleteCustomer = async (id) =>{
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error while calling deleteCustomer api", error.message);
  }   
}