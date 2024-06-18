import toast from "react-hot-toast"

export enum ToastType {
    Success = 'success',
    Error = 'error',
  }

const toastStyle = {
    background: '#3a3a3a',
    border: '2px solid #ffae00',
    color: '#ffae00',
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