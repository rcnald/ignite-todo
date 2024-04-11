import { Check, PlusCircle, Trash } from '@phosphor-icons/react'
import clsx from 'clsx'

export function App() {
  const isCheck = true
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
        <form className="flex w-full max-w-[736px] gap-2" action="">
          <input
            className="w-full rounded-lg bg-gray-500 p-4 text-base text-gray-100 outline outline-[1px] outline-gray-700 placeholder:text-gray-300 focus:outline-purple-dark"
            placeholder="Adicione uma nova tarefa"
            type="text"
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
              data-count={0}
            >
              Tarefas criadas
            </span>
            <span
              className="flex items-center gap-2 text-sm font-bold text-purple-default after:rounded-full after:bg-gray-400 after:px-2 after:py-0.5 after:text-xs after:font-bold after:leading-3 after:text-gray-200 after:content-[attr(data-check-count)'_de_'attr(data-count)]"
              data-count={5}
              data-check-count={2}
            >
              Concluídas
            </span>
          </div>
          <ul className="flex flex-col gap-3 rounded-lg">
            <li className="flex items-start gap-3 rounded-lg border border-solid border-gray-400 bg-gray-500 p-5">
              <label
                className="m-1 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-solid border-blue-default bg-gray-500 p-0.5 hover:mix-blend-plus-lighter has-[:checked]:border-purple-dark has-[:checked]:bg-purple-dark"
                htmlFor="id"
              >
                <input className="peer sr-only" type="checkbox" id="id" />
                <Check
                  className="hidden leading-[0] text-gray-100 peer-checked:block"
                  size={12}
                  weight="bold"
                />
              </label>
              <p
                className={clsx('text-gray-100', {
                  'line-through': isCheck,
                  'text-gray-300': isCheck,
                })}
              >
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </p>
              <button className="rounded-[4px] p-1 text-gray-300 hover:bg-gray-400 hover:text-danger">
                <Trash size={16} />
              </button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
