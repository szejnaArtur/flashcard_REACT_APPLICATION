import Hero from '../components/hero/Hero';
import Navbar from "../components/navbar/Navbar";

function Home() {

    return (
        <div>
            <Navbar/>
            <Hero heading='Flashcards App' message='Learn with us and reach your language goal.'/>
        </div>
    )

}

export default Home;