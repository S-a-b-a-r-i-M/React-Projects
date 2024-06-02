import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage,{JobLoader} from './pages/JobPage'
import AddJob from './pages/AddJob'


const router = createBrowserRouter(
      createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path="/jobs/:id" element={<JobPage/>} loader={JobLoader}/>
        <Route path="/add-job" element={<AddJob/>}/>
        <Route path="*" element={<NotFoundPage/>}/>  
      </Route>
      
    )
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App

/* Docs
1.index:
  The index prop in a <Route> component from React Router is used to specify the default child route to render when the parent route path matches exactly.
In other words, if you have a parent route like /dashboard and you want a specific component to render when the URL is exactly /dashboard (without any additional path segments),
you can use <Route index element={<SomeComponent />} /> to define that default child route.


 */