import Categories from "@/components/ui/modules/Categories";
import Hero from "@/components/ui/modules/Hero";
import Products from "@/components/ui/modules/Products";

const HomePage = () => {
	return (
		<div className="flex justify-center">
			<div className="w-[1320px]">
				<Hero />
				<Products />
				<Categories />
			</div>
		</div>
	);
};

export default HomePage;
