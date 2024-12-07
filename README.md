# Amazon Product Reseller 🛒📦

## Overview

This is a React-based web application that allows users to input an Amazon product URL and calculate reselling prices with additional fees and profit margins.

![Project Demo](https://via.placeholder.com/800x400.png?text=Amazon+Product+Reseller+Demo)

### 🌟 Features

- 🔍 Amazon Product URL Input
- 💰 Automatic Price Calculation
- 📊 Detailed Price Breakdown
- 🎨 Responsive Design
- ⚡ Fast and Lightweight

### 💻 Tech Stack

- React.js
- Tailwind CSS
- Axios
- Hero Icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository
```bash
git clone https://github.com/dilmithp/amazon-product-reseller.git
cd amazon-product-reseller
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

## 📦 Project Structure

```
amazon-product-reseller/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── ProductCard.js
│   │   └── PriceBreakdown.js
│   │
│   ├── services/
│   │   └── amazonScraper.js
│   │
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md
```

## 🛠 Configuration

### Environment Variables

Create a `.env` file in the root directory for configuration:

```
REACT_APP_SCRAPER_API_URL=your_scraper_api_endpoint
```

## 🔍 How It Works

1. Enter an Amazon product URL
2. Click "Get Details"
3. View product information and calculated resale price

## 🚧 Limitations

- Uses mock data for demonstration
- Requires backend service for actual Amazon scraping
- Needs compliance with Amazon's terms of service

## 🔮 Future Improvements

- Implement actual Amazon product scraping
- Add more detailed product analysis
- Create backend API for scraping
- Implement user authentication

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Dilmith Pathirana - [dilmithp@outlook.com](mailto:dilmithp@outlook.com)

Project Link: [https://github.com/dilmithp/amazon-product-reseller](https://github.com/dilmithp/amazon-product-reseller)
