import { delay, http, HttpResponse } from 'msw'

import type { Todo, TodoCreateDto } from '@/shared/api/todos/types'
import { throwNotFound } from '../utils'

const URLS = {
  index: '/api/todos',
  create: '/api/todos',
  getById: '/api/todos/:id',
  update: '/api/todos/:id',
  delete: '/api/todos/:id',
}

const TODOS: Todo[] = [
  {
    id: 1,
    title: 'Frozen 1',
    description: 'foo',
  },
  {
    id: 2,
    title: 'Frozen 2',
    description: 'foo',
  },
  {
    id: 3,
    title: 'Frozen 3',
    description: 'foo',
  },
]

export const handlers = [
  http.get(URLS.index, async () => {
    await delay()

    return HttpResponse.json(TODOS)
  }),

  http.post(URLS.create, async ({ request }) => {
    await delay()

    const createdTodo = (await request.json()) as TodoCreateDto
    const nextId = Math.max(...TODOS.map((todo) => todo.id)) + 1

    Object.assign(createdTodo, { id: nextId })
    TODOS.push(createdTodo as Todo)

    return HttpResponse.json(createdTodo)
  }),

  http.get(URLS.getById, async ({ params }) => {
    await delay()

    const { id } = params
    const todo = TODOS.find((todo) => todo.id === Number(id))

    return HttpResponse.json(todo)
  }),

  http.put(URLS.update, async ({ params, request }) => {
    await delay()

    const updatedTodo = (await request.json()) as Todo
    const { id } = params
    const todo = TODOS.find((todo) => todo.id === Number(id))

    if (!todo) {
      throwNotFound()
    }

    Object.assign(todo!, updatedTodo)

    return HttpResponse.json(todo)
  }),
  http.delete(URLS.delete, async ({ params }) => {
    await delay()

    const { id } = params
    const todo = TODOS.find((todo) => todo.id === Number(id))

    if (!todo) {
      throwNotFound()
    }

    TODOS.splice(TODOS.indexOf(todo!), 1)

    return HttpResponse.json(TODOS)
  }),
]
