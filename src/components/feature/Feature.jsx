import "./feature.css";

const Feature = ({ text, children }) => {
    return (
        <>
            <h2 className="subtitle">
                {children}
            </h2>
            <p className="paragraph text-font"> {text}</p>
        </>
    );
}

export default Feature;
