import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import './InputFormField.css'

type InputFormFieldProps = {
    id: string
    label?: string;
    inputType?: HTMLInputTypeAttribute;
    placeholder?: string;
    value:string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}


const InputFormField = ({id,label,inputType = 'text',placeholder,value,onChange}: InputFormFieldProps) => {
  return (
    <div className='input-form-field'>
      {
        label &&
        <label className='input-form-field__label' htmlFor={id}>
            {label}
        </label>
      }
        <input className='input-form-field__input' id={id} type={inputType} name={id} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}

export default InputFormField
