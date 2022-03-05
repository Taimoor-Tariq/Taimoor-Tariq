import AboutMe from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Page = () => {
    return (
        <>
            <Header />
            <AboutMe />
            <Skills />
            <Projects />

            <Footer />
        </>
    )
}

Page.getInitialProps = async (ctx) => {
    return {
        title: "Taimoor Tariq"
    }
}

export default Page;