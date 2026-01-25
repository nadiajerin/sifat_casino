import dbConnect from "@/app/lib/dbConnect";


// GET API:
export async function GET() {
  try {
    // Find Data
    const data = await dbConnect("logo").find({}).toArray();

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Data fetch failed", error: error.message }, { status: 500 });
  }
}

