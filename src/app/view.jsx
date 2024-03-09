import Image from 'next/image'
import Link from 'next/link'

const HomeView = () => {
  return (
    <>
      <div className=" pt-36">
        <div className="container">
          <div className=" flex flex-wrap">
            <div className=" w-full self-center px-4 lg:w-1/2">
              <h1 className=" text-base font-semibold text-primary md:text-xl lg:text-2xl">
                Hello I&apos;m
                <span className=" mt-1 block text-4xl font-bold text-dark lg:text-5xl">
                  Hafizh Khairuddin
                </span>
              </h1>
              <h2 className=" mb-8 text-lg font-medium text-secondary lg:text-2xl">
                Full Stack Developer
              </h2>
              <Link
                href="https://drive.google.com/file/d/1NLqFNyM2SGpUkzXh2ofacc37aGilx5eB/view?usp=share_link"
                target="_blank"
                className="flex w-fit items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="mr-2 w-6"
                  viewBox="0 0 16 16">
                  <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>
                <span>Download CV</span>
              </Link>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:right-0 lg:mt-9">
                <Image
                  src={'/hafizh.png'}
                  width={500}
                  height={500}
                  alt="image"
                  className="relative z-10 mx-auto max-w-full"
                />
                <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#0891b2"
                      d="M57.1,-23.9C63.6,1.4,51.3,27.6,32.3,40.5C13.2,53.5,-12.7,53.2,-31.5,40.2C-50.4,27.3,-62.4,1.6,-56,-23.7C-49.5,-49,-24.8,-73.8,0.3,-73.9C25.3,-74,50.6,-49.3,57.1,-23.9Z"
                      transform="translate(100 100) scale(1.2)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeView
