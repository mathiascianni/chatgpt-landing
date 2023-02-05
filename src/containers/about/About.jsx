import { Feature } from "../../components";
import "./about.css";

const About = () => {
    const features = [
        { title: "What does ChatGPT different?", text: "We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response." },
        { title: "How does ChatGPT work?", text: "ChatGPT is fine-tuned from GPT-3.5, a language model trained to produce text. ChatGPT was optimized for dialogue by using Reinforcement Learning with Human Feedback (RLHF) – a method that uses human demonstrations to guide the model toward desired behavior." },
        { title: "Can I trust that the AI is telling me the truth?", text: "ChatGPT is not connected to the internet, and it can occasionally produce incorrect answers. It has limited knowledge of world and events after 2021 and may also occasionally produce harmful instructions or biased content." },
    ]

    return (
        <section className="about-container fade fade-up">
            <div className="faq-section faq-sec-container text-white" id="about">
                <div className="faq-container">
                    {features.map((feature, index) =>
                        <article key={index} className="text-white mb-2">
                            <Feature text={feature.text}>{feature.title}</Feature>
                        </article>
                    )}
                </div>
                <p>Read more FAQ <a href="https://help.openai.com/en/articles/6783457-chatgpt-faq" className="text-link" target="_blank">here.</a></p>
            </div>
        </section>
    );
}

export default About;
