import axios from "axios";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const MODEL = "llama-3.3-70b-versatile";

const SYSTEM_PROMPT = `You are a React component generator.
The user will describe a UI component. You must return ONLY the JSX code, no explanation, no markdown, no imports.
The component must be named App.
Use only inline styles. No external libraries.
Example output:
const App = () => {
  return <div style={{ color: 'red' }}>Hello</div>;
};`;

export const generateComponent = async (prompt) => {
  const res = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      model: MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: prompt },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
    },
  );
  return res.data.choices[0].message.content;
};
