import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/about")({
  component: RootComponent,
});


function RootComponent() {
  return (
    <main>
      <h1>About Benson</h1>
      <p>Interesting facts about me and my journey in data and business analysis.</p>
    </main>
  );
}