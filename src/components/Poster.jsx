
// The passed properties are coming here as one object
const Poster = ({title="Default Title", subtitle="Default Subtitle"}) => {
    return (
        <section className="bg-indigo-700 py-20 mb-4" key="card">
            <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
            >
            <div className="text-center">
                <h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
                >
                {title}
                </h1>
                <p className="text-xl text-white my-4">
                {subtitle}
                </p>
            </div>
            </div>
        </section>
    )
}

export default Poster