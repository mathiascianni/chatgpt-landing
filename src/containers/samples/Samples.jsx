import Sample from "../../components/sample/Sample";
import "./samples.css";

const Samples = () => {
    return (
        <section className="text-white" id="samples">
            <div className="main-container samples-title-container fade fade-up">
                <h2 className="subtitle">ChatGPT Samples</h2>
                <p className="mb-2_5 text-font">In the following sample, ChatGPT provides responses to follow-up instructions.</p>
            </div>
            <div className="samples">
                <Sample color="user" from="User">help me write a short note to introduce myself to my neighbor</Sample>
                <Sample color="ai" from="ChatGPT"><p>Hi there,</p>
                    <p>My name is [Your Name] and I just moved in next door. I wanted to reach out and introduce myself. I’m looking forward to getting to know you and the neighborhood. If you ever need anything or just want to chat, please don’t hesitate to stop by or give me a call.</p>
                    <p>Best,</p>
                    <p>[Your Name]</p>
                </Sample>
                <Sample color="user" from="User">can you make it more formal?</Sample>
                <Sample color="ai" from="ChatGPT"><p>Dear Neighbor,</p>
                    <p>I am writing to introduce myself. My name is [Your Name] and I have recently moved in next door. I wanted to take a moment to reach out and say hello. I am looking forward to getting to know you and the neighborhood.</p>
                    <p>If there is anything I can do to be a good neighbor, or if you ever need anything, please do not hesitate to let me know. I am happy to help in any way that I can.</p>
                    <p>Sincerely,</p>
                    <p>[Your Name]</p>
                </Sample>
                <Sample color="user" from="User">can you send it for me?</Sample>
                <Sample color="ai" from="ChatGPT"><p>I’m sorry, but I am a text-based AI assistant and do not have the ability to send a physical letter for you. I can only provide suggestions and advice on what to write. It is up to you to take that advice and send the letter yourself.</p></Sample>
            </div>
        </section>
    );
}

export default Samples;
