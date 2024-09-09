"use client";
import { Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import fetchNaLdfData from "@/utils/naldf-api-helper";

export default function NavigationPage() {
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

  const { data: data_openapi, isLoading: isLoading_openapi } = useQuery({
    queryKey: ["openapi"],
    queryFn: async () => await fetchNaLdfData("/api-json", "GET"),
  });

  return (
    <Container>
      <h1>Data Fetching</h1>
      <h2>
        Querying Data from the NA LDF API Nest JS Backend using React Query
      </h2>
      <p>
        Most of the communication that we will do from this template will be to
        the NA LDF API Nest JS Backend.
      </p>
      <ol>
        <li>
          <p>
            Import the <code>useQuery</code> hook from React Query.
          </p>
          <h5>
            <code>{`import { useQuery } from "@tanstack/react-query";`}</code>
          </h5>
        </li>
        <li>
          <p>
            Import the <code>fetchNaLdfData</code> function from{" "}
            <code>naldf-api-helper</code> utility.
          </p>
          <h5>
            <code>{`import fetchNaLdfData from "@/utils/naldf-api-helper";`}</code>
          </h5>
        </li>
        <li>
          <p>
            Use the <code>fetchNaLdfData</code> function along with React Query
            like this:
          </p>
          <h5>
            <code>{`// SYNTAX`}</code>
            <br />
            <code>{`const { data, isLoading } = useQuery({`}</code>
            <br />
            <code
              style={{ paddingLeft: "1rem" }}
            >{`queryKey: ["<function_identifier_name>"],`}</code>
            <br />
            <code
              style={{ paddingLeft: "1rem" }}
            >{`\tqueryFn: async () => await fetchNaLdfData("<naldf_api_path>", "<method>", <body_object>),`}</code>
            <br />
            <code>{`});`}</code>
            <br />
          </h5>
          <h5>
            <code>{`// EXAMPLE`}</code>
            <br />
            <code>{`const { data: data_openapi, isLoading: isLoading_openapi } = useQuery({`}</code>
            <br />
            <code
              style={{ paddingLeft: "1rem" }}
            >{`queryKey: ["openapi"],`}</code>
            <br />
            <code
              style={{ paddingLeft: "1rem" }}
            >{`queryFn: async () => await fetchNaLdfData("/api-json", "GET"),`}</code>
            <br />
            <code>{`});`}</code>
            <br />
          </h5>
        </li>
      </ol>
    </Container>
  );
}
