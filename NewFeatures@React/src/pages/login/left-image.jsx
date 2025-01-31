import logo from "/hire10x_dark.png"
import img1 from "/img1.svg"
import img2 from "/img2.svg"

const LeftImagePage = () => {
  return (
    <div>
      <div className="h-screen bg-cover bg-center bg-custom-bg pr-6">
        {/* Content */}
        <div className="relative w-full h-full px-8 lg:px-12 flex flex-col">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-24 sm:w-32 xl:w-44 h-auto mt-10 xl:mt-[8rem] xl:ms-16 self-start"
          />

          {/* Illustrations */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <img
              src={img1}
              alt="Illustration 1"
              className="absolute bottom-0 right-3 w-7/12 z-10 hidden lg:block"
            />
            <img
              src={img2}
              alt="Illustration 2"
              className="absolute top-28 right-0 w-9/12 h-auto hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftImagePage
