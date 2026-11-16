import Head from "next/head";
import Navigation from "~/components/Navigation";
import BlurredBG from "~/components/BlurredBG";
import { signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

export default function Profile() {
  const { data: session } = useSession();
  const { data: secretMessage } = api.accounts.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: session?.user !== undefined }
  );

  return (
    <>
      <Head>
        <title>Kabel - Profile</title>
        <meta name="description" content="Customise your Kabel profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-[#0B0D0F] text-white">
        <BlurredBG />
        <Navigation />
        <div className="mt-72 flex items-center justify-center">
          <div className="flex w-full max-w-xs flex-col gap-3 rounded-lg border border-[#1A1F23] bg-[#101315] p-6 drop-shadow-2xl sm:max-w-md">
            {session && (
              <div className="rounded-md border border-[#1A1F23] bg-[#0E1112] px-4 py-2 text-xl font-light text-white">
                <h1>Logged in as {session.user?.name}#{session.user?.tag}</h1>
                <p>Email: {session.user?.email}</p>
                <p>ID: {session.user?.id}</p>
                <p>Session expires: {session.expires}</p>
              </div>
            )}
            {secretMessage && (
              <p className="text-lg font-light text-white">
                Protected message: {secretMessage}
              </p>
            )}
            <div className="rounded-lg border border-[#252B30]" />
            <button
              className="rounded-lg border border-brand bg-brand px-10 py-2 text-lg font-bold text-dark sm:px-4 sm:text-xl"
              onClick={() => void signOut()}
            >
              Sign Out
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
