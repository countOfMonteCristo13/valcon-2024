import './InputFormField.css'

type InputFormFieldProps = {
    id: string
    label: string;
    inputType: 'text' | 'password';
    placeholder?: string;
    value:string;
    onChange: () => void;
}


const InputFormField = ({id,label,inputType,placeholder,value,onChange}: InputFormFieldProps) => {
  return (
    <div className='input-form-field'>
        <label htmlFor={id}>
            {label}
        </label>
        <input id={id} type={inputType} name={id} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}

export default InputFormField
