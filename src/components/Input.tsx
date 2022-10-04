/* eslint-disable */
import {useState} from "react"
import { addTodo } from "../feature/action"
import { useDispatch} from "react-redux"
import {AiOutlineFileAdd} from "react-icons/ai"
import { useTranslation } from "react-i18next"


const Input:React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const dispatch = useDispatch()
  const {t} = useTranslation()
  
  const handleAddTodo=():void=>{
    dispatch(addTodo(todo))
    setTodo("")
  }
    
  return (
    <div>
        <input type="text" placeholder="Add to do..." className='p-3 w-[700px] outline-black shadow-md' value={todo} onChange={e=>setTodo(e.target.value)}/>
        <button className='text-[#4dc0b5] px-3 py-2 rounded-md ml-7 bg-white border border-[#4dc0b5] border-2 hover:bg-[#4dc0b5] hover:text-white' onClick={handleAddTodo}>
          <AiOutlineFileAdd className="inline mb-1 mr-1 text-lg"/><span>{t('add')}</span></button>
    </div>
  )
}

export default Input