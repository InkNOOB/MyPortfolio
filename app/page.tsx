import { redirect } from "next/navigation";

export default function RootPage() {
  // This triggers a server-side redirect instantly before the page even renders
  redirect("/home");
  
  // Next.js requires a component to return something, 
  // but the redirect happens so fast this will never actually be seen.
  return null;
}