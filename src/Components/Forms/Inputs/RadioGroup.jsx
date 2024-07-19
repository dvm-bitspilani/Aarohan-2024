export default function RadioGroup({ title, children }) {
    return (
        <>
            <label>{title}</label>
            <div className="class-radio">
                {children}
            </div>
        </>
    )
}