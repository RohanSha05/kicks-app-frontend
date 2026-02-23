"use client";

import { useProducts } from "@/context/ProductsProvider";
import Product from "./Product";

const Products = () => {
    const { products, loading, error } = useProducts();

    return (
        <div className="my-12">
            <div className="relative flex justify-between">
            <h1 className="uppercase products-title">don't miss out new drops</h1>
            <div className="absolute bottom-0 right-0">
                <button className="uppercase btn btn-active hero-shop-button">shop new drops</button>
            </div>
        </div>
        <div className="my-6">
            {loading && <div>Loading...</div>}
            {!loading && error && <div>{error}</div>}
            {!loading && !error && products.length === 0 && (
                <div>No products available.</div>
            )}
            {!loading && !error && (
                <div className="flex flex-wrap gap-6">
                    {products.slice(0,4).map((product) => (
                        <Product
                            key={product.id}
                            name={product.title}
                            price={product.price}
                            imageUrl={product.images?.[0] || "/assets/image/shoe_1.png"}
                        />
                    ))}
                </div>
            )}
        </div>
        </div>
    );
};

export default Products;