import React from "react";

// Fake reviews data
const reviewsData = [
	{
		id: 1,
		title: "Good Quality!",
		description: "I highly recommend shopping from kicks",
		rating: 4,
		avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
		image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
	},
	{
		id: 2,
		title: "Excellent Service!",
		description: "Fast delivery and great customer support",
		rating: 5,
		avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
		image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
	},
	{
		id: 3,
		title: "Love the Design!",
		description: "Stylish and comfortable, perfect fit",
		rating: 4,
		avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
		image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
	},
];

const Reviews = () => {
	return (
		<div>
			<div className="flex justify-between py-10 px-14">
				<h1 className="uppercase text-5xl font-bold">Reviews</h1>
				<button className="btn  btn-primary uppercase">See ALl</button>
			</div>
			<div className="flex gap-4 justify-around">
				{reviewsData.map((review) => (
					<div key={review.id} className="card bg-white w-96 shadow-sm">
						<div className="card-body">
							<div className="flex justify-between items-start">
								<div className="flex-1">
									<h2 className="card-title">{review.title}</h2>
									<p className="text-sm mt-2">{review.description}</p>
									<div className="flex items-center gap-2 mt-2">
										<div className="rating rating-sm">
											{[1, 2, 3, 4, 5].map((star) => (
												<input
													key={star}
													type="radio"
													name={`rating-${review.id}`}
													className="mask mask-star-2 bg-orange-400"
													defaultChecked={star === review.rating}
												/>
											))}
										</div>
										<span className="text-sm font-semibold">{review.rating}.0</span>
									</div>
								</div>
								<div className="avatar">
									<div className="w-12 rounded-full">
										<img src={review.avatar} alt="User avatar" />
									</div>
								</div>
							</div>
						</div>
						<figure>
							<img src={review.image} alt={review.title} />
						</figure>
					</div>
				))}
			</div>
		</div>
	);
};

export default Reviews;
