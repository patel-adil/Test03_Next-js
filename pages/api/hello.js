// This is a simple API endpoint that returns a greeting message.

export default function handler(req, res) {
  res.status(200).json({ message: "Hello, welcome to the Next.js API!" });
}
