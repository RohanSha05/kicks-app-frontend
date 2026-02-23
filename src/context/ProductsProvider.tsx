"use client";

import axios from "axios";
import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
	type ReactNode,
} from "react";

type ApiProduct = {
	id: number;
	title: string;
	price: number;
	images: string[];
};

type ProductsContextValue = {
	products: ApiProduct[];
	loading: boolean;
	error: string | null;
};

const ProductsContext = createContext<ProductsContextValue | undefined>(
	undefined
);

const ProductsProvider = ({ children }: { children: ReactNode }) => {
	const [products, setProducts] = useState<ApiProduct[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let isMounted = true;

		async function fetchProducts() {
			try {
				const response = await axios.get<ApiProduct[]>(
					"https://api.escuelajs.co/api/v1/products"
				);
				if (isMounted) {
					if (Array.isArray(response.data)) {
						setProducts(response.data);
						setError(
							response.data.length === 0
								? "No products returned from the API."
								: null
						);
					} else {
						setProducts([]);
						setError("Unexpected response from the products API.");
					}
				}
			} catch (caught) {
				if (isMounted) {
					const message =
						caught instanceof Error
							? caught.message
							: "Failed to fetch products.";
					setError(message);
				}
			} finally {
				if (isMounted) {
					setLoading(false);
				}
			}
		}

		fetchProducts();

		return () => {
			isMounted = false;
		};
	}, []);

	const value = useMemo(
		() => ({ products, loading, error }),
		[products, loading, error]
	);

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};

const useProducts = () => {
	const context = useContext(ProductsContext);
	if (!context) {
		throw new Error("useProducts must be used within ProductsProvider");
	}
	return context;
};

export { ProductsProvider, useProducts };
export type { ApiProduct };
