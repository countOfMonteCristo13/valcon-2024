import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import { flexColumn, fullWidth, gap0_5 } from '../../styles/index.css';
import { errorBottomBorder, inputFormFieldInputStyle } from './InputFormFiled.css';

type InputFormFieldProps = {
    id?: string;
    fieldClassName?:string;
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


const InputFormField = ({id,fieldClassName ,label,inputType = 'text',placeholder,value,onChange,className, onFocus, onBlur,name, hasError = false}: InputFormFieldProps) => {
  return (
    <div className={`${fullWidth} ${flexColumn} ${gap0_5} ${fieldClassName}`}>
      {
        label &&
        <label htmlFor={id}>
            {label}
        </label>
      }
        <input 
          className={`${fullWidth} ${inputFormFieldInputStyle} ${hasError && errorBottomBorder} ${className}`} 
          id={id} type={inputType} name={name} 
          placeholder={placeholder} 
          value={value} 
          onChange={onChange} 
          onFocus={onFocus} 
          onBlur={onBlur}
          autoComplete='off'
          />
          
    </div>
  )
}

export default InputFormField