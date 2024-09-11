import { getToken } from "next-auth/jwt";

export default async function handler(req, res) {
  // Get the Token from the Logged In User's JWT
  const token = await getToken({ req });

  // If the Token is Valid
  if (token && token.email) {
    // Destrtucture the data received in the Request Body
    const { api_url, method, body } = JSON.parse(req.body);

    console.log(`Sending Request to ${process.env.LDF_API_URL}${api_url}`);

    try {
      // Create Appropriate Request for the NA LDF API Nest JS Backend
      const response = await fetch(`${process.env.LDF_API_URL}${api_url}`, {
        method,
        headers: {
          Authorization: `Bearer ${process.env.ZKL_004_API_KEY}`,
          "Content-Type": "application/json",
        },
        body,
        redirect: "follow",
      });
      const result = await response.json();

      console.log("RESULT IS: ", result);

      // Return the Response received from the fetch call
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  } else {
    res.status(403).end();
  }
}
