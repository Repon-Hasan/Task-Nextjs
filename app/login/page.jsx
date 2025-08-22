// app/login/page.jsx  (SERVER COMPONENT)
import { Suspense } from "react";

import Form from "./Form";

export const dynamic = "force-dynamic";           // optional but helpful with auth pages
export const fetchCache = "default-no-store";     // optional

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading…</div>}>
      <Form></Form>
    </Suspense>
  );
}
