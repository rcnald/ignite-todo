import { Check, Trash } from '@phosphor-icons/react';
import clsx from 'clsx';
import { TaskProps } from '../../App';

export function Task({
  name,
  isDone,
  id,
  onToggle,
  onDelete,
}: TaskProps & { onToggle: () => void; onDelete: () => void }) {
  return (
    <li className="flex items-start gap-3 rounded-lg border border-solid border-gray-400 bg-gray-500 p-5">
      <label
        className="m-1 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-solid border-blue-default bg-gray-500 p-0.5 hover:mix-blend-plus-lighter has-[:checked]:border-purple-dark has-[:checked]:bg-purple-dark"
        htmlFor={`${id}`}
      >
        <input
          className="peer sr-only"
          type="checkbox"
          id={`${id}`}
          onChange={onToggle}
        />
        <Check
          className="hidden leading-[0] text-gray-100 peer-checked:block"
          size={12}
          weight="bold"
        />
      </label>
      <p
        className={clsx('text-gray-100', {
          'line-through': isDone,
          'text-gray-300': isDone,
        })}
      >
        {name}
      </p>
      <button
        className="ml-auto rounded-[4px] p-1 text-gray-300 hover:bg-gray-400 hover:text-danger"
        onClick={onDelete}
      >
        <Trash size={16} />
      </button>
    </li>
  )
}
