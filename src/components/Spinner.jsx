import ClipLoader from "react-spinners/ClipLoader";


const Spinner = ({ loading }) => {
    console.log("spinner is loading");
    return (
        <ClipLoader
        color = "blue"
        size = "150px"
        loading = {loading}
        />
    )
}

export default Spinner