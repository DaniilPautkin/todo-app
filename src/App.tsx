import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import CreateTodoContainer from './components/CreateTodo/CreateTodoContainer'
import EditTodoContainer from './components/EditTodo/EditTodoContainer'
import MainPage from './components/Main/MainPage'
import Navbar from './components/NavBar/Navbar'
import TodosContainer from './components/Todos/TodosContainer'
import store from './redux/redux-store'

const App: React.SFC = () => {
    return (
        <Router>
            <div className="mainContainer">
                <Navbar />
                <Switch>
                    <Route exact path="/" render={() => <MainPage />} />
                    <Route
                        exact
                        path="/todos"
                        render={() => <TodosContainer />}
                    />
                    <Route
                        path="/todos/add"
                        render={() => <CreateTodoContainer />}
                    />
                    <Route
                        path="/todos/edit/:id"
                        render={() => <EditTodoContainer />}
                    />
                    <Route path="*" render={() => <div>404</div>} />
                </Switch>
            </div>
        </Router>
    )
}

const TodoApp: React.SFC = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default TodoApp
