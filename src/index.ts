import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Dummy routes
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the Node TypeScript API'
  });
});

app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/users', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]
  });
});

app.post('/api/users', (req: Request, res: Response) => {
  const { name, email } = req.body;
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: {
      id: 3,
      name,
      email
    }
  });
});

app.get('/api/products', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: [
      { id: 1, name: 'Product A', price: 29.99 },
      { id: 2, name: 'Product B', price: 49.99 }
    ]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
