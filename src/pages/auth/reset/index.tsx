import Head from "next/head";
import Navigation from "~/components/Navigation";
import BlurredBG from "~/components/BlurredBG";
import { XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ResetPassword() {
  const [alert, setAlert] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setSuccessMessage(`Sent a reset link to ${email}`)
    setAlert(true)
    setResetSuccess(true)
  };

  return (
    <>
      <Head>
        <title>Kabel - Reset</title>
        <meta name="description" content="Reset your account password" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-[#0B0D0F] text-white">
        <BlurredBG />
        <Navigation />
        <div className={`${alert ? ("mt-[17rem]") : ("mt-72") } flex flex-col items-center justify-center gap-2`}>
          {resetSuccess && (
            <div className="flex w-full max-w-xs items-center rounded-lg border border-[#1A1F23] bg-[#101315] p-4 text-white shadow sm:max-w-md">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-green-500">
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <div className="ml-3 text-sm font-normal">{successMessage}</div>
              <button
                type="button"
                className="-mx-1.5 -my-1.5 ml-auto flex h-8 w-8 items-center justify-center rounded-lg p-1.5 text-white hover:bg-gray-100 hover:text-gray-900"
                onClick={() => (
                  setResetSuccess(!resetSuccess), setAlert(!alert)
                )}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex w-full max-w-xs flex-col gap-3 rounded-lg border border-[#1A1F23] bg-[#101315] p-6 drop-shadow-2xl sm:max-w-md">
            <input
              placeholder="Email"
              type="email"
              className="rounded-md border border-[#1A1F23] bg-[#0E1112] px-4 py-2 font-light text-white"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="rounded-lg border border-[#252B30]" />
            <button className="rounded-lg border border-brand bg-brand px-10 py-2 text-lg font-bold text-dark sm:px-4 sm:text-xl" type="submit">
              Reset
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
