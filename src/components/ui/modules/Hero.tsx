const banner = '/assets/image/banner.jpg';
const product1 = '/assets/image/product1.jpg'
const product2 = '/assets/image/product2.jpg'

const Hero = () => {
    return (
        <div>
            <h1 className="hero-main-title">Do It <span className="text-blue-500">right</span></h1>
            <div className="hero-banner-container">
                <img src={banner} alt="Nike Air Max Banner" className="hero-banner" />
                <p className="hero-product-badge">Nike product of the year</p>
                <div className="hero-content">
                    <h1 className="hero-product-title">nike air max</h1>
                    
                    <p className="hero-product-description">Nike introducing the new air max for everyone's comfort</p>
                     <button className="uppercase btn btn-active hero-shop-button">Shop Now</button>
                </div>
                <div className="hero-product-images">
                    <img src={product1} alt="" className="hero-product-image" />
                    <img src={product2} alt="" className="hero-product-image" />
                </div>
            </div>
        </div>
    );
};

export default Hero;