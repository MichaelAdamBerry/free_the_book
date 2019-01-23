export async function getVolumes(query) {
  const request = "https://www.googleapis.com/books/v1/volumes?q=" + query;
  const data = await fetch(request, {
    method: "GET"
  });
  let items = await data.json();
  return items.items;
}
