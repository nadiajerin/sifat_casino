
export default async function Home() {

  const response = await fetch(`https://api.httpsgamexaglobal.net/api/games`, {
    "headers": {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA2LCJhZ2VudF9jb2RlIjoiQUcxNzU2MDQ3OTA0NTcxQ1ZQOCIsInJvbGUiOiJhZmZpbGlhdGUiLCJpYXQiOjE3NjkzNDYwNTd9.nbj3efEYxaZBnK_PTzOlHrPiXumVQNXpPbKbKZifCG4"
    },
    "query": {
      "page": "1",
      "limit": "1000",
      "search": "",
      "provider": "PRAGMATIC",
      "type": "slot|table|card|lottery|sports",
      "status": "active|inactive|maintenance"
    }
  });

  const result = await response.json();

  return (
    <div>{JSON.stringify(result)}</div>
  );
}




