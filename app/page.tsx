import { redirect } from "next/navigation"

export default function HomePage() {
  // Redirect to the permit request page
  redirect("/permits")
}
