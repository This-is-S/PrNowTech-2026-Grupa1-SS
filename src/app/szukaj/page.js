export default async function SzukajPage({ searchParams }) {
  // w Next.js 15+ `searchParams` to Promise
  const { q: query = '' } = await searchParams;

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Wyszukiwarka</h1>
      <form action="/szukaj" method="get">
        <input name="q" type="text" defaultValue={query} placeholder="Czego szukasz?" />
        <button type="submit">Szukaj</button>
      </form>
      {query && <p>Wyniki dla frazy: <strong>{query}</strong></p>}
    </main>
  );
}