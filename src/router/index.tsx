import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import ManagerLayout from '../layouts/ManagerLayout'
import QuestionLayout from '../layouts/QuestionLayout'
import NotFound from '../pages/others/NotFound'
import Home from '../pages/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import List from '../pages/manager/List'
import Edit from '../pages/question/Edit'
import Stat from '../pages/question/Stat'
import Star from '../pages/manager/Star'
import Trash from '../pages/manager/Trash'
import RoadMap from '../pages/quiz/RoadMap'
import Concept from '../pages/quiz/Concept'
import Quiz from '../pages/quiz/Quiz'
import Concept2 from '../pages/quiz/Concept2'
import Quiz2 from '../pages/quiz/Quiz2'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'manager',
        element: <ManagerLayout />,
        children: [
          {
            path: 'list',
            element: <List />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },
      {
        path: 'roadmap',
        element: <RoadMap />,
      },
      {
        path: 'concept',
        element: <Concept />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
      {
        path: 'concept2',
        element: <Concept2 />,
      },
      {
        path: 'quiz2',
        element: <Quiz2 />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />,
      },
      {
        path: 'stat/:id',
        element: <Stat />,
      },
    ],
  },
])

export default routes

// ------------------------------
export const HOME_PATHNAME = '/'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGER_PATHNAME = '/manager'
export const MANAGER_LIST_PATHNAME = '/manager/list'
export const MANAGER_STAR_PATHNAME = '/manager/star'
export const MANAGER_TRASH_PATHNAME = '/manager/trash'
export const QUESTION_PATHNAME = '/question'
export const QUESTION_EDIT_PATHNAME = '/question/edit'
export const QUESTION_STAT_PATHNAME = '/question/stat'
export const NOT_FOUND_PATHNAME = '*'
