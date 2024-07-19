export default function TextInput({ title, name, values, placeholder = `Enter ${title}`, ...props }) {
    return (
        <>
            <label>{title}</label>
            <input
                name={name}
                id={name}
                value={values[name]}
                type="text"
                className="input-box"
                placeholder={placeholder}
                {...props}
            />
        </>
    )
}