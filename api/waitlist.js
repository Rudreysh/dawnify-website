export default async function handler(_request, response) {
  response.setHeader("Allow", "GET, POST");
  return response.status(410).json({
    error:
      "The waitlist is closed. Dawnify purchases are available only in the App Store.",
  });
}
