document.addEventListener('DOMContentLoaded', function () {
  // 새로운 할 일 항목을 추가하는 함수
  function addTodoItem(text) {
    const todoList = document.querySelector('#list_menu'); // ul 요소 선택
    const newLi = document.createElement('li'); // 새로운 li 요소 생성
    const newSpan = document.createElement('span'); // 새로운 span 요소 생성
    const newSpanCheck = document.createElement('span');
    const newSpanDelete = document.createElement('span');
    const newSpanEdit = document.createElement('span');
    const newDiv = document.createElement('div');
    const newEditCheck = document.createElement('span');
    const newEditClose = document.createElement('span');
    const newEditBox = document.createElement('div');

    // div 안에 삭제, 수정 아이콘을 추가
    newDiv.appendChild(newSpanEdit);
    newDiv.appendChild(newSpanDelete);
    newEditBox.appendChild(newEditCheck);
    newEditBox.appendChild(newEditClose);

    // li 요소에 체크 아이콘, 할 일 텍스트, 삭제 및 수정 아이콘을 추가
    newLi.appendChild(newSpanCheck);
    newLi.appendChild(newSpan);
    newLi.appendChild(newDiv);

    // 할 일 텍스트를 span 요소에 추가
    newSpan.textContent = text; // 수정 전 할일
    newSpan.value = text; //.value

    // 각 아이콘 및 div에 클래스명 추가
    newSpanCheck.classList.add('material-symbols-outlined', 'addCheck_Btn');
    newSpanEdit.classList.add('material-symbols-outlined', 'edit_Btn');
    newSpanDelete.classList.add('material-symbols-outlined', 'delete_Btn');
    newDiv.classList.add('addDelete_Btn');
    newEditCheck.classList.add('material-symbols-outlined', 'EditCheck_Btn');
    newEditClose.classList.add('material-symbols-outlined', 'EditClose_Btn');
    newEditBox.classList.add('editBox');

    // 각 아이콘에 해당하는 텍스트 설정
    newSpanCheck.textContent = 'check_circle';
    newSpanEdit.textContent = 'edit';
    newSpanDelete.textContent = 'delete';
    newEditCheck.textContent = 'check';
    newEditClose.textContent = 'close';

    // 생성된 li 요소를 할 일 리스트에 추가
    todoList.appendChild(newLi);

    // 체크박스 클릭 시 색상 토글
    newSpanCheck.addEventListener('click', () => {
      newSpanCheck.style.color =
        newSpanCheck.style.color === 'black' ? '' : 'black';
    });

    // 삭제 버튼 클릭 시 항목 삭제
    newSpanDelete.addEventListener('click', () => {
      newLi.remove();
    });

    // 수정 버튼 클릭 시 토글 변경
    newSpanEdit.addEventListener('click', () => {
      newEditBox.add();
      // 필요한 요소 생성
      // li append 배치하기
    });
  }

  // 입력 필드에서 Enter 키를 눌렀을 때 호출되는 함수
  function handleKeydown(event) {
    const todoInput = document.querySelector('#input_box');
    if (event.key === 'Enter' && todoInput.value.trim() !== '') {
      addTodoItem(todoInput.value);
      todoInput.value = '';
    }
  }

  // 버튼 클릭 시 호출되는 함수
  function handleClick() {
    const todoInput = document.querySelector('#input_box');
    if (todoInput.value.trim() !== '') {
      addTodoItem(todoInput.value);
      todoInput.value = '';
    }
  }

  // keydown 이벤트 리스너 추가 (Enter 키로 할 일 추가)
  document.addEventListener('keydown', handleKeydown);

  // 버튼 클릭 이벤트 리스너 추가
  const addButton = document.querySelector('.title_addBtn');
  if (addButton) {
    addButton.addEventListener('click', handleClick);
  } else {
    document.getElementById('error-message').style.display = 'block';
  }
});
