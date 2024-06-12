import { useState } from 'react'
import Button from '../../components/button/Button'
import InputFormField from '../../components/inputFormField/InputFormField'
import { PostPropRequest } from '../../models/request/PostPropRequest'
import './AddPropForm.css'

const initialFormData = {
    toUserId: 0,
    hashtags: [],
    points: 1,
    message: '',
    gifUrl: '',  
}

const AddPropForm = () => {
    const [formData, setFormData] = useState<PostPropRequest>(initialFormData);
    const [toUser, setToUser] = useState<string>('');

    const validateInputFields = ({toUserId,hashtags,points,message}: PostPropRequest) => {
        if(!toUserId || !points || points < 1 || !message.trim()){
            return false;
        }
        return true
    }

    const handleInputsOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }
  
  return (
    <form className='add-prop-form' onSubmit={handleSubmit}>
        <InputFormField label='To:' name='toUser' value={toUser} onChange={(e)=> setToUser(e.target.value)}/>
        <InputFormField label='Message' name='message' value={formData.message} onChange={handleInputsOnChange}/>
        <InputFormField label='Points' name='points' value={formData.points} onChange={handleInputsOnChange}/>
        <Button type='submit' title='Add'/>
    </form>
  )
}

export default AddPropForm
