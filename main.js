let add_btn = document.querySelector('.add_btn'); //버튼
let add_value = document.querySelector('.add_value'); //추가할 할일
let registered = document.querySelector('.registered_list'); //추가된 할일

//할일 추가시
function add_list(){
	if(add_value.value == false){     
		alert('내용을 입력하세요!');
		console.log("add_value")
	}else{
		let list = document.createElement("li");
		let del = document.createElement('button');
		let title = document.createElement('p')
		let check = document.createElement('input')

		title.innerHTML = add_value.value;

		check.type = "checkbox";

		registered.appendChild(list); 
		list.appendChild(check);
		list.appendChild(title);
		list.appendChild(del);    

		del.innerText = "x"; //삭제버튼에 들어갈 'x'자 문자

		del.addEventListener("click", deleteList); //삭제버튼 클릭시 리스트지우기 이벤트 실행

	}
}


//할일 목록 삭제시
function deleteList(e){ //삭제 버튼(x) 클릭시 
    let removeOne = e.target.parentElement;  //선택한 목록 한개만 지우기(부모 객체를 지운다)
    removeOne.remove();
}

//엔터키 실행
function enterkey() {
	if (window.event.keyCode == 13) {
		add_list();
	};
}