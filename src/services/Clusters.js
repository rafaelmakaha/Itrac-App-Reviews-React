import axios from 'axios';
import { ENDPOINTS } from '../settings';

export const getClusters = (cluster = '') => {
  const endpoint = ENDPOINTS.API;
  const route = endpoint.base_url + endpoint.list_clusters.route + cluster;
  
  return new Promise((resolve,reject) => {
    axios.get(route)
      .then(response => resolve(response))
      .catch(err => reject(err))
  })
};