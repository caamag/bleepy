//token bleepy deepseek api - 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

const deepseekCall = async () => {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer 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",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Meu Projeto Teste",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
        messages: [
          {
            role: "user",
            content: "Olá. Me chamo Caio. Qual o seu nome?",
          },
        ],
      }),
    }
  );

  const result = await response.json();
  console.log(result.choices[0].message.content);
};

deepseekCall();
