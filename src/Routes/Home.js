import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import HeroImg from "../Assets/hero.png"
import Introduction from "../Components/Introduction";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        heroName="hero"
        heroImage={HeroImg}
        title="Lerancy"
        text="Explore the web with confidence"
        />
        <Introduction/>
        </>
    )
}

export default Home;