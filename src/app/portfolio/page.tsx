import { Metadata } from "next";
import Portfolio from "./Portfoilo";

export const metadata: Metadata = {
  title: "Portfoilo",
};

export default function PortfolioPage() {
  return <Portfolio />;
}
