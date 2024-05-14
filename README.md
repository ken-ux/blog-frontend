# blog-frontend

This is a blog website built with React, TypeScript, and Tailwind CSS. It consumes an API I built for creating and sharing posts. The main focus of this project is showing how various frontend interfaces can interact with an API; therefore, more work went into creating the API rather than this portion.

Refer to [blog-api](https://github.com/ken-ux/blog-api) for the backend and [blog-admin](https://github.com/ken-ux/blog-admin) for the administrative interface!

## Lessons Learned

- Testing locally with backend before running API requests through a production server.
  - This was especially important when I forgot to add the dependency array to the useEffect hook that was fetching data through my API. It was running continuously for an hour before I realized how many calls it was making... This could've been costly if it happened on a production server. Lesson learned!
