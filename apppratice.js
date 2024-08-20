document.addEventListener('DOMContentLoaded', function () {
  // 새로운 할 일 항목을 추가하는 함수
  function addTodoItem(text) {
    const todoList = document.querySelector('#list_menu'); // ul 요소 선택
    const newLi = document.createElement('li'); // 새로운 li 요소 생성
    const newSpan = document.createElement('span'); // 할 일 텍스트를 표시할 span 요소 생성
    const newSpanCheck = document.createElement('span'); // 체크 아이콘을 담을 span 요소 생성
    const newSpanDelete = document.createElement('span'); // 삭제 아이콘을 담을 span 요소 생성
    const newSpanEdit = document.createElement('span'); // 수정 아이콘을 담을 span 요소 생성
    const newDiv = document.createElement('div'); // 수정 및 삭제 아이콘을 담을 div 생성
    const newEditCheck = document.createElement('span'); // 수정 확인 아이콘을 담을 span 요소 생성
    const newEditClose = document.createElement('span'); // 수정 취소 아이콘을 담을 span 요소 생성
    const newEditBox = document.createElement('div'); // 수정 확인 및 취소 버튼을 담을 div 생성

    // 수정 및 삭제 아이콘을 newDiv에 추가
    newDiv.appendChild(newSpanEdit);
    newDiv.appendChild(newSpanDelete);
    // 수정 확인 및 취소 버튼을 newEditBox에 추가
    newEditBox.appendChild(newEditCheck);
    newEditBox.appendChild(newEditClose);

    // li 요소에 체크 아이콘, 할 일 텍스트, 수정/삭제 아이콘을 추가
    newLi.appendChild(newSpanCheck);
    newLi.appendChild(newSpan);
    newLi.appendChild(newDiv);
    newLi.appendChild(newEditBox); // 수정 확인/취소 박스를 li에 추가

    // 할 일 텍스트를 span 요소에 설정
    newSpan.textContent = text;

    // 각 요소에 클래스명 추가
    newSpanCheck.classList.add('material-symbols-outlined', 'addCheck_Btn');
    newSpanEdit.classList.add('material-symbols-outlined', 'edit_Btn');
    newSpanDelete.classList.add('material-symbols-outlined', 'delete_Btn');
    newDiv.classList.add('addDelete_Btn');
    newEditCheck.classList.add('material-symbols-outlined', 'EditCheck_Btn');
    newEditClose.classList.add('material-symbols-outlined', 'EditClose_Btn');
    newEditBox.classList.add('editBox');

    // 아이콘에 텍스트 설정
    newSpanCheck.textContent = 'check_circle';
    newSpanEdit.textContent = 'edit';
    newSpanDelete.textContent = 'delete';
    newEditCheck.textContent = 'check';
    newEditClose.textContent = 'close';

    // 처음에 수정 확인/취소 박스는 숨김 처리
    newEditBox.style.display = 'none';
    todoList.appendChild(newLi); // 할 일 항목을 리스트에 추가

    // 체크박스 클릭 시 색상 토글
    newSpanCheck.addEventListener('click', () => {
      newSpanCheck.style.color =
        newSpanCheck.style.color === 'black' ? '' : 'black';
    });

    // 삭제 버튼 클릭 시 항목 삭제
    newSpanDelete.addEventListener('click', () => {
      newLi.remove(); // 해당 할 일 항목 삭제
    });

    // 수정 버튼 클릭 시 수정 모드로 전환
    newSpanEdit.addEventListener('click', () => {
      const editInput = document.createElement('input'); // 새로운 input 요소 생성
      editInput.type = 'text';
      editInput.value = newSpan.textContent; // 기존 텍스트를 input에 설정

      newLi.insertBefore(editInput, newSpan); // input을 기존 텍스트 앞에 삽입
      newSpan.style.display = 'none'; // 기존 텍스트를 숨김
      newEditBox.style.display = 'inline-block'; // 수정 확인/취소 박스를 표시
      newDiv.style.display = 'none'; // 수정 모드 진입 시 수정/삭제 아이콘을 숨김

      // 수정 확인 버튼 클릭 시
      newEditCheck.onclick = function () {
        if (editInput.value.trim() !== '') {
          newSpan.textContent = editInput.value; // 수정된 텍스트를 span에 설정
          editInput.remove(); // input 요소 제거
          newSpan.style.display = 'inline'; // 수정된 텍스트를 다시 표시
          newEditBox.style.display = 'none'; // 수정 확인/취소 박스를 숨김
          newDiv.style.display = 'inline-block'; // 수정/삭제 아이콘을 다시 표시
        }
      };

      // 수정 취소 버튼 클릭 시
      newEditClose.onclick = function () {
        editInput.remove(); // input 요소 제거
        newSpan.style.display = 'inline'; // 기존 텍스트를 다시 표시
        newEditBox.style.display = 'none'; // 수정 확인/취소 박스를 숨김
        newDiv.style.display = 'inline-block'; // 수정/삭제 아이콘을 다시 표시
      };
    });
  }

  // 입력 필드에서 Enter 키를 눌렀을 때 호출되는 함수
  function handleKeydown(event) {
    const todoInput = document.querySelector('#input_box'); // 입력 필드 선택
    if (event.key === 'Enter' && todoInput.value.trim() !== '') {
      addTodoItem(todoInput.value); // 입력된 텍스트로 할 일 항목 추가
      todoInput.value = ''; // 입력 필드 초기화
    }
  }

  // 버튼 클릭 시 호출되는 함수
  function handleClick() {
    const todoInput = document.querySelector('#input_box'); // 입력 필드 선택
    if (todoInput.value.trim() !== '') {
      addTodoItem(todoInput.value); // 입력된 텍스트로 할 일 항목 추가
      todoInput.value = ''; // 입력 필드 초기화
    }
  }

  // keydown 이벤트 리스너 추가 (Enter 키로 할 일 추가)
  document.addEventListener('keydown', handleKeydown);

  // 버튼 클릭 이벤트 리스너 추가
  const addButton = document.querySelector('.title_addBtn');
  if (addButton) {
    addButton.addEventListener('click', handleClick); // 추가 버튼 클릭 시 할 일 추가
  } else {
    console.error('오류'); // 오류 메시지 출력
  }
});
