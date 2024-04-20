import Image from 'next/image'
import Link from 'next/link'

const CustomCard = (props) => {
  const {
    title,
    description,
    image,
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    url_preview,
    url_github
  } = props
  return (
    <div className="mx-3 my-3 flex w-full flex-col justify-center rounded-xl bg-white p-4 shadow dark:bg-dark lg:w-1/2 xl:w-2/5">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="w-full rounded-lg drop-shadow hover:scale-105"
      />
      <h3 className="mb-3 mt-5 text-xl font-semibold text-dark dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-base font-medium text-secondary">{description}</p>
      <div className="flex justify-between">
        <div className="flex gap-4 md:gap-6">
          {icon1 && icon1}
          {icon2 && icon2}
          {icon3 && icon3}
          {icon4 && icon4}
          {icon5 && icon5}
        </div>
        <div className="flex items-center">
          <Link
            href={url_github}
            aria-disabled={url_github === '' ? true : false}
            tabIndex={url_github === '' ? -1 : undefined}
            target="_blank"
            className={`rounded-full p-2 ${url_github !== '' ? 'transition-all hover:bg-primary' : 'pointer-events-none opacity-60'}`}>
            <svg
              className="w-6 fill-current text-dark dark:text-white lg:w-7"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Link>
          <Link
            href={url_preview}
            aria-disabled={url_preview === '' ? true : false}
            tabIndex={url_preview === '' ? -1 : undefined}
            target="_blank"
            className={`rounded-full p-2  ${url_preview !== '' ? 'transition-all hover:bg-primary' : ' pointer-events-none opacity-70'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 fill-current text-dark dark:text-white lg:w-6"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
              />
              <path
                fillRule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CustomCard
