import { generateExam } from "@/lib/examGenerator";

export async function POST(req) {
  const data = await req.json();
  const exam = generateExam(data);
  return Response.json(exam);
}
