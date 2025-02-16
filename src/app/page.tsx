import { neon } from "@neondatabase/serverless";

async function getData() {
  const sql = neon(process.env.DATABASE_URL);
  const response = await sql`SELECT version()`;
  return response[0].version;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <p className="mt-4 text-lg">Database Version: {data}</p>
    </div>
  );
}
