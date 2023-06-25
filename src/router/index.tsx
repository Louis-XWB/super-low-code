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
