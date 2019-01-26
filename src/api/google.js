export async function getVolumeList(query) {
  try {
    const request = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    const data = await fetch(request, {
      method: "GET"
    });
    let items = await data.json();
    console.log(items);
    return items.items;
  } catch (err) {
    console.error(err);
  }
}

export async function getVolume(id) {
  try {
    const request = "https://www.googleapis.com/books/v1/volumes/" + id;
    const data = await fetch(request, {
      method: "GET"
    });
    let volume = await data.json();
    return volume;
  } catch (err) {
    console.error(err);
  }
}
