import Head from "next/head";
import Navigation from "~/components/Navigation";
import BlurredBG from "~/components/BlurredBG";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Kabel | 404 Page Not Found</title>
        <meta name="description" content="A space for collaboration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-[#0B0D0F] text-white">
        <BlurredBG />
        <Navigation />
        <div className="mt-48 flex flex-col items-center justify-center gap-6 sm:mt-56">
          <h1 className="text-center text-6xl font-semibold sm:text-8xl">
            Error: 404
          </h1>
          <p className="text-center text-3xl font-light sm:text-5xl">
            Page Not Found
          </p>
        </div>
        <div className="mx-auto my-6 flex w-full max-w-xs rounded-lg border border-[#252B30] sm:max-w-xl" />
        <div className="mt-4 flex flex-col items-center justify-center gap-1 sm:mt-8 sm:flex-row sm:gap-2">
          <div className="p-1">
            <Link href="/">
              <button className="rounded-lg border border-brand bg-transparent px-16 py-2.5 text-2xl font-bold text-brand sm:text-4xl">
                Return Home
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
