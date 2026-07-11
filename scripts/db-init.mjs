import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';

// Manual env reading to avoid installing dotenv
const envPath = path.resolve('.env.local');
let databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl && fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const match = envContent.match(/DATABASE_URL="([^"]+)"/);
  if (match) {
    databaseUrl = match[1];
  }
}

if (!databaseUrl) {
  console.error('DATABASE_URL could not be found in environment or .env.local');
  process.exit(1);
}

const sql = neon(databaseUrl);

async function initDb() {
  try {
    console.log('Initializing database table "posts"...');
    await sql`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        excerpt TEXT NOT NULL,
        content TEXT NOT NULL,
        category VARCHAR(100) NOT NULL,
        image VARCHAR(255) NOT NULL,
        date VARCHAR(100) NOT NULL
      );
    `;
    console.log('Table "posts" created or already exists successfully!');
  } catch (error) {
    console.error('Database initialization failed:', error);
    process.exit(1);
  }
}

initDb();
