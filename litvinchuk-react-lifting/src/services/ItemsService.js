import axios from 'axios';
import {API_BASE} from "../constants/API";

class ItemsServiceClass {
  getAll () {
    return axios.get(`${API_BASE}/items`)
        .then(res => {
          return res.data;
        })
        .catch(err => console.log(err));
  }

  getOne (id) {
    return axios.get(`${API_BASE}/items/${id}`)
        .then(res => {
          return res.data;
        })
        .catch(err => console.log(err));
  }
}

const ItemsService = new ItemsServiceClass();
export default ItemsService;