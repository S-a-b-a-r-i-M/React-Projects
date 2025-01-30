import AsyncSelect from 'react-select/async';


function ReactAsyncSelect() {
    const defaultOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'blueberry', label: 'Blueberry' },
        { value: 'blackberry', label: 'Blackberry' },
        { value: 'pineapple', label: 'Pineapple' },
        { value: 'kiwi', label: 'Kiwi' },
        { value: 'grape', label: 'Grape' },
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
        { value: 'peach', label: 'Peach' },
    ]

    const loadOptions = (inp, callback) => {
        console.log(inp)
        setTimeout(() => {
            callback(defaultOptions.filter(({ label }) => label.includes(inp)))
        }, 1500)
    }

    return (
        <div className="h-screen flex justify-center items-start">
            <AsyncSelect
                cacheOptions
                defaultOptions
                loadOptions={loadOptions}
                className='w-72'
                isClearable
                isMulti
            />
        </div>
    )
}

export default ReactAsyncSelect