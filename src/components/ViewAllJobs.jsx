import { Link } from "react-router-dom"


const ViewAllJobs = () =>{
    return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        to="/jobs"
        className="block bg-block text-white
                  text-center px4 px6 rounded-xl
                  hover: bg-gray-700"

      >
        View all jobs
      </Link>
    </section>
    )
}

export default ViewAllJobs