import { About, Methods, Features, Footer, Header, Try } from "./containers";
import { NavBar } from "./components";
import { useEffect } from "react";

import "./App.css";
import Limitations from "./containers/limitations/Limitations";
import WhatIs from "./containers/whatis/WhatIs";
import useObserver from "./hooks/useObserver";

const App = () => {
    const [observer, setElements, entries] = useObserver({
        threshold: 0,
        root: null,
    });

    useEffect(() => {
        const fadeElements = document.querySelectorAll(".fade");
        setElements(fadeElements);
    }, [setElements]);

    useEffect(() => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                const entryElement = entry.target;
                if(entryElement.classList.contains("fade-up")) entryElement.classList.add("animate__animated","animate__fadeInUp");
                if(entryElement.classList.contains("fade-right")) entryElement.classList.add("animate__animated","animate__fadeInRight");
                if(entryElement.classList.contains("fade-left")) entryElement.classList.add("animate__animated","animate__fadeInLeft");
                observer.unobserve(entryElement);
            }
        })
    }, [entries, observer]);

    return (
        <div className="App" id="home">
            <div className="bg-gradient header-banner">
                <NavBar />
                <Header />
            </div>
            <main>
                <WhatIs />
                <Features />
                <Methods />
                <About />
                <Limitations />
                <Try />
            </main>
            <Footer />
        </div>
    );
}

export default App;