import Head from "next/head";
import Navigation from "~/components/Navigation";
import BlurredBG from "~/components/BlurredBG";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { ExclamationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    })
      .then(async (response) => {
        console.log(response);
        if (response?.status == 200) {
          setLoginError(false);
          await router.replace("/profile").catch((error) => {
            console.log(error);
          });
        } else if (response?.status == 401) {
          setLoginError(true);
          setErrorMessage("Email or Password do not match");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Head>
        <title>Kabel - Login</title>
        <meta name="description" content="Log In to Kabel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-[#0B0D0F] text-white">
        <BlurredBG />
        <Navigation />
        <div
          className={`${
            loginError ? "mt-52" : "mt-56"
          } flex flex-col items-center justify-center gap-2`}
        >
          {loginError && (
            <div className="flex w-full max-w-xs items-center rounded-lg border border-[#1A1F23] bg-[#101315] p-4 text-white shadow sm:max-w-md">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-red-500">
                <ExclamationCircleIcon className="h-6 w-6" />
              </div>
              <div className="ml-3 text-sm font-normal">{errorMessage}</div>
              <button
                type="button"
                className="-mx-1.5 -my-1.5 ml-auto flex h-8 w-8 items-center justify-center rounded-lg p-1.5 text-white hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setLoginError(!loginError)}
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
              placeholder="Password"
              type="password"
              className="rounded-md border border-[#1A1F23] bg-[#0E1112] px-4 py-2 font-light text-white"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="rounded-lg border border-[#252B30]" />
            <button
              className="rounded-lg border border-brand bg-brand px-10 py-2 text-lg font-bold text-dark sm:px-4 sm:text-xl"
              type="submit"
            >
              Log In
            </button>
            <div>
              <p className="text-xs">
                Forgot Password?{" "}
                <Link href="/auth/reset" className="text-brand hover:underline">
                  Click Here!
                </Link>
              </p>
              <p className="text-xs">
                {"Don't have an account? "} {/* Work around for the apostrophe in this code */}
                <Link
                  href="/auth/register"
                  className="text-brand hover:underline"
                >
                  Create One!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
