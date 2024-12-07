import React from 'react';
import { CurrencyDollarIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const PriceBreakdown = ({ product }) => {
  const ADS_FEE = 10;
  const PROFIT_MARGIN = 0.3;

  const platformProfit = product.originalPrice * PROFIT_MARGIN;
  const finalPrice = product.originalPrice + ADS_FEE + platformProfit;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <h3 className="text-lg font-semibold mb-3 flex items-center">
        <CurrencyDollarIcon className="h-6 w-6 mr-2 text-green-600" />
        Price Breakdown
      </h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Original Price</span>
          <span>${product.originalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Ads Fee</span>
          <span>${ADS_FEE.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Platform Profit (30%)</span>
          <span>${platformProfit.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold border-t pt-2">
          <span className="flex items-center">
            <ShoppingCartIcon className="h-5 w-5 mr-2 text-blue-600" />
            Final Selling Price
          </span>
          <span>${finalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceBreakdown;