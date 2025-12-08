function analyze() {
    const text = document.getElementById("userInput").value;

    if (!text.trim()) {
        document.getElementById("result").innerHTML = "입력된 내용이 없습니다.";
        return;
    }

    const analysis = "분석 결과:\n- 입력된 내용의 키워드 분석\n- 감정 라벨\n- 개선 제안 등";

    document.getElementById("result").innerHTML = analysis;
}
