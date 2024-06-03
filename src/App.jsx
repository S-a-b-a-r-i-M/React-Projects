import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage,{JobLoader} from './pages/JobPage'
import AddJob from './pages/AddJob'
import EditJobPage from './pages/EditJobPage'



const App = () => {

  // add a job 
  async function addJob(newJob)  {
    let res = await fetch(
          "http://localhost:5000/jobs",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newJob)
          }
      ) 
    let result = await res.json()
  }

  //delete a job
  async function deleteJob(jobId){
    let res = await fetch(
      `http://localhost:5000/jobs/${jobId}`,
      {
        method: "DELETE",
      }
    )
    let result = await res.json()
    console.log("delete job", jobId, !(result));
  }


  //update a job
  async function updateJob(job){
    let res = await fetch(
      `http://localhost:5000/jobs/${job.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
      }
    )
    console.log("update job", job.id, res);
  }


  const router = createBrowserRouter(
      createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={JobLoader}/> {/*dynamic param api*/}
        <Route path="/job/edit/:id" element={<EditJobPage updateJob={updateJob}/>} loader={JobLoader}/>
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob}/>} />
        <Route path="*" element={<NotFoundPage/>}/>  
      </Route>
      
    )
  )

  return <RouterProvider router={router}/>
}

export default App

/* Docs
1.index:
  The index prop in a <Route> component from React Router is used to specify the default child route to render when the parent route path matches exactly.
In other words, if you have a parent route like /dashboard and you want a specific component to render when the URL is exactly /dashboard (without any additional path segments),
you can use <Route index element={<SomeComponent />} /> to define that default child route.


 */