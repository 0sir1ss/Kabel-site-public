# Kabel
### A space for collaboration
Unleash, Embrace, and Elevate Your Vibrant Digital Social Sphere!

# How to install

Clone the repo and run `npm install`

# File structure

## Prisma

```
/src/prisma
```

This folder will contain a `schema.prisma` file.
Here we create models for use with Prisma which is used in the backend.

## Images

```
/src/images
```

Just images basically.

## Components

```
/src/components
```

Components that are reused often throughout the page. Examples are the custom blurred background and the navbar.

## Pages

```
/src/pages
```

This is our frontend of the application, this can be split into three parts. The main folder has 3 files, `_app.tsx`, `404.tsx` and `index.tsx`.

```
/src/pages/_app.tsx
```

This is the entry point of our application. Rarely will it need to be changed.

```
/src/pages/404.tsx
```

This is a custom 404 page of our application. No need for change unless we have a UI update.

```
/src/pages/index.tsx
```

All routes need an index.tsx. This is what the regular user sees. To create a new route, we make a folder with the name of it being our route as can be seen.

## API

There are 2 routes in our api - NextAuth and tRPC. \
\
NextAuth is how we authenticate our user with JWT, and keep sessions. The options for NextAuth are handled in the backend.
\
tRPC is how we communicate with the backend with typesafety. Easiest way to understand it is instead of performing a bunch of post and get requests, we call functions instead which do the same job (it does requests for us basically like a wrapper.)

## Auth

```
/src/pages/auth/login/index.tsx
```

Logging in and session authentication, etc is majority handled by NextAuth. In the backend we just have to provide the function and getting the user.

```
/src/pages/auth/register/index.tsx
```

Creating an account. This is completely us. Using tRPC, we can call a function to the backend after a form is submitted to create an account.

```
/src/pages/auth/reset/index.tsx
```

Resetting the password of an account. Need to start making this.

```
/src/pages/profile/index.tsx
```

Putting this under the **Auth** section since it requires a user to be logged in to display anything. Take a look at it and understand it.

## Server

```
/src/server
```

This is our backend and has a few files. The main ones are `auth.ts` and `db.ts`, along with our routers in `/api/routers`.

```
/src/server/auth.ts
```

This is how we configure NextAuth in the `/src/pages/api/auth/[...nextauth].ts` directory.

```
/src/server/db.ts
```

This is a helper function for using Prisma when we don't have `ctx` available to use.

```
/src/server/api/root.ts
```

This is the root folder for our api and how we connect our routers defined in `/routers`.

```
/src/server/api/trpc.ts
```

This is where all the tRPC server stuff is created and plugged in. This is our middleware.

```
/src/server/api/routers/
```

This is where we create new routers / api routes.

```
/src/server/api/routers/accounts.ts
```

This is where we will create new api's that are related to accounts, such as creation and deletion.

## Styles

```
/src/styles/globals.css
```

This is where Tailwind CSS comes into play. Look on their [site](tailwindcss.com) for documentation and use.

## Utils

```
/src/utils/api.ts
```

This is a client-side entrypoint for using tRPC. You can see how it's used in some pages, like `src/pages/auth/register/index.tsx`.

# The T3 Stack

Below you will see the main part of our app. However, before that I will show you some additions.

## Heroicons && HeadlessUI

HeadlessUI comes from Tailwind and are unstyled components that are basic in there needs. \
Heroicons is an icon pack for us to use.

## Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
