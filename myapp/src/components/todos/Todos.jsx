import React, {Component} from 'react'

class Todos extends Component {
  constructor() {
    super()
    this.state = {
      todos : [
        {id : 1, description : "Finish OSPI", done : false, targetDate : new Date()},
        {id : 2, description : "Finish ads version 1", done : false, targetDate : new Date()},
        {id : 3, description : "Get funding for my startup", done : true, targetDate : new Date()},
      ]
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <table className='table'>
            <thead>
              <tr>
                <th>description</th>
                <th>isFinished</th>
                <th>targetDate</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.todos.map(todo =>
                  <tr key={todo.id}>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toString()}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default Todos
