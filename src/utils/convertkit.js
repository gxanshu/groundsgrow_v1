const URL = process.env.NEXT_PUBLIC_CONVERTKIT_API_URL;

export async function sendEmailToConvertkit(email, tags) {
  const data = {
    email,
    api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
    tags,
  };
  const response = await fetch(URL, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return await response.json();
}
