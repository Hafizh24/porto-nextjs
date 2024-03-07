import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className=" absolute left-0 top-0 z-10 flex w-full items-center bg-transparent">
        <div className=" container">
          <div className=" relative flex items-center justify-between">
            <div className=" px-4">
              <Link
                href={'/'}
                className=" block py-6 text-lg font-bold uppercase text-primary"
              >
                HafizhKh
              </Link>
            </div>
            <div className=" flex items-center px-4">
              <button></button>
              <nav className=" absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none ">
                <ul className=" block lg:flex">
                  <li className="group">
                    <Link
                      href={'/'}
                      className=" mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href={'/about'}
                      className=" mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                    >
                      About Me
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href={'/portofolio'}
                      className=" mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                    >
                      Portofolio
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href={'/skills'}
                      className=" mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                    >
                      Skills
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href={'/blog'}
                      className=" mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href={'/contact'}
                      className=" mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
