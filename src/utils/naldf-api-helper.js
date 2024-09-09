export default async function fetchNaLdfData(api_url, method, body = null) {
  try {
    const response = await fetch("/api/naldf", {
      method: "POST",
      body: JSON.stringify({
        api_url,
        method,
        body,
      }),
      redirect: "follow",
    });
    return response.json();
  } catch (error) {
    console.error("Error in fetchNaLdfData", error);
    return error;
  }
}
