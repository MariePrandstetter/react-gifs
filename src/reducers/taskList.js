// action
const ADD_TASK = 'ADD_TASK'
const MARK_AS_DONE = 'MARK_AS_DONE'

// action reducer
export const addTask = (task) => ({ type: ADD_TASK, task })
export const markTaskAsDone = (taskId) => ({ type: MARK_AS_DONE, taskId })

// default state
const defaultState = []

// reducer
export default function taskList (state = defaultState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        action.task
      ]
    case MARK_AS_DONE:
      const taskList = state.map((task) => {
        if (task.id === action.taskId) {
          return {
            ...task,
            done: !task.done
          }
        } else {
          return task
        }
      })
      return taskList
      // syntaxe raccourcie
      // return state.map(task => task.id === action.taskId
      //   ? { ...task, done: !task.done }
      //   : task
      // )

    default:
      return state
  }
}
