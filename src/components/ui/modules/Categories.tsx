const img1 = "/assets/image/product1.jpg"

const Categories = () => {
	return (
		<div className=" bg-black py-7 px-6">
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
            <div className="card relative w-96 overflow-hidden bg-base-100 shadow-sm">
              <figure className="h-full w-full">
                <img src={img1} alt="Shoes" className="h-full w-full object-cover" />
              </figure>
              <div className="card-body absolute bottom-0 left-0 right-0 text-white">
                <div className="flex justify-between">
                    <h2 className="card-title uppercase text-2xl">Card Title</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
                </div>
              </div>
            </div>
		</div>
	);
};

export default Categories;
