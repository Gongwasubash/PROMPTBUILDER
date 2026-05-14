// Reads .env (local) or env var (Netlify) and generates config.js
// Run with: node build-config.js

const fs = require('fs');

let apiKey = process.env.GROQ_API_KEY;

// Fallback to .env file for local dev
if (!apiKey) {
  try {
    const env = fs.readFileSync('.env', 'utf8');
    for (const line of env.split('\n').filter(Boolean)) {
      const [key, ...vals] = line.split('=');
      if (key === 'GROQ_API_KEY') {
        apiKey = vals.join('=').trim().replace(/^['"]|['"]$/g, '');
      }
    }
  } catch {}
}

if (!apiKey) {
  console.error('ERROR: GROQ_API_KEY not found in .env or environment variables.');
  process.exit(1);
}

const config = `// Auto-generated from .env. Do not edit directly.

window.PromptForgeConfig = {
  groqApiKey: '${apiKey}',
};
`;

fs.writeFileSync('config.js', config);
console.log('config.js generated');
