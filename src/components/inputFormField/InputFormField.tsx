import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import './InputFormField.css'

type InputFormFieldProps = {
    id?: string
    label?: string;
    inputType?: HTMLInputTypeAttribute;
    placeholder?: string;
    value:string | number;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    className?:string;
    hasError?: boolean;
}


const InputFormField = ({id,label,inputType = 'text',placeholder,value,onChange,className, onFocus, onBlur,name, hasError = false}: InputFormFieldProps) => {
  return (
    <div className='input-form-field'>
      {
        label &&
        <label className='input-form-field__label' htmlFor={id}>
            {label}
        </label>
      }
        <input 
          className={`input-form-field__input ${hasError && 'red-border-bottom'} ${className}`} 
          id={id} type={inputType} name={name} 
          placeholder={placeholder} 
          value={value} 
          onChange={onChange} 
          onFocus={onFocus} 
          onBlur={onBlur}/>
    </div>
  )
}

export default InputFormField