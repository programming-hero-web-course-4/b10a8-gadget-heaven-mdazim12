import BannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="relative mb-96">
            <div className=" bg-[#9538E2] min-h-[550px]">
                <div className="hero-content text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl font-bold leading-[55px] text-white">
                            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                        </h1>
                        <p className="py-6 text-white text-base">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn">Shop Now</button>
                    </div>
                </div>
            </div>

            <div className="absolute rounded-2xl -bottom-[50%] left-1/2 transform -translate-x-1/2 max-w-4xl">
                <img className="w-full rounded-3xl p-4 border-2 border-white " src={BannerImg} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;
