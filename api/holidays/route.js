import holidays from "../../../data/holidays.json" with { type: "json" };

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year");

  let result = holidays;

  if (year) {
    result = holidays.filter((h) => h.date.startsWith(year));
  }

  return Response.json(result);
}

