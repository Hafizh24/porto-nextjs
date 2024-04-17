import Link from 'next/link'

const Aboutview = () => {
  return (
    <section className="mb-10 px-8 pt-10 lg:mb-56 lg:pt-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-10 w-full px-4 lg:w-1/2">
            <h4 className="mb-3 text-lg font-bold uppercase text-dark dark:text-white lg:text-3xl">
              About Me
            </h4>
            <p className="mb-2 max-w-xl text-base font-medium leading-relaxed text-secondary lg:text-lg">
              Passionate Full-Stack Developer based in Bandung, Indonesia, with
              expertise in JavaScript (Node.js), Golang, and ReactJS. I embarked my
              coding journey in December 2021.
            </p>
            <p className="mb-2 max-w-xl text-base font-medium leading-relaxed text-secondary lg:text-lg">
              Graduated from Binar Academy Full Stack Web Development bootcamp and
              completed specialized training as a Golang backend developer at Studi
              DevSecOps.
            </p>
            <p className="max-w-xl text-base font-medium leading-relaxed text-secondary lg:text-lg">
              Fast learner, constantly seeking new skills and technologies. Eager to
              contribute to impactful projects and collaborate with dynamic teams.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="mb-4 text-2xl font-medium text-dark dark:text-white lg:pt-10 lg:text-3xl">
              Let&apos;s get in touch
            </h3>
            <p className="mb-6 text-base font-medium text-secondary lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              consequatur odit reprehenderit. Et quae corrupti animi optio modi?
            </p>
            <div className="flex items-center">
              {/* <!-- Linkedin --> */}
              <Link
                href={'https://www.linkedin.com/in/hafizh-khairuddin-597650227/'}
                target="_blank"
                className="border-slate-300 text-slate-300 mr-3 flex h-9 w-9 items-center justify-center rounded-full border hover:border-primary hover:bg-primary hover:text-white dark:border-dark dark:hover:text-dark">
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              {/* <!-- Github --> */}
              <Link
                href={'https://github.com/Hafizh24'}
                target="_blank"
                className="border-slate-300 text-slate-300 mr-3 flex h-9 w-9 items-center justify-center rounded-full border hover:border-primary hover:bg-primary hover:text-white dark:border-dark dark:hover:text-dark">
                <svg
                  width="20"
                  className="fill-current"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutview
