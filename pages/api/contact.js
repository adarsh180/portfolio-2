export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate form data
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // In a real application, you would send an email or store the message in a database
  // This is a mock implementation
  console.log('Contact form submission:', { name, email, subject, message });

  // Simulate processing delay
  setTimeout(() => {
    return res.status(200).json({ message: 'Message sent successfully' });
  }, 1000);
}