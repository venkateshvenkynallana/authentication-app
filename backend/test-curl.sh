#!/bin/bash

echo "🧪 Testing Authentication Endpoints with curl..."
echo ""

BASE_URL="http://localhost:5000/api/auth"

echo "1. Testing Sign Up..."
curl -X POST "$BASE_URL/userSignUp" \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "testuser@example.com",
    "password": "password123",
    "phoneNo": "9876543210",
    "designation": "Developer",
    "bio": "Test user bio"
  }' \
  -i

echo ""
echo ""
echo "2. Testing Login..."
curl -X POST "$BASE_URL/userLogin" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "testuser@example.com",
    "password": "password123"
  }' \
  -i

echo ""
echo ""
echo "3. Testing Logout..."
curl -X POST "$BASE_URL/logout" \
  -i

echo ""
echo "✅ Tests completed!"
