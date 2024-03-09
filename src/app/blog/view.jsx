import Image from 'next/image'
import Link from 'next/link'

const BlogView = () => {
  return (
    <section className="bg-slate-100 pb-32 pt-36">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Blog</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark">Tulisan Terkini</h2>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg">
              <Image
                src={'/golang.png'}
                alt="golang"
                width={500}
                height={500}
                className=" w-full"
              />
              <div className="px-6 py-8">
                <h3>
                  <Link
                    href={
                      'https://medium.com/@hafizhcbs/memahami-tipe-data-di-golang-2bd2abececa3'
                    }
                    target="_blank"
                    className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary">
                    Memahami Tipe Data di Golang
                  </Link>
                </h3>
                <p className="mb-6 truncate text-base font-medium text-secondary">
                  Tipe data adalah kategori nilai yang dapat dimiliki oleh suatu
                  variabel atau ekspresi.
                </p>
                <Link
                  href="https://medium.com/@hafizhcbs/memahami-tipe-data-di-golang-2bd2abececa3"
                  target="_blank"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-80">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg">
              <Image
                src={'/golang.png'}
                alt="golang"
                width={500}
                height={500}
                className=" w-full"
              />
              <div className="px-6 py-8">
                <h3>
                  <Link
                    href={
                      'https://medium.com/@hafizhcbs/mengenal-struct-di-golang-237c89077f57'
                    }
                    className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary">
                    Mengenal Struct di Golang
                  </Link>
                </h3>
                <p className="mb-6 truncate text-base font-medium text-secondary">
                  Golang tidak memiliki className seperti yang ada pada bahasa-bahasa
                  strict OOP lain.
                </p>
                <Link
                  href="https://medium.com/@hafizhcbs/mengenal-struct-di-golang-237c89077f57"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-80">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg">
              <Image
                src={'https://source.unsplash.com/360x200?coffee'}
                alt="coffee"
                width={500}
                height={500}
                className=" w-full"
              />
              <div className="px-6 py-8">
                <h3>
                  <a
                    href="#"
                    className="mb-3 block truncate text-xl font-semibold text-dark hover:text-primary">
                    Menikmati kopi
                  </a>
                </h3>
                <p className="mb-6 truncate text-base font-medium text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illo
                  maxime sequi sit autem, ipsa beatae officiis, vero eius eaque
                  praesentium necessitatibus fuga excepturi architecto!
                </p>
                <a
                  href="#"
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-80">
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogView
