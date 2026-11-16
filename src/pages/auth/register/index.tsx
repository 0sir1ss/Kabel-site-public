import Head from "next/head";
import Navigation from "~/components/Navigation";
import BlurredBG from "~/components/BlurredBG";
import Link from "next/link";
import { useState } from "react";
import { api } from "~/utils/api";
import { ExclamationCircleIcon, XMarkIcon, CheckCircleIcon, } from "@heroicons/react/24/outline";

export default function Register() {
  const mutation = api.accounts.create.useMutation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [alert, setAlert] = useState(false);
  const [creationError, setCreationError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [creationSuccess, setCreationSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (passwordConfirm !== password) {
      setCreationError(true);
      setCreationSuccess(false);
      setErrorMessage("Password's do not match");
      setAlert(true);
    } else {
      await mutation.mutateAsync(
        {
          email: email,
          name: username,
          password: password,
        },
        {
          onSuccess: (data) => {
            if (data["status"] == "201") {
              setCreationError(false);
              setCreationSuccess(true);
              setSuccessMessage(data["message"]);
              setAlert(true);
            } else if (data["status"] == "409") {
              setCreationError(true);
              setCreationSuccess(false);
              setErrorMessage(data["message"]);
              setAlert(true);
            }
          },
        }
      );
    }
  };

  return (
    <>
      <Head>
        <title>Kabel - Signup</title>
        <meta name="description" content="Sign Up to Kabel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-[#0B0D0F] text-white">
        <BlurredBG />
        <Navigation />
        <div
          className={`${
            alert ? "mt-48" : "mt-52"
          } flex flex-col items-center justify-center gap-2`}
        >
          {creationError && (
            <div className="flex w-full max-w-xs items-center rounded-lg border border-[#1A1F23] bg-[#101315] p-4 text-white shadow sm:max-w-md">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-red-500">
                <ExclamationCircleIcon className="h-6 w-6" />
              </div>
              <div className="ml-3 text-sm font-normal">{errorMessage}</div>
              <button
                type="button"
                className="-mx-1.5 -my-1.5 ml-auto flex h-8 w-8 items-center justify-center rounded-lg p-1.5 text-white hover:bg-gray-100 hover:text-gray-900"
                onClick={() => (
                  setCreationError(!creationError), setAlert(!alert)
                )}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          )}
          {creationSuccess && (
            <div className="flex w-full max-w-xs items-center rounded-lg border border-[#1A1F23] bg-[#101315] p-4 text-white shadow sm:max-w-md">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-green-500">
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <div className="ml-3 text-sm font-normal">{successMessage}</div>
              <button
                type="button"
                className="-mx-1.5 -my-1.5 ml-auto flex h-8 w-8 items-center justify-center rounded-lg p-1.5 text-white hover:bg-gray-100 hover:text-gray-900"
                onClick={() => (
                  setCreationSuccess(!creationSuccess), setAlert(!alert)
                )}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-xs flex-col gap-3 rounded-lg border border-[#1A1F23] bg-[#101315] p-6 drop-shadow-2xl sm:max-w-md"
          >
            <input
              placeholder="Email"
              type="email"
              className="rounded-md border border-[#1A1F23] bg-[#0E1112] px-4 py-2 font-light text-white"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Username"
              type="text"
              className="rounded-md border border-[#1A1F23] bg-[#0E1112] px-4 py-2 font-light text-white"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              className="rounded-md border border-[#1A1F23] bg-[#0E1112] px-4 py-2 font-light text-white"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Confirm Password"
              type="password"
              className="rounded-md border border-[#1A1F23] bg-[#0E1112] px-4 py-2 font-light text-white"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <div className="rounded-lg border border-[#252B30]" />
            <button
              className="rounded-lg border border-brand bg-brand px-10 py-2 text-lg font-bold text-dark sm:px-4 sm:text-xl"
              type="submit"
            >
              Sign Up
            </button>
            <p className="text-xs">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-brand hover:underline">
                Click Here!
              </Link>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
