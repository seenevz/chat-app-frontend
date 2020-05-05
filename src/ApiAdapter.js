async function get(url) {
  const resp = await fetch(url);
  return await resp.json();
}

export default {};
