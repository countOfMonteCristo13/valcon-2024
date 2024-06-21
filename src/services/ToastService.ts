import toast from "react-hot-toast"
import { vars } from "../styles/vars.css";

export enum ToastType {
    Success = 'success',
    Error = 'error',
  }

const toastStyle = {
    background: vars.colors.secondary,
    border: `2px solid ${vars.colors.primary}`,
    color: vars.colors.primary,
    padding: '1rem'
  }

export const handleToast = (type:ToastType,message:string,duration:number) => {
    switch(type){
        case 'success':
            return toast.success(message,{duration, style:toastStyle});
        case 'error':
            return toast.error(message,{duration, style:toastStyle});
    }
}