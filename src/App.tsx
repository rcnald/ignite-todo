import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { Task } from './components/ui/task'

export interface TaskProps {
  name: string
  isDone: boolean
  id: number
}

export function App() {
  const [tasks, setTasks] = useState<Array<TaskProps>>([])
  const [newTask, setNewTask] = useState('')

  const tasksCount = tasks.length
  const completedTaskCount = tasks.filter((task) => task.isDone === true).length
  const currentId = useRef(0)

  const handleNewTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handleNewTaskSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTasks([
      ...tasks,
      { name: newTask, isDone: false, id: currentId.current++ },
    ])
    setNewTask('')
  }

  const handleToggleCompleteTask = (id: number) => {
    const task = tasks.find((task) => task.id === id)
    if (task) {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) return { ...task, isDone: !task?.isDone }
        return task
      })
      setTasks(updatedTasks)
    }
  }

  const handleDeleteTask = (id: number) => {
    const tasksWithOutDeletedOne = tasks.filter((task) => task.id !== id)
    setTasks(tasksWithOutDeletedOne)
  }

  return (
    <div className="grid grid-rows-[auto_30px_1fr]">
      <header className="col-span-full row-start-1 row-end-3 flex justify-center bg-gray-700 py-16">
        <div className="flex items-center gap-3">
          <img className="h-fit" src="/rocket.svg" alt="rocket" />
          <span className="text-[2.5rem] font-black">
            <span className="text-blue-default">to</span>
            <span className="text-purple-dark">do</span>
          </span>
        </div>
      </header>
      <main className="col-span-full row-start-2 row-end-4 flex w-full flex-col items-center gap-16">
        <form
          className="flex w-full max-w-[736px] gap-2"
          onSubmit={handleNewTaskSubmit}
        >
          <input
            className="w-full rounded-lg bg-gray-500 p-4 text-base text-gray-100 outline outline-[1px] outline-gray-700 placeholder:text-gray-300 focus:outline-purple-dark"
            placeholder="Adicione uma nova tarefa"
            type="text"
            value={newTask}
            onChange={handleNewTaskChange}
          />
          <button
            className="tex-sm flex items-center gap-2 rounded-lg bg-blue-dark p-4 font-bold leading-3 text-gray-100 hover:bg-blue-default"
            type="submit"
          >
            Criar
            <PlusCircle size={16} weight="bold" />
          </button>
        </form>
        <div className="flex w-full max-w-[736px] flex-col gap-6">
          <div className="flex justify-between">
            <span
              className="flex items-center gap-2 text-sm font-bold text-blue-default after:rounded-full after:bg-gray-400 after:px-2 after:py-0.5 after:text-xs after:font-bold after:leading-3 after:text-gray-200 after:content-[attr(data-count)]"
              data-count={tasksCount}
            >
              Tarefas criadas
            </span>
            <span
              className="flex items-center gap-2 text-sm font-bold text-purple-default after:rounded-full after:bg-gray-400 after:px-2 after:py-0.5 after:text-xs after:font-bold after:leading-3 after:text-gray-200 after:content-[attr(data-check-count)'_de_'attr(data-count)]"
              data-count={tasksCount}
              data-check-count={completedTaskCount}
            >
              Concluídas
            </span>
          </div>
          <ul className="flex flex-col gap-3 rounded-lg">
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  name={task.name}
                  isDone={task.isDone}
                  onToggle={() => handleToggleCompleteTask(task.id)}
                  onDelete={() => handleDeleteTask(task.id)}
                  id={task.id}
                />
              )
            })}
          </ul>
        </div>
      </main>
    </div>
  )
}
