import React, { useState } from 'react';
import { fetchProductDetails } from './services/amazonScraper';
import ProductCard from './components/ProductCard';
import PriceBreakdown from './components/PriceBreakdown';
import { MagnifyingGlassIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

function App() {
  const [amazonLink, setAmazonLink] = useState('');
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleProductFetch = async () => {
    if (!amazonLink.trim()) {
      setError('Please enter a valid Amazon product URL');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const fetchedProduct = await fetchProductDetails(amazonLink);
      setProduct(fetchedProduct);
    } catch (err) {
      setError('Failed to fetch product details. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">
        Amazon Product Reseller
      </h1>

      <div className="mb-6 flex">
        <input
          type="text"
          value={amazonLink}
          onChange={(e) => setAmazonLink(e.target.value)}
          placeholder="Enter Amazon Product URL"
          className="flex-grow p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleProductFetch}
          disabled={isLoading}
          className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 flex items-center"
        >
          {isLoading ? 'Fetching...' : <><MagnifyingGlassIcon className="h-5 w-5 mr-2" /> Get Details</>}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center">
          <ExclamationTriangleIcon className="h-6 w-6 mr-2" />
          {error}
        </div>
      )}

      {product && (
        <div className="grid md:grid-cols-2 gap-6">
          <ProductCard product={product} />
          <PriceBreakdown product={product} />
        </div>
      )}
    </div>
  );
}

export default App;