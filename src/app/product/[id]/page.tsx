"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { ChevronLeft, Heart } from "lucide-react";
import { useProducts } from "@/context/ProductsProvider";
import Product from "@/components/ui/modules/Product";

const prod1 = "/assets/image/prod1.png";
const prod2 = "/assets/image/prod2.png";
const prod3 = "/assets/image/prod3.png";
const prod4 = "/assets/image/prod4.png";

type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	images: string[];
	category: {
		id: number;
		name: string;
		image: string;
	};
};

export default function ProductDetailsPage() {
	const params = useParams();
	const [product, setProduct] = useState<Product | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const {
		products,
		loading: productsLoading,
		error: productsError,
	} = useProducts();

	useEffect(() => {
		async function fetchProduct() {
			try {
				const response = await axios.get<Product>(
					`https://api.escuelajs.co/api/v1/products/${params.id}`,
				);
				setProduct(response.data);
				setError(null);
			} catch (err) {
				setError("Failed to load product");
				console.error(err);
			} finally {
				setLoading(false);
			}
		}

		if (params.id) {
			fetchProduct();
		}
	}, [params.id]);

	if (loading) {
		return (
			<div className="flex justify-center items-center min-h-screen">
				<span className="loading loading-spinner loading-lg"></span>
			</div>
		);
	}

	if (error || !product) {
		return (
			<div className="flex flex-col justify-center items-center min-h-screen">
				<p className="text-xl text-error mb-4">
					{error || "Product not found"}
				</p>
				<Link href="/" className="btn btn-primary">
					Back to Home
				</Link>
			</div>
		);
	}

	return (
		<div className="container mx-auto w-[1320px]">
			<Link href="/" className="btn btn-ghost mb-6">
				<ChevronLeft className="w-5 h-5" />
				Back to Products
			</Link>

			<div className="grid grid-cols-12 gap-6">
				{/* Image Gallery */}
				<div className="col-span-8 grid grid-cols-2 gap-4">
					<img
						src={prod1}
						alt=""
						className="w-[429px] h-[510px] rounded-xl object-cover"
					/>
					<img
						src={prod2}
						alt=""
						className="w-[429px] h-[510px] rounded-xl object-cover"
					/>
					<img
						src={prod3}
						alt=""
						className="w-[429px] h-[510px] rounded-xl object-cover"
					/>
					<img
						src={prod4}
						alt=""
						className="w-[429px] h-[510px] rounded-xl object-cover"
					/>
				</div>

				{/* Product Info */}
				<div className="col-span-4 space-y-6 bg-background">
					<div className="space-y-3">
						<button className="btn btn-primary rounded-xl btn-sm uppercase">
							New Release
						</button>
						<h1 className="text-3xl font-bold leading-tight">
							ADIDAS 4DFWD X PARLEY RUNNING SHOES
						</h1>
						<p className="text-2xl font-semibold text-blue-600">$125.00</p>
					</div>

					<div className="space-y-3">
						<p className="text-sm uppercase text-black font-semibold text-base-content/60">
							Color
						</p>
						<div className="flex gap-3">
							<span className="w-7 h-7 rounded-full bg-slate-800 ring-2 ring-offset-2 ring-base-200"></span>
							<span className="w-7 h-7 rounded-full bg-green-700 ring-2 ring-offset-2 ring-base-200"></span>
						</div>
					</div>

					<div className="space-y-3">
						<div className="flex items-center justify-between">
							<p className="text-sm uppercase text-black text-base-content/60">
								Size
							</p>
							<button className="link link-hover underline text-sm">
								Size chart
							</button>
						</div>
						<div className="grid grid-cols-5 gap-2">
							{["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"].map(
								(size) => (
									<button
										key={size}
										className="btn btn-outline h-12 border-none bg-white"
									>
										{size}
									</button>
								),
							)}
						</div>
					</div>

					<div className="flex gap-3">
						<button className="btn btn-neutral flex-1 uppercase">
							Add to cart
						</button>
						<button
							className="btn btn-outline w-14 bg-black text-white"
							aria-label="Add to wishlist"
						>
							<Heart className="h-5 w-5" />
						</button>
					</div>
					<button className="btn btn-primary text-white w-full uppercase">
						Buy it now
					</button>

					<div className="divider"></div>

					<div className="space-y-3 text-sm text-base-content/80 text-black">
						<h2 className="text-base font-semibold uppercase">
							About the product
						</h2>
						<p>Shadow Navy / Army Green</p>
						<p>
							This product is excluded from all promotional discounts and
							offers.
						</p>
						<p>
							Pay over time in interest-free installments with Affirm, Klarna or
							Afterpay. Join adiClub to get unlimited free standard shipping,
							returns, &amp; exchanges.
						</p>
					</div>
				</div>
			</div>
			<div>
				<div className="flex justify-between mt-10">
					<h1 className=" font-bold text-4xl">You may also like</h1>
					<div className="join flex">
						<button className="join-item btn mx-2 bg-black text-white border-0">
							«
						</button>
						<button className="join-item btn mx-2 bg-black text-white border-0">
							»
						</button>
					</div>
				</div>
				<div className="my-6">
					{productsLoading && <div>Loading...</div>}
					{!productsLoading && productsError && <div>{productsError}</div>}
					{!productsLoading && !productsError && products.length === 0 && (
						<div>No products available.</div>
					)}
					{!productsLoading && !productsError && (
						<div>
							<div className="flex flex-wrap gap-6">
								{products.slice(0, 4).map((product) => (
									<Product
										key={product.id}
										id={product.id}
										name={product.title}
										price={product.price}
										imageUrl={product.images?.[0] || "/assets/image/shoe_1.png"}
									/>
								))}
							</div>
							<div
								className="flex justify-center mt-6 gap-2"
								aria-label="Slider position"
							>
								<span className="h-2 w-8 rounded-full bg-black"></span>
								<span className="h-2 w-2 rounded-full bg-black/30"></span>
								<span className="h-2 w-2 rounded-full bg-black/30"></span>
								<span className="h-2 w-2 rounded-full bg-black/30"></span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
