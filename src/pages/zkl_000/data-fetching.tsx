"use client";
import { Container, Typography } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

export default function NavigationPage() {
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

  return (
    <Container>
      <h1>Data Fetching</h1>
      <h2>Querying Data using React Query</h2>
      <p>
        We use the{" "}
        <Link
          href="https://tanstack.com/query/latest/docs/framework/react/quick-start"
          rel="noopener noreferrer"
          target="_blank"
        >
          <code>@tanstack/react-query</code>
        </Link>{" "}
        library to fetch data. Here are the steps:
      </p>
      <ul>
        <li style={{ marginBottom: "1rem" }}>
          <h3>Initializing Next JS API Route</h3>
          <p>
            The first step is creating a new API Route in the Next JS Backend.
          </p>
          <ol>
            <li style={{ marginBottom: "1rem" }}>
              Create a new folder in the <code>{"@/src/pages/api"}</code> route
              by the name of the function. (Try to keep it descriptive.)
              <h5>
                <code>{`@/src/pages/api/<function_name>/index.js`}</code>
              </h5>
            </li>
            <li></li>
          </ol>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <h3>✅ Initializing the Client</h3>
          <p>
            These steps have already been implemented as a part of the template
            in the <code>{"/_app.tsx/"}</code> file in the <code>src</code>{" "}
            Directory.
          </p>
        </li>
        <ol>
          <li style={{ marginBottom: "1rem" }}>
            ✅ Import the Query Client and Provider in the Root of the Project.
            <br />
            <h5>
              <code>{`import { QueryClient, QueryClientProvider } from "@tanstack/react-query";`}</code>
            </h5>
          </li>
          <li>
            ✅ Create the Query Client in the Root of the Project to create a
            new Client. This is the Client that will handle all the API Requests
            for our App.
            <h5>
              <code>{`const queryClient = new QueryClient();`}</code>
            </h5>
          </li>
          <li>
            ✅ Provide the <code>queryClient</code> to the Root of the app. Now,
            we can access this <code>queryClient</code> in any component in the
            app.
            <h5>
              <code>{`<QueryClientProvider client={queryClient}>`}</code>
              <br />
              <code>{`...`}</code>
              <br />
              <code>{`<Component {...pageProps} />`}</code>
              <br />
              <code>{`...`}</code>
              <br />
              <code>{`</QueryClientProvider>`}</code>
              <br />
            </h5>
          </li>
        </ol>
        <li>
          <h3>Utilizing the Library</h3>
          <p>
            These steps need to be performed in the component where you want to
            make the request. You can also use the demos used in the source of
            this template as a starting point.
            <br />
            <br />
            Best Practice tells us that Data is best fetched at the top of the
            Tree, and must be decoupled from its component refreshes.
          </p>
          <ol>
            <li style={{ marginBottom: "1rem" }}>
              Import the <code>useQueryClient</code> hook from the library where
              you need to fetch data.
              <br />
              <h5>
                <code>{`import { useQueryClient } from "@tanstack/react-query";`}</code>
              </h5>
            </li>
            <li style={{ marginBottom: "1rem" }}>
              Create a new instance of the <code>QueryClient</code>.
              <br />
              <h5>
                <code>{`const queryClient = useQueryClient();`}</code>
              </h5>
            </li>
            <li style={{ marginBottom: "1rem" }}>
              Create a new Query using the <code>queryClient</code>.
              <br />
              <h5>
                <code>{`const query = useQuery({ queryKey: [...], queryFn: <fetch_call> });`}</code>
              </h5>
              <ul>
                <li>
                  <h4>queryKey</h4>
                  <p>
                    This is the key that will be used to identify the query in
                    the App (to do things like refetching etc).
                    <br />
                    Usually, it is a unique contextual string or an array of
                    strings.
                  </p>
                </li>
                <li>
                  <h4>queryFn</h4>
                </li>
              </ul>
            </li>
          </ol>
        </li>
      </ul>
    </Container>
  );
}
