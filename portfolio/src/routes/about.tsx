import { createFileRoute } from "@tanstack/react-router";
import { useTitle } from "../lib/useTitle";


export const Route = createFileRoute("/about")({
  component: RootComponent,
});


function RootComponent() {
  useTitle('About')

  return (
    <main>
      <h1>About Benson</h1>
      <p>Interesting facts about me and my journey in data and business analysis.</p>
    </main>
  );
}