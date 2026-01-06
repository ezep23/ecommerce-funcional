import { createBrowserRouter } from "react-router"

import { AppLayout } from './components/Layouts';
import { Home, Register, NotFound } from './pages';

export const appRouter = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: Home },
      { path: 'register', Component: Register},
      { path: '*', Component: NotFound}
    ]
  }
])