function analyze(){
  const log = document.getElementById('log').value;
  const result = document.getElementById('result');
  if(!log){
    result.innerHTML = "<p>기록을 입력해주세요.</p>";
    return;
  }
  result.innerHTML = "<h3>AI 분석 결과(예시)</h3><p>입력된 기록을 기반으로 한 예시 문장입니다.</p>";
}