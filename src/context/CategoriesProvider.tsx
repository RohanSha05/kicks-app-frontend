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

export type Category = {
	id: number;
	name: string;
	image: string;
	slug?: string;
};

type CategoriesContextValue = {
	categories: Category[];
	loading: boolean;
	error: string | null;
};

const CategoriesContext = createContext<CategoriesContextValue | undefined>(
	undefined
);

const CategoriesProvider = ({ children }: { children: ReactNode }) => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let isMounted = true;

		async function fetchCategories() {
			try {
				const response = await axios.get(
					"https://api.escuelajs.co/api/v1/categories/"
				);
				if (isMounted) {
					let data: Category[] = [];

					// Handle different response formats
					if (Array.isArray(response.data)) {
						data = response.data;
					} else if (
						response.data &&
						typeof response.data === "object" &&
						Array.isArray(response.data.data)
					) {
						data = response.data.data;
					} else {
						console.error("Unexpected API response format:", response.data);
						setError(
							"Unexpected response format from API. Expected array or object with data array."
						);
						setCategories([]);
						setLoading(false);
						return;
					}

					setCategories(data);
					setError(
						data.length === 0 ? "No categories returned from the API." : null
					);
				}
			} catch (err) {
				if (isMounted) {
					const errorMessage =
						err instanceof Error ? err.message : "Failed to fetch categories";
					console.error("Categories fetch error:", err);
					setError(errorMessage);
					setCategories([]);
				}
			} finally {
				if (isMounted) {
					setLoading(false);
				}
			}
		}

		fetchCategories();

		return () => {
			isMounted = false;
		};
	}, []);

	const value = useMemo<CategoriesContextValue>(
		() => ({
			categories,
			loading,
			error,
		}),
		[categories, loading, error]
	);

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};

export const useCategories = () => {
	const context = useContext(CategoriesContext);

	if (context === undefined) {
		throw new Error("useCategories must be used within CategoriesProvider");
	}

	return context;
};

export default CategoriesProvider;
