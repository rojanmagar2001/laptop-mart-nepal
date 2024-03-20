import type { MetaFunction } from "@remix-run/node";
import FeaturedSlider from "~/components/pages/landing/featured-slider";

export const meta: MetaFunction = () => {
  return [
    { title: "Laptop Mart Nepal" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <FeaturedSlider />
    </main>
  );
}
