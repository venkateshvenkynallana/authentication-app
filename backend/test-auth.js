const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api/auth';

// Test data
const testUser = {
    fullName: 'Test User',
    email: 'test@example.com',
    password: 'password123',
    phoneNo: '1234567890',
    designation: 'Developer',
    bio: 'Test user bio'
};

async function testAuth() {
    try {
        console.log(' Testing Authentication Endpoints...\n');
        const signUpResponse = await axios.post(`${BASE_URL}/userSignUp`, testUser);
        
        const loginResponse = await axios.post(`${BASE_URL}/userLogin`, {
            email: testUser.email,
            password: testUser.password
        });


   
    } catch (error) {
        console.error(' Test Failed:', error.response?.data || error.message);
        if (error.response?.status === 409) {
            console.log(' User already exists. Try logging in instead.');
        }
    }
}

// Install axios if not present and run test
testAuth();
