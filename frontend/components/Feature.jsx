// components/Feature.jsx
export default function Feature({ title, text }) {
    return (
        <div className="mb-6">
            <h3 className="text-2xl font-title mb-2">{title}</h3>
            <p>{text}</p>
        </div>
    );
}
