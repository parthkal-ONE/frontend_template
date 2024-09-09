"use client";
import { Container, Typography } from "@mui/material";
import DataGridKit from "./dataTable";
import fetchNaLdfData from "@/utils/naldf-api-helper";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function TablesPage() {
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

  const { data: data_testTable, isLoading: isLoading_testTable } = useQuery({
    queryKey: ["test-table"],
    queryFn: async () => await fetchNaLdfData("/zkl-000/test-table", "GET"),
  });

  return (
    <Container>
      <h1>Tables</h1>
      <h2>Instructions</h2>
      <ol>
        <li>
          <p>
            On pages where we require to use an MUI Data Table, we will create a
            new file in this format:
          </p>
          <h5>
            <code>{`@src/pages/<project_id>/<page_name>/index.tsx`}</code>
          </h5>
        </li>
        <li>
          <p>
            Copy the "./dataTable.tsx" file from the example given below.
            <br />
            The columns for the table must be described in the{" "}
            <code>columns</code> object:
          </p>
          <h5>
            <code>{`const columns = [{`}</code>
            <br />
            <code style={{ paddingLeft: "1rem" }}>{`field: "header_A",`}</code>
            <br />
            <code
              style={{ paddingLeft: "1rem" }}
            >{`headerName: "Header A",`}</code>
            <br />
            <code
              style={{ paddingLeft: "1rem" }}
            >{`valueGetter: (value, row) => row?.header_A,`}</code>
            <br />
            <code style={{ paddingLeft: "1rem" }}>{`width: 150`}</code>
            <br />
            <code>{`}, ...];`}</code>
            <br />
          </h5>
        </li>
        <li>
          <p>This is how the DataGrid Component looks:</p>
          <h5>
            <code>{`<DataGrid`}</code>
            <br />
            <code
              style={{ paddingLeft: "1rem" }}
            >{`loading={props.dataIsLoading}`}</code>
            <br />
            <code
              style={{ paddingLeft: "1rem" }}
            >{`getRowId={(row) => row?.<primary_key_col_name>}`}</code>
            <br />
            <code
              style={{ paddingLeft: "1rem" }}
            >{`rows={props?.inputData || []}`}</code>
            <br />
            <code style={{ paddingLeft: "1rem" }}>{`columns={columns}`}</code>
            <br />
            <code style={{ paddingLeft: "1rem" }}>{`checkboxSelection`}</code>
            <br />
            <code
              style={{ paddingLeft: "1rem" }}
            >{`disableRowSelectionOnClick`}</code>
            <br />
            <code
              style={{ paddingLeft: "1rem" }}
            >{`slots={{ toolbar: TableToolbar }}`}</code>
            <br />
            <code>{`/>`}</code>
            <br />
          </h5>
          <p>
            Replace <code>{`<primary_key_col_name>`}</code> with the{" "}
            <code>field</code> property of the Primary Key Column (as defined in
            the <code>columns</code> array.)
          </p>
        </li>
        <li>
          <p>
            Inside{" "}
            <code>{`@/src/pages/<project_id>/<page_name>/index.tsx`}</code>,
            fetch the data using the NA LDF API Helper:
            <br />
            <h5>
              <code>{`// EXAMPLE`}</code>
              <br />
              <code>{`const { data: data_tableInput, isLoading: isLoading_tableInput } = useQuery({`}</code>
              <br />
              <code
                style={{ paddingLeft: "1rem" }}
              >{`queryKey: ["table-input"],`}</code>
              <br />
              <code
                style={{ paddingLeft: "1rem" }}
              >{`queryFn: async () => await fetchNaLdfData("/zkl-000/test-table", "GET"),`}</code>
              <br />
              <code>{`});`}</code>
              <br />
            </h5>
          </p>
        </li>
        <li>
          <p>
            Import the Table component from the <code>"./dataTable"</code> file
            and use it here:
          </p>
          <h5>
            <code>{`// EXAMPLE`}</code>
            <br />
            <code>{`import DataGridKit from "./dataTable";`}</code>
            <br />
            <code>{`...`}</code>
            <br />
            <code>{`export default function TablesPage() {`}</code>
            <br />
            <code style={{ paddingLeft: "1rem" }}>{`...`}</code>
            <br />
            <code style={{ paddingLeft: "1rem" }}>{`return (`}</code>
            <br />
            <code
              style={{ paddingLeft: "2rem" }}
            >{`{data_testTable && (`}</code>
            <br />
            <code style={{ paddingLeft: "3rem" }}>{`<DataGridKit`}</code>
            <br />
            <code
              style={{ paddingLeft: "4rem" }}
            >{`inputData={data_testTable}`}</code>
            <br />
            <code
              style={{ paddingLeft: "4rem" }}
            >{`dataIsLoading={isLoading_testTable}`}</code>
            <br />
            <code style={{ paddingLeft: "3rem" }}>{`/>`}</code>
            <br />
            <code style={{ paddingLeft: "2rem" }}>{`)}`}</code>
            <br />
            <code style={{ paddingLeft: "1rem" }}>{`);`}</code>
            <br />
            <code>{`}`}</code>
            <br />
          </h5>
        </li>
      </ol>
      <h2>Example</h2>
      {data_testTable && (
        <DataGridKit
          inputData={data_testTable}
          dataIsLoading={isLoading_testTable}
        />
      )}
      {/* <h2>Guidelines</h2>
      <p>
        Here are a set of guidelines to follow when creating new pages. These
        guidelines ensure all ONE NA Apps follow familiar layout and developers
        adopt similar best-practices that are easy to debug.
      </p>
      <ul>
        <li>
          We use the <code>Pages</code> router paradigm of Next JS for Frontend
          CRUD App Development.
        </li>
        <li>
          To make the communication between the Frontend and Backend easily
          parsable, we ensure to consider the <code>{projectId}</code> (ie. the{" "}
          <code>{`/<project-id>/`}</code>) component as the root.
          <br />
          Therefore, please include any pages and/or branches in the{" "}
          <code>{projectId}</code> (ie. the <code>{`/<project-id>/`}</code>)
          folder.
        </li>
      </ul>
      <h2>Templates</h2>
      <ul>
        <li>
          <h3>Simple Page</h3>
          <ol>
            <li>
              <p>
                Depending on the usage, we can create a new page either of these
                ways:
              </p>
              <h5>
                <code>@src/pages/{"<project_id>/<page_name>.tsx"}</code>
              </h5>
              <h5>
                <code>
                  //OR <br />
                  <code>@src/pages/{"<project_id>/<page_name>/index.tsx"}</code>
                </code>
              </h5>
            </li>
            <li>
              Use the Source Code of any page in this Template as a starting
              point, based on the functionality you require.
            </li>
          </ol>
        </li>
      </ul> */}
    </Container>
  );
}
