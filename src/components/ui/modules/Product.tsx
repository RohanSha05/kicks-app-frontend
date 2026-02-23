import Link from "next/link";

type ProductProps = {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	badgeText?: string;
};

const Product = ({ id, name, price, imageUrl, badgeText = 'New' }: ProductProps) => {
	return (
		<div>
			<Link href={`/product/${id}`}>
				<div className="card w-[302px] h-[334px] rounded-3xl flex-row cursor-pointer hover:scale-105 transition-transform">
					<figure className="relative h-full w-full overflow-hidden border-8 rounded-3xl border-white">
						<span className="absolute left-0 top-0 z-10 rounded-tl-[20px] rounded-br-[20px] bg-blue-500 px-4 py-2 text-xs font-semibold uppercase text-white">
							{badgeText}
						</span>
						<img
							src={imageUrl}
							alt={name}
							className="h-full w-full rounded-3xl object-cover"
						/>
					</figure>
				</div>
			</Link>
			<div className="card-body w-[302px] items-center text-center p-0 bg-background">
				<h2 className="card-title text-start font-semibold m-0 p-0 my-5 text-[24px] h-8 leading-[100%] tracking-[0%]">
					{name}
				</h2>
				<div className="card-actions w-full m-0">
					<Link href={`/product/${id}`} className="w-full">
						<button className="btn btn-neutral w-full p-0 uppercase">
							View Product - <span className="text-yellow-400">${price}</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Product;
