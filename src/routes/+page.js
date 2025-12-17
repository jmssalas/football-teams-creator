/** @type {import('./$types').PageLoad} */
export async function load({ fetch, data }) {
    const res = await fetch("/api/players");
    const players = await res.json();
    return { ...data, players };
}
