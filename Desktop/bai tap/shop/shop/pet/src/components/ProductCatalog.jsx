import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ProductCatalog.css';
import { useNavigate } from 'react-router-dom';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    brand: '',
    rating: '',
    inStock: false,
  });
  const [sortBy, setSortBy] = useState('newest');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from backend API
    fetch(`${process.env.REACT_APP_API_URL}/api/products`)
      .then(res => {
        if (!res.ok) {
          console.error('Failed to fetch products:', res.statusText);
          return [];
        }
        return res.json();
      })
      .then(data => {
        console.log('Products data:', data);
        setProducts(data);
        applyFiltersAndSort(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setProducts([]);
        setFilteredProducts([]);
      });
  }, []);

  const applyFiltersAndSort = (productsToFilter) => {
    let result = [...productsToFilter];

    // Filters
    if (filters.inStock) result = result.filter(p => p.inStock);
    if (filters.brand) result = result.filter(p => p.brand === filters.brand);
    if (filters.rating) result = result.filter(p => p.rating >= parseFloat(filters.rating));
    result = result.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

    // Sorting
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case 'bestseller':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'priceAsc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value === 'all' ? '' : value,
    }));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    applyFiltersAndSort(products);
  }, [filters, sortBy, products]);

  const goToProductDetail = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="product-catalog">
      <h2>Danh mục sản phẩm</h2>

      {/* Filters */}
      <div className="filters">
        <label>Giá (VNĐ): 
          <input type="range" name="priceRange" min="0" max="1000" value={filters.priceRange[1]} onChange={(e) => setFilters(prev => ({ ...prev, priceRange: [0, parseInt(e.target.value)] }))} />
          {filters.priceRange[0]} - {filters.priceRange[1]}
        </label>
        <label>Thương hiệu: 
          <select name="brand" value={filters.brand} onChange={handleFilterChange}>
            <option value="all">Tất cả</option>
            <option value="Chó">Chó</option>
            <option value="Mèo">Mèo</option>
          </select>
        </label>
        <label>Đánh giá: 
          <select name="rating" value={filters.rating} onChange={handleFilterChange}>
            <option value="all">Tất cả</option>
            <option value="4">4 sao trở lên</option>
            <option value="4.5">4.5 sao trở lên</option>
          </select>
        </label>
        <label>Còn hàng: 
          <input type="checkbox" name="inStock" checked={filters.inStock} onChange={handleFilterChange} />
        </label>
      </div>

      {/* Sorting */}
      <div className="sort">
        <label>Sắp xếp theo: 
          <select value={sortBy} onChange={handleSortChange}>
            <option value="newest">Mới nhất</option>
            <option value="bestseller">Bán chạy</option>
            <option value="priceAsc">Giá: Thấp đến Cao</option>
            <option value="priceDesc">Giá: Cao đến Thấp</option>
          </select>
        </label>
      </div>

      {/* Product list */}
      <Swiper
        className="product-list"
        spaceBetween={15}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          450: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {filteredProducts.map(product => (
          <SwiperSlide key={product.id}>
            <div className="box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye" onClick={() => goToProductDetail(product.id)}></a>
              </div>
              <div className="image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="content">
                <h3>{product.name}</h3>
                <p>Danh mục: {product.category}</p>
                <p>Thương hiệu: {product.brand}</p>
                <div className="price">{product.price} VNĐ</div>
                <p>Đánh giá: {product.rating} ★</p>
                <p>Còn hàng: {product.inStock ? 'Có' : 'Hết'}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCatalog;
