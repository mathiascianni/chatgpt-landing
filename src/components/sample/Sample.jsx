import "./sample.css";

const Sample = ({ color, from, children }) => {
    return (
        <div className={"sample fade fade-up bg-" + color}>
            <div className="main-container">
                <p className="from">{from}</p>
                <div className="sample-text">{children}</div>
            </div>
        </div>
    );
}

export default Sample;
