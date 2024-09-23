import axios from 'axios';

class ApiService {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // GET Request
  async get(endpoint, params = {}) {
    try {
      const response = await this.api.get(endpoint, { params });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // POST Request
  async post(endpoint, data) {
    try {
      const response = await this.api.post(endpoint, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // PUT Request (Update)
  async put(endpoint, data) {
    try {
      const response = await this.api.put(endpoint, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // DELETE Request
  async delete(endpoint) {
    try {
      const response = await this.api.delete(endpoint);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Error handling method
  handleError(error) {
    console.error('API error occurred:', error);
    if (error.response) {
      // Server-side error
      console.error('Error response:', error.response);
      throw new Error(error.response.data.message || 'Something went wrong!');
    } else {
      // Network error or other issues
      throw new Error('Network error or API is unreachable');
    }
  }
}

export default ApiService;
