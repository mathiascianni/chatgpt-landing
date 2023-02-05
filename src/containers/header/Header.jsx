import "./header.css";
import polygonFace from "../../assets/polygon-face.webp";

const Header = () => {
    return (
        <header>
            <div className="section-padding text-white">
                <div className="flex-container">
                    <div className="flex-container-column header-content fade fade-left">
                        <h1 className="fs-header mb-2_5">ChatGPT: Optimizing language models for dialogue</h1>
                        <p className="mb-2">We are excited to introduce ChatGPT to get users feedback and learn about its strengths and weaknesses. During the research preview, usage of ChatGPT is free. Try it now at <a href="https://chat.openai.com/chat" target="_blank" className="text-link">chat.openai.com.</a></p>
                        <div className="email-container">
                            <label htmlFor="email" className="visually-hidden">Your email</label>
                            <input type="email" placeholder="example@mail.com" name="email" id="name" className="email-input transition" />
                            <button type="button" className="email-button transition">Get Started</button>
                        </div>
                    </div>
                    <div className="header-img-container">
                        <img src={polygonFace} alt="Girl face made with polygons" className="img-fluid fade fade-right" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
