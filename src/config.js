// This file manages environment variables and configuration settings

const config = {
  // Ensure we handle API paths correctly by removing trailing slashes
  apiUrl: (import.meta.env.VITE_API_URL || 'http://localhost:3000')
    .replace(/\/$/, '') + '/api/v1',
  isDevelopment: import.meta.env.DEV
};

export default config;
