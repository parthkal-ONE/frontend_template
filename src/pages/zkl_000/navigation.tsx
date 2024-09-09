"use client";
import { Container, Typography } from "@mui/material";

export default function NavigationPage() {
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

  return (
    <Container>
      <h1>Navigation</h1>
      <h2>Guidelines</h2>
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
          <code></code>
        </li>
      </ul>
    </Container>
  );
}
