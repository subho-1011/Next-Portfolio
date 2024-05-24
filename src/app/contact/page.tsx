import Contact from "./Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function ContactPage() {
  return <Contact />;
}
