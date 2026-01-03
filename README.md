# E-Commerce Website

A fully functional e-commerce website built with Vanilla JavaScript, HTML, and CSS. This project features a dynamic shopping cart, product management, and a modern, responsive user interface.

🔗 **Live Demo**: [View Project](https://deepanshu-singh22.github.io/e-commerce-website/)

## 🚀 Features

- **Dynamic Product Display**: Browse products with detailed information
- **Shopping Cart**: Add, update, and remove items from cart
- **Quantity Management**: Increment/decrement product quantities with stock validation
- **Local Storage**: Persistent cart data across browser sessions
- **Real-time Price Calculation**: Automatic price updates based on quantity
- **Responsive Design**: Optimized for all device sizes
- **Toast Notifications**: User-friendly feedback messages
- **Product Filtering**: Filter products by category

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling and animations
- **JavaScript (Vanilla)** - Core functionality
- **Vite** - Build tool and development server
- **Local Storage API** - Data persistence

## 📁 Project Structure
```
e-commerce-website/
├── api/
│   └── products.json
├── images/
│   └── product images
├── public/
│   └── images/
├── about.html
├── addToCart.html
├── addToCart.js
├── contact.html
├── fetchQuantityFromCartLS.js
├── footer.js
├── getCartProducts.js
├── homeProductCards.js
├── homeQuantityToggle.js
├── incrementDecrement.js
├── index.html
├── main.js
├── package.json
├── products.html
├── removeProdFromCart.js
├── showAddToCartCards.js
├── showToast.js
├── steps.md
├── style.css
├── updateCartProductTotal.js
├── updateCartValue.js
└── vite.config.js
```

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
   git clone https://github.com/deepanshu-singh22/e-commerce-website.git
   cd e-commerce-website
```

2. **Install dependencies**
```bash
   npm install
```

3. **Run development server**
```bash
   npm run dev
```

4. **Build for production**
```bash
   npm run build
```

5. **Preview production build**
```bash
   npm run preview
```

## 📋 Key Features Implementation

### 1. Product Display (`homeProductCards.js`)
- Dynamically renders product cards using template cloning
- Displays product details: name, brand, category, price, image, and stock
- Implements event delegation for quantity controls

### 2. Shopping Cart Management
- **Add to Cart** (`addToCart.js`): Adds products with quantity and price validation
- **Get Cart Products** (`getCartProducts.js`): Retrieves cart data from local storage
- **Show Cart Cards** (`showAddToCartCards.js`): Displays cart items on cart page
- **Remove Products** (`removeProdFromCart.js`): Handles product removal from cart

### 3. Quantity Controls
- **Home Page Toggle** (`homeQuantityToggle.js`): Manages quantity on product listing
- **Cart Page Controls** (`incrementDecrement.js`): Handles increment/decrement in cart
- Stock validation and minimum quantity constraints

### 4. Price Calculations
- **Fetch Quantity** (`fetchQuantityFromCartLS.js`): Gets product quantity and price
- **Update Total** (`updateCartProductTotal.js`): Calculates subtotal and final total
- **Update Cart Value** (`updateCartValue.js`): Updates cart badge counter

### 5. User Experience
- **Toast Notifications** (`showToast.js`): Displays success/error messages
- **Footer** (`footer.js`): Dynamic footer component
- Smooth animations and transitions

## 💻 Usage

### Adding Products to Cart
```javascript
// User clicks "Add to Cart" button
addToCart(event, productId, stock);

// Product is added with:
// - Quantity validation
// - Price calculation
// - Local storage update
// - Toast notification
```

### Managing Quantity
```javascript
// On product listing page
homeQuantityToggle(event, productId, stock);

// On cart page
incrementDecrement(event, productId, price, stock);
```

### Removing Products
```javascript
// Remove product from cart
removeProdFromCart(productId);
```

## 🎨 Pages

1. **Home** (`index.html`) - Landing page with featured products
2. **Products** (`products.html`) - Full product catalog
3. **Cart** (`addToCart.html`) - Shopping cart with checkout
4. **About** (`about.html`) - About the store
5. **Contact** (`contact.html`) - Contact information

## 📊 Technologies Breakdown

- **HTML**: 56.6%
- **CSS**: 25.3%
- **JavaScript**: 18.1%

## 🔧 Vite Configuration

Custom Rollup configuration for multi-page setup:
```javascript
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        cart: resolve(__dirname, 'addToCart.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
```

## 🌟 Features Highlights

✅ **No Framework Dependencies** - Pure Vanilla JavaScript  
✅ **Modular Architecture** - Separated concerns with utility functions  
✅ **Local Storage Persistence** - Cart data saved across sessions  
✅ **Duplicate Prevention** - Smart cart item management  
✅ **Stock Validation** - Prevents over-ordering  
✅ **Responsive Design** - Works on all devices  
✅ **Toast Notifications** - User-friendly feedback  
✅ **Price Formatting** - Proper currency display (₹)

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🚀 Deployment

This project is deployed on GitHub Pages. Any push to the main branch automatically triggers deployment.

**Live URL**: `https://deepanshu-singh22.github.io/e-commerce-website/`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Project Details

- **Initial Commit**: E COMMERCE WEBSITE
- **Last Updated**: 2 months ago
- **Repository**: [deepanshu-singh22/e-commerce-website](https://github.com/deepanshu-singh22/e-commerce-website)

## 👨‍💻 Author

## 👨‍💻 Author

**Deepanshu Singh**
- GitHub: [@deepanshu-singh22](https://github.com/deepanshu-singh22)
- LinkedIn: [Deepanshu Singh](https://www.linkedin.com/in/deepanshu-singh-6748b22ba)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Project structure inspired by modern e-commerce best practices
- Built with ❤️ using Vanilla JavaScript and Vite
- Thanks to all contributors and supporters

---

⭐ If you found this project helpful, please give it a star on GitHub!

**Made with 💻 and ☕ by Deepanshu Singh**
