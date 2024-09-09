"use client";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <h1>ONE NA Frontend Template</h1>
      <h2>About</h2>
      <p>
        This template is created to be used as a starting point for CRUD
        Applications at ONE NA.
      </p>
      <p>
        It provides access to Global APIs, Easy Authentication and copy/paste
        templates. We provide a standardized and repeatable way to achieve the
        following functions:
      </p>
      <ul>
        <li>Structuring Routes and New Pages</li>
        <li>Making Fetch Requests</li>
        <li>Using MUI's Data Table to create Standardized Tables</li>
        <li>Creating interactive forms using react-hook-forms</li>
      </ul>
      <h4>
        Please consider changing the <code>NEXT_PUBLIC_PROJECT_ID</code>{" "}
        Environment Variable in the <code>.env</code> file to your Project ID.
      </h4>
      <p>
        Any suggestions to this Template are welcome, if they follow the best
        practices, remove clutter, stable, production-ready, easy-to-implement
        etc.
        <br />
        If you have any suggestions, reach out to:
      </p>
      <ul>
        <li>theodore.graves@one-line.com</li>
        <li>steve.kopp@one-line.com</li>
        <li>kevin.schenk@one-line.com</li>
        <li>parth.kalra@one-line.com</li>
      </ul>
    </Container>
  );
}
