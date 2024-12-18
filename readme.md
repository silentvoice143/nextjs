## Next.js

- A react framework for building fast and search engine friendly application.
- works on top of react library. library+tools+conventions.
- It has own router library , CLI, compiler, Nodejs runtime.
- We can write both frontend and backend code. Backend code will run on Nodejs runtime and frontend code will run on browser.
- Supports Server-Side-rendering.
  - Fast
  - Search engine friendly
- Static page generation: Pre rendering of certain pages at build time and serve it when needed.

### Creating next application

```
npx create-next-app@latest
```

## Routing and navigation

- To create route in next.js just we need to create a folder with route name inside app folder.

  For example:
  app>users

  Inside users folder we need to create a file name page.tsx which will show content of this route.

  `Route: http://localhost:3000/users/new`

- To create nexted route just simple define folder inside the route folder with page.tsx file.
  For example:
  app>users>new

  Inside new folder we need to create a file name page.tsx

  `Route: http://localhost:3000/users/new`

- **Dynamic route :** A Dynamic Segment can be created by wrapping a file or folder name in square brackets: [segmentName]. For example, [id] or [slug].

Dynamic Segments can be accessed from useRouter.

For example, a blog could include the following route pages/blog/[slug].js where [slug] is the Dynamic Segment for blog posts.

```
import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p>Post: {router.query.slug}</p>
}
```

- Defining navigation

  `<Link href={"/users"}>Users</Link>`

## Client and Serve Component

### Client-side Rendering

- Large bundle of all components and their styling.
- As the bundle size increases it will take more memory to load.
- No SEO
- Less secure.

### Server-side Rendering

- Smaller bundle
- Need less memory.
- SEO
- More secure
- It will not able to access browser api and localstorages etc.

#######################################

- By default each component in next.js is server component which doesn't supports browser apis and interaction like click etc.

- creating a component client component jsut add 'use client' at top.

## Data Fetching

- **Fetching on client using useEffect**
  - Large bundle
  - Resource intensive
  - No SEO
  - Less secure
  - Extra round trip to the server.

## Caching

Storing data somewhere that is faster to access.

- Memory
- File System
- Network

As we move down the retrieving data become slower.

```
import React from "react";

type User = {
  id: number;
  name: string;
};
const User = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });
  const users: User[] = await res.json();
  return (
    <div>
      <h1>User</h1>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.id}-{item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;

```

- If data of api changes then we can use **cache:'no-cache'**.
- Other option to use is **next: { revalidate: 10 }**

## Daisy UI

A bootstrap like library for taiwind css.
