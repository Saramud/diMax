import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className='fixed px-2 xl:px-0 py-5 border-b'>
      <section className="flex items-center justify-between container xl:w-252 mx-auto">
        <div className="flex items-center">
          <Image width={20} height={20} className="w-5 h-5" src={`/logo/logo.png`} alt="Logo" loading="eager"/>
        </div>
        <a aria-label="Write me an email" className="group flex items-center gap-2 text-primary py-2 px-4 rounded-full" href="mailto:youremail@domain.com">
          <span className="group-hover:animate-bounce">
            <svg className="fill-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
              <path d="M132,24A100.11,100.11,0,0,0,32,124v84.33A15.69,15.69,0,0,0,47.67,224H132a100,100,0,0,0,0-200Zm0,184H48V124a84,84,0,1,1,84,84Zm12-80a12,12,0,1,1-12-12A12,12,0,0,1,144,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,100,128Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,188,128Z"></path>
            </svg> </span><span>Write me</span></a>
      </section>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
