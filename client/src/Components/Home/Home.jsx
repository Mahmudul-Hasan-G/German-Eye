import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div>
           <Marquee speed={80} direction="right" gradient={true} gradientColor={[239, 23, 23]}>
                <h1 className="text-6xl mb-4 p-2">Cultural places and Weather Updates</h1>
            </Marquee>
        </div>
    );
};

export default Home;