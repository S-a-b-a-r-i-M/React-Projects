import HomeCard from "../components/HomeCard"
import JobLists from "../components/JobLists"
import Poster from "../components/Poster"
import ViewAllJobs from "../components/ViewAllJobs"

const HomePage = () => {
    return (
    <>
        <Poster 
         title="Become a React Dev"
         subtitle="find the react job that fits your skill set"
        />
        <HomeCard/>
        <JobLists/>
        <ViewAllJobs/>
    </>
    )
}

export default HomePage