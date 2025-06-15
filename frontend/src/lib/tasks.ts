import axios from "axios";

export default async function getTasks() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
    headers: {
      "Cache-Control": "no-store",
    },
  });

  if (response.status !== 200) {
    throw new Error("Failed to fetch tasks");
  }

  return response.data;
}