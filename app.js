// 1. 인풋 : 해야 할 일 입력받는 입력창
// 2. 인풋 추가버튼 : 해야 할 일을 입력 했다면 추가하는 버튼
// 3. 완료 체크박스 : 해야 할 일을 완료 했다면 버튼을 클릭하여 아직 하지 않은 일과 구분한다.
// 4. 수정 버튼 : 버튼을 클릭하여 해야 할 일을 수정한다.
// 5. 삭제 버튼 : 버튼을 클릭하여 해야 할 일을 삭제한다.
// 6. 수정 완료 버튼 : 버튼을 클릭하여 수정한 해야 할 일을 저장한다.
// 7. 수정 취소 버튼 : 버튼을 클릭하여 수정한 해야 할 일을 저장 하지 않는다.

document.addEventListener('DOMContentLoaded', function () {
  function keyCodeCheck(event) {
    const todoInput = document.querySelector('#input_box');

    if (event.key === 'Enter' && todoInput.value.trim() !== '') {
      const todoList = document.querySelector('#list_menu');
      const newLi = document.createElement('li'); // li 생성
      const newBtn = document.createElement('button'); // button 생성
      const newSpan = document.createElement('span'); // span 생성

      newLi.appendChild(newBtn); // li 안에 button 담기
      newLi.appendChild(newSpan); // li 안에 span 담기

      newSpan.textContent = todoInput.value; // span 안에 입력된 값 담기

      todoList.appendChild(newLi); // 새 li를 ul에 추가

      todoInput.value = ''; // 입력창 비우기
    }
  }

  // keydown 이벤트 리스너 추가
  document.querySelector('#input_box')
  document.addEventListener('keydown', keyCodeCheck);

  // 버튼 클릭 시 할 일 추가
  document.querySelector('.title_addBtn')
  document.addEventListener('click', function () {
      const todoInput = document.querySelector('#input_box');

      if (todoInput.value.trim() !== '') {
        const todoList = document.querySelector('#list_menu');
        const newLi = document.createElement('li'); // li 생성
        const newBtn = document.createElement('button'); // button 생성
        const newSpan = document.createElement('span'); // span 생성

        newLi.appendChild(newBtn); // li 안에 button 담기
        newLi.appendChild(newSpan); // li 안에 span 담기

        newSpan.textContent = todoInput.value; // span 안에 입력된 값 담기

        todoList.appendChild(newLi); // 새 li를 ul에 추가

        todoInput.value = ''; // 입력창 비우기
      }
    });
});

// 토글 구현하기
// document.addEventListener('DOMContentLoaded', function () {
//   function keyCodeCheck(event) {
//     const todoInput = document.querySelector('#input_box');

//     if (event.key === 'Enter' && todoInput.value.trim() !== '') {
//       const todoList = document.querySelector('#list_menu');
//       const newLi = document.createElement('li'); // li 생성
//       newLi.classList.add('todo-item'); // todo-item 클래스 추가

//       const toggleButton = document.createElement('button'); // 버튼 생성
//       const newSpan = document.createElement('span'); // span 생성

//       newLi.appendChild(toggleButton); // li 안에 버튼 추가
//       newLi.appendChild(newSpan); // li 안에 span 추가

//       newSpan.textContent = todoInput.value; // span 안에 입력된 값 담기

//       todoList.appendChild(newLi); // 새 li를 ul에 추가

//       todoInput.value = ''; // 입력창 비우기
//     }
//   }

//   // keydown 이벤트 리스너 추가
//   document
//     .querySelector('#input_box')
//     .addEventListener('keydown', keyCodeCheck);

//   // 버튼 클릭 시 할 일 추가
//   document
//     .querySelector('.title_addBtn')
//     .addEventListener('click', function () {
//       const todoInput = document.querySelector('#input_box');

//       if (todoInput.value.trim() !== '') {
//         const todoList = document.querySelector('#list_menu');
//         const newLi = document.createElement('li'); // li 생성
//         newLi.classList.add('todo-item'); // todo-item 클래스 추가

//         const toggleButton = document.createElement('button'); // 버튼 생성
//         const newSpan = document.createElement('span'); // span 생성

//         newLi.appendChild(toggleButton); // li 안에 버튼 추가
//         newLi.appendChild(newSpan); // li 안에 span 추가

//         newSpan.textContent = todoInput.value; // span 안에 입력된 값 담기

//         todoList.appendChild(newLi); // 새 li를 ul에 추가

//         todoInput.value = ''; // 입력창 비우기
//       }
//     });

//   // 버튼 클릭 시 토글 상태 처리
//   document
//     .querySelector('#list_menu')
//     .addEventListener('click', function (event) {
//       if (event.target.tagName === 'BUTTON') {
//         const li = event.target.closest('li');
//         li.classList.toggle('completed'); // completed 클래스 추가/제거
//       }
//     });
// });
