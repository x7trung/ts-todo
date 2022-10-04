/* eslint-disable */
import {useState} from "react"
import Input from "./components/Input"
import SingleTodo from "./components/SingleTodo"
import {useSelector, useDispatch} from "react-redux"
import {GrNext} from "react-icons/gr"
import {GrPrevious} from "react-icons/gr"
import i18n from "./i18n"
import { useTranslation } from "react-i18next"

export const App = () => {
  const {t} = useTranslation()
  const todoList = useSelector((state) =>state.todoStore)
  const [page, setPage] = useState<number>(1)
  const [language, setLanguage] = useState<string>("en")

  const handleLanguageChange = (e:React.FormEvent) => {
    setLanguage(e.target.value)
		i18n.changeLanguage(e.target.value);
	};

  return (
    <div className="h-screen flex justify-center items-center bg-[#e8fffe] flex-col ">
      <div>
        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Language</label>
        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-[100px]"
        value={language}
        onChange={handleLanguageChange}
         >
          <option value="en">EngLish</option>
          <option value="vn">Tiếng Việt</option>
        </select>
      </div>
  

      <div className='p-5 bg-white w-[1000px] shadow-xl flex justify-center items-center flex-col'>
      <h1 className="font-bold text-left mb-5">{t('todo')}</h1>
          <Input />
          <div className="flex justify-center items-center flex-col mt-5 w-full">
            {todoList.slice((page-1)*5,page*5).map(item=> <SingleTodo key={item.id}  todo={item} />)}
          </div>
        </div>
      <div className="mt-5"> 
        <button className='text-[#278223] px-3 py-2 rounded-md ml-7 bg-white border border-[#278223] border-2 hover:bg-[#278223] hover:text-white ' onClick={()=>setPage(pre=>pre-1)}><GrPrevious className="inline mb-1 mr-1 text-lg text-[#278223]"/><span>{t('prev')}</span></button>
        <button className='text-[#278223] px-3 py-2 rounded-md ml-7 bg-white border border-[#278223] border-2 hover:bg-[#278223] hover:text-white ' onClick={()=>setPage(pre=>pre+1)}><span>{t('next')}</span><GrNext className="inline mb-1 mr-1 text-lg text-[#278223]"/></button>
      </div>
    </div>
  
  )
}
