import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/")({
  component: RootComponent,
});


function RootComponent() {
  return (
    <main>
      <h1>Hi, I'm Benson Isaac</h1>
      <p>Junior Data & Business Analyst</p>
    </main>
  );
}