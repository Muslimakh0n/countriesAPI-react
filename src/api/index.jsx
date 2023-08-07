import axios from "axios";

const URL  = "https://restcountries.com/v2";

const  index = {
  getAll: async()=> axios.get(`${URL}/all`),
  getItem: async(title)=> axios.get(`${URL}/name/${title}`),
  filterContury: async (region)=> axios.get(`${URL}/region/${region}`),
  searchData: async (name) => axios.get(`${URL}/name/${name}`)
}
export default index;