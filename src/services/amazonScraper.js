import axios from 'axios';

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Wireless Noise Cancelling Headphones',
    description: 'Premium over-ear headphones with advanced noise cancellation',
    originalPrice: 199.99,
    imageUrl: 'https://via.placeholder.com/300x200',
    rating: 4.5,
    reviews: 1234
  },
  {
    id: 2,
    title: 'Smart Fitness Tracker',
    description: 'Advanced fitness watch with heart rate monitoring',
    originalPrice: 129.99,
    imageUrl: 'https://via.placeholder.com/300x200',
    rating: 4.2,
    reviews: 876
  }
];

export const fetchProductDetails = async (amazonLink) => {
  try {
    // Simulating API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demonstration, return a mock product
    return MOCK_PRODUCTS[0];

    // Uncomment and modify for actual API integration
    // const response = await axios.get('/api/scrape', { 
    //   params: { url: amazonLink } 
    // });
    // return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};