import {  createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/projects")({
  component: RootComponent,
});


function RootComponent() {
  return (
    <main>
      <h1>Projects</h1>
      <p>List of my projects</p>
    </main>
  );
}