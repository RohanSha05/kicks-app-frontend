"use client";

import { MoveUpRight } from "lucide-react";
import { useCategories } from "@/context/CategoriesProvider";

const Categories = () => {
	const { categories, loading, error } = useCategories();

	if (loading) {
		return (
			<div className="bg-black py-7 px-6">
				<div className="flex justify-between">
					<h1 className="uppercase text-7xl font-bold text-white">
						Categories
					</h1>
				</div>
				<div className="flex justify-center items-center py-20">
					<span className="loading loading-spinner loading-lg text-white"></span>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="bg-black py-7 px-6">
				<div className="flex justify-between">
					<h1 className="uppercase text-7xl font-bold text-white">
						Categories
					</h1>
				</div>
				<div className="alert alert-error mt-4">
					<span>{error}</span>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-black py-7 px-6">
			<div className="flex justify-between">
				<h1 className="uppercase text-7xl font-bold text-white">Categories</h1>
				<div className="join flex">
					<button className="join-item btn mx-2 bg-white text-black border-0">
						«
					</button>
					<button className="join-item btn mx-2 bg-white text-black border-0">
						»
					</button>
				</div>
			</div>
			<div className="flex overflow-x-auto">
				{categories.map((category, index) => (
					<div
						key={category.id}
						className={`card  rounded-none relative w-[690px] h-[600px] overflow-hidden bg-base-100 shadow-sm flex-shrink-0 ${
							index === 0 ? "rounded-tl-[64px]" : ""
						}`}
					>
						<figure className="h-full w-full">
							<img
								src={category.image}
								alt={category.name}
								className="h-full w-full object-cover"
							/>
						</figure>
						<div className="card-body absolute -bottom-4 left-0 right-0 text-white">
							<div className="flex justify-between">
								<h2 className="card-title uppercase text-2xl">
									{category.name}
								</h2>
								<div className="card-actions justify-end">
									<button className="btn btn-neutral">
										<MoveUpRight />
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Categories;
