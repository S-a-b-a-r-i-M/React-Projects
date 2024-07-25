

const PrimaryButton = ({children}) => (
  <button className='bg-gradient-to-r from-orange-500 to-orange-800 border-orange-900 
                     rounded-md p-2'>
    {children}
  </button>
)

const SecondaryButton = ({children}) => (
  <button className='border border-neutral-200 rounded-md px-4 py-2'>
    {children}
  </button>
)

export {PrimaryButton, SecondaryButton}