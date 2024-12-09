import Image from "next/image";
import ShopImage from "@/app/assests/shophero.png";
import React from "react";

export default function ShopHero() {
  // Define product interface
  interface Product {
    title: string;
    price: string;
    age: number;
    imageUrl: string;
    description: string;
  }

  // Product data array
  const products: Product[] = [
    {
      title: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      imageUrl: "https://via.placeholder.com/150",
      description: "Stylish cafe chair",
    },
    {
      title: "Jane Smith",
      price: "Rp 2.500.000",
      age: 25,
      imageUrl: "https://via.placeholder.com/150",
      description: "Creative designer crafting stunning visuals.",
    },
    {
      title: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      imageUrl: "https://via.placeholder.com/150",
      description: "Backend systems specialist.",
    },
  ];

  return (
    <section className="shop-hero">
      {/* Hero Section */}
      <div className="shop-banner">
        <Image src={ShopImage} alt="Shop Hero Banner" className="hero-image" />
        <div className="hero-content">
          <h1 className="hero-title">Welcome to the Shop</h1>
          <p className="hero-breadcrumb">
            <span className="breadcrumb-home">Home</span> / Shop
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product, idx) => (
          <div key={idx} className="product-card">
            <img
              src={product.imageUrl}
              alt={`${product.title} image`}
              className="product-image"
            />
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
}
