export default function CustomRadio({ name, value, label, onChange, formikValue, id, setFieldValue }) {
    return (
        <>
            <input
                type="radio"
                className="input-radio"
                name={name}
                value={value}
                id={id}
                checked={formikValue === value}
                onChange={onChange}
            />
            <label
                htmlFor={id}
                onClick={() => {
                    setFieldValue(name, value)
                }}
            >
                {label}
            </label>
        </>
    )
}