
import {  createFileRoute } from "@tanstack/react-router";
import { useTitle } from "../lib/useTitle";


export const Route = createFileRoute("/projects")({
  component: RootComponent,
});


function RootComponent() {
  useTitle('Projects')

  return (
    <main>
      <h1>Projects</h1>
      <p>List of my projects</p>
    </main>
  );
}