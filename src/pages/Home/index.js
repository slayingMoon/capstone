import About from "./About";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import WeekSpecials from "./WeekSpecials";

const Home = () => {
    return (
        <>
            <Hero />
            <WeekSpecials />
            <Testimonials />
            <About />
        </>
    );
};

export default Home;