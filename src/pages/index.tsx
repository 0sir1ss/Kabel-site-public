import Head from "next/head";
import Navigation from "~/components/Navigation";
import BlurredBG from "~/components/BlurredBG";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kabel</title>
        <meta name="description" content="A space for collaboration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-[#0B0D0F] text-white">
        <BlurredBG />
        <Navigation />
        <div className="mt-48 flex flex-col items-center justify-center gap-6 sm:mt-56">
          <h1 className="text-center text-4xl font-semibold sm:text-5xl">
            A space for collaboration
          </h1>
          <p className="text-md text-center font-light sm:text-xl">
            Unleash, Embrace, and Elevate Your Vibrant Digital Social Sphere!
          </p>
        </div>
        <div className="mt-4 flex flex-col items-center justify-center gap-1 sm:mt-8 sm:flex-row sm:gap-2">
          <div className="p-1">
            <button className="rounded-lg border border-brand bg-transparent px-9 py-2.5 text-xl font-bold text-brand sm:px-4 sm:text-lg">
              Learn More
            </button>
          </div>
          <div className="p-1">
            <button className="rounded-lg border border-brand bg-brand px-10 py-2.5 text-xl font-bold text-dark sm:px-4 sm:text-lg">
              Download
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
