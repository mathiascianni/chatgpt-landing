import "./try.css"

const Try = () => {
    return (
        <section className="text-white main-container fade fade-up try-section" id="try">
            <h2 className="subtitle">Try it out</h2>
            <p className="text-font">Try ChatGPT on its official website or <a href="https://openai.com" className="text-link" target="_blank">explore all the possibilities of Open AI</a></p>
            <a href="https://chat.openai.com/chat" target="_blank" className="cta-button">Let's Chat</a>
        </section>
    );
}

export default Try;
