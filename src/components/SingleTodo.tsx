/* eslint-disable */
import React from 'react'
import {Todo} from "../model"
import {doneTodo, notDoneTodo, removeTodo} from "../feature/action"
import { useDispatch} from "react-redux"
import {AiOutlineFileDone} from "react-icons/ai"
import {MdRemoveDone} from "react-icons/md"
import {BsTrash} from "react-icons/bs"
import { useTranslation } from "react-i18next"


const SingleTodo:React.FC<{todo:Todo}>= ({todo}) => {
  const dispatch = useDispatch()
  const {t} = useTranslation()

  return (
    <div className='flex flex justify-between items-center w-[80%] mt-5'>
      <h3 className={`${todo.done?"text-[#38c172] line-through":""}`}>{todo.todo}</h3>
      <div>
        {
          todo.done?
            
              <button className='text-[#9babb4] px-3 py-2 rounded-md ml-7 bg-white border border-[#9babb4] border-2 hover:bg-[#9babb4] hover:text-white' onClick={()=>dispatch(notDoneTodo(todo.id))}><MdRemoveDone className="inline mb-1 mr-1 text-lg"/><span>{t('notDone')}</span></button>
            : 
           
                <button className='text-[#38c172] px-3 py-2 rounded-md ml-7 bg-white border border-[#38c172] border-2 hover:bg-[#38c172] hover:text-white ' onClick={()=>dispatch(doneTodo(todo.id))}><AiOutlineFileDone className="inline mb-1 mr-1 text-lg"/><span>{t('done')}</span></button>
           
        }
            <button className='text-[#e3342f] px-3 py-2 rounded-md ml-7 bg-white border border-[#e3342f] border-2 hover:bg-[#e3342f] hover:text-white ' onClick={()=>dispatch(removeTodo(todo.id))}><BsTrash className="inline mb-1 mr-1 text-lg"/><span>{t('remove')}</span></button>
            
      </div>
     
    </div>
  )
}

export default SingleTodo