import Card from '../components/Card';

function Home({ addToCart }) {
  const featuredItems = [
    {
      id: 1,
      title: 'Chó Phóc',
      image: '/image/phoc.jpg',
      price: '$15.00',
      isProduct: true,
    },
    {
      id: 2,
      title: 'Chó Husky',
      image: '/image/husky.jpg',
      price: '$10.00',
      isProduct: true,
    },
  ];

  return (
    <main className="main-content">
      <div className="container">
        <div className="banner-container">
          <img
            src="/image/banner1.jpg"
            alt="Banner 1"
            className="banner"
          />
          <img
            src="/image/banner2.jpg"
            alt="Banner 2"
            className="banner"
          />
        </div>
       
        <div className="grid">
          {featuredItems.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              addToCart={addToCart}
              isProduct={item.isProduct}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
