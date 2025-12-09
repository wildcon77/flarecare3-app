const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY";   // 
ocument.getElementById("analyzeBtn").addEventListener("click", async () => {
    const userText = document.getElementById("userInput").value.trim();
    const resultBox = document.getElementById("result");

    if (!userText) {
        resultBox.textContent = "내용을 입력해 주세요.";
        return;
    }

    resultBox.textContent = "AI 분석 중... 잠시만 기다려 주세요 🙏";

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",  
                messages: [
                    {
                        role: "system",
                        content: "너는 홍조 상태를 분석하는 FlareCare 전문 AI야. 사용자가 기록한 증상을 분석해서 감정, 원인, 키워드, 개선 팁을 간단히 제공해줘."
                    },
                    {
                        role: "user",
                        content: userText
                    }
                ]
            })
        });

        const data = await response.json();

        const aiMessage = data.choices?.[0]?.message?.content || "분석 결과를 불러올 수 없습니다.";

        resultBox.textContent = aiMessage;

    } catch (err) {
        console.error(err);
        resultBox.textContent = "⚠ 오류 발생: API 연결이 정상적으로 작동하지 않았습니다.";
    }
});
