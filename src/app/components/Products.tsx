
export default function Products() {
  // Product interface
  interface Product {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  // Product data
  const products: Product[] = [
    {
      name: "Syltherine",
      price: "RS 2.500.000",
      age: 30,
      image: "https://via.placeholder.com/150",
      description: "Stylish cafe chair",
    },
    {
      name: "Jane Smith",
      price: "RS 2.500.000",
      age: 25,
      image: "https://via.placeholder.com/150",
      description: "A creative designer crafting stunning visuals.",
    },
    {
      name: "Sam Wilson",
      price: "RS 2.500.000",
      age: 28,
      image: "https://via.placeholder.com/150",
      description: "Backend systems specialist.",
    },
    {
      name: "Syltherine Deluxe",
      price: "RS 3.000.000",
      age: 30,
      image: "https://via.placeholder.com/150",
      description: "Premium cafe chair with added comfort.",
    },
    {
      name: "Anna Taylor",
      price: "RS 2.700.000",
      age: 27,
      image: "https://via.placeholder.com/150",
      description: "Frontend developer with a passion for design.",
    },
    {
      name: "Chris Brown",
      price: "RS 2.800.000",
      age: 29,
      image: "https://via.placeholder.com/150",
      description: "Full-stack developer focused on scalable solutions.",
    },
  ];

  return (
    <section className="products-section">
      <h2 className="text-center py-4 font-bold text-3xl">Our Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={`Image of ${product.name}`}
              className="product-image"
            />
            <div className="product-details">
              <h5 className="product-name font-bold">{product.name}</h5>
              <p className="product-description">{product.description}</p>
              <p className="product-price text-[#B88E2F] font-semibold">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="show-more-btn text-[#B88E2F] py-2 px-4 border-2 border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-all">
          Show More
        </button>
      </div>

     
    </section>
  );
}

