import { useState, useEffect } from 'react';
import JobList from './JobList';
import Spinner from './Spinner';

const JobLists = ({ isHome=false }) =>{
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(
        () => {
            const fetchJobs = async () =>{
                try{
                     let query = isHome ? "?_limit=3" : ""
                     let response = await fetch("http://localhost:5000/jobs"+query)
                     let result = await response.json()
                     setJobs(result)
                }
                catch(err){
                    console.log("Error on fetching jobs",err);
                }
                finally{
                    setLoading(false)
                }
            } 

            fetchJobs()
        },
        []
    )
    
    return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
             {isHome ? "Recent Jobs" : "Browse Jobs"}
            </h2>
            <div className="flex justify-center items-center w-full h-full">
                {loading && (<Spinner loading={true}/>)}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {!loading && jobs.map((job) => <JobList key={job.id} job={job}/>)}
                </div>
            </div>
        </div>
    </section>
    )
}

export default JobLists