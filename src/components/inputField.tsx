import React, {useRef} from 'react'
import "./style.css"

interface Props {
  todo:string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void

}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      <form className='input' onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur()
        }
        }>
        <input 
          type="text" 
          value={todo}
          placeholder='Enter a task'
          className='inputBox'
          onChange= {
            (e) => setTodo(e.target.value)
          }
        />
        <button className='inputSubmit'>Go</button>
      </form>
    </div>
  )
}

export default InputField