import { destinations } from "@/lib/data"

export async function GET() {
  return Response.json({ destinations })
}
