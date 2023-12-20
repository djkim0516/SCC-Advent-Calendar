// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message":  "다은이 안녕 나는 귀여운 동준이얌" },
  { "number": 2, "message":  "요새 많이 힘들지?" },
  { "number": 3, "message":  "일도 많고 약속도 많아서 많이 피곤하지" },
  { "number": 4, "message":  "어떻게 해야 다은이 기분이 풀리려낭" },
  { "number": 5, "message":  "다은이가 힘들면 나도 마음이 쓰이넹" },
  { "number": 6, "message":  "내가 다은이 킹받게 하는건 " },
  { "number": 7, "message":  "장난으로 그러는건데 " },
  { "number": 8, "message":  "기분 상하게 하는건 아니지?!" },
  { "number": 9, "message":  "가끔 좀 기어오르는 시도를 한다지만" },
  { "number": 10, "message": "내가 어떻게 다은이한테" },
  { "number": 11, "message": "반항하겠어" },
  { "number": 12, "message": "이길 수가 없는걸 ~.~" },
  { "number": 13, "message": "열일하는 다은이가" },
  { "number": 14, "message": "맛있는 것도 먹구" },
  { "number": 15, "message": "똥쟁이니까 쾌변도 하구" },
  { "number": 16, "message": "가끔 퇴근하고 나랑 만나구" },
  { "number": 17, "message": "나랑 놀러도 가구" },
  { "number": 18, "message": "힘이 나는 일도 있으면 좋겠어" },
  { "number": 19, "message": "자나 깨나 멋있어지구 있을때나(ㅋ)" },
  { "number": 20, "message": "귀여운 다은이 생각하는거 알지?!ㅋㅅㅋ" },
  { "number": 21, "message": "같이 화이팅하장♥" },
  { "number": 22, "message": "재밌게 놀구 내년도 잘 부탁해♥" },
  { "number": 23, "message": "아 맞다!!!" },
  { "number": 24, "message": "★☆메리 크리스마스얌☆★" }
];



// const modalMessageList = [
//   { "number": 1, "message": "행복의 계절, 모두가 함께하는 24일!" },
//   { "number": 2, "message": "이 12월, 행복한 순간이 우리를 감싸네요." },
//   { "number": 3, "message": "다 같이 즐겁게 보내는 24일, 행복이 가득합니다!" },
//   { "number": 4, "message": "12월의 특별함을 모두와 함께 나누어요." },
//   { "number": 5, "message": "각자의 작은 행복이 모여 만드는 특별한 24일!" },
//   { "number": 6, "message": "행복이라는 이름의 캘린더, 모두에게 열려 있어요." },
//   { "number": 7, "message": "함께 하는 즐거움, 24일 동안 계속되길 바랍니다." },
//   { "number": 8, "message": "12월은 행복한 순간들이 가득한 달이에요." },
//   { "number": 9, "message": "우리 모두에게 찾아온 특별한 행복의 계절!" },
//   { "number": 10, "message": "매일 매일이 행복으로 가득찬 24일이 되길." },
//   { "number": 11, "message": "12월, 행복이 가득한 당신과 나누는 소중한 시간." },
//   { "number": 12, "message": "다 함께하는 24일, 행복이 여러 가지 모습으로 찾아올 거예요." },
//   { "number": 13, "message": "행복의 파도가 모두에게 찾아오는 특별한 24일!" },
//   { "number": 14, "message": "12월, 각자의 작은 행복이 모여 큰 기쁨이 되길." },
//   { "number": 15, "message": "모두에게 행복이 넘치는 24일을 기대해봐요." },
//   { "number": 16, "message": "12월의 특별한 순간, 행복이 퍼져나가길." },
//   { "number": 17, "message": "모두에게 행복한 24일이 될 것을 기대합니다!" },
//   { "number": 18, "message": "12월, 행복이 가득찬 마음으로 채워져 있는 시간." },
//   { "number": 19, "message": "다양한 행복이 모여 하나로 뭉쳐지는 24일!" },
//   { "number": 20, "message": "12월, 당신과 나누는 특별한 행복의 순간들." },
//   { "number": 21, "message": "모두에게 다가오는 24일, 행복이 함께하기를!" },
//   { "number": 22, "message": "12월의 행복한 기운이 모두를 감싸네요." },
//   { "number": 23, "message": "다 함께하는 24일, 행복한 느낌이 가득할 거예요." },
//   { "number": 24, "message": "12월, 모두에게 기쁨과 행복이 넘치는 달이에요." }
// ];
