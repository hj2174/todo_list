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

		add_value.value = "";  // 입력창 초기화
		add_value.focus(); //초기화 이후에 클릭없이 포커스 주기

		del.innerText = "x"; //삭제버튼에 들어갈 'x'자 문자
		del.addEventListener("click", deleteList); //삭제버튼 클릭시 리스트지우기 이벤트 실행

		list.addEventListener("click", function(){   //할일 완료 후 클릭시 밑줄로 표시
			title.style.textDecoration = "line-through";
			title.style.color = "red";  //클릭시 색변환

		})
	}
}

//할일 목록 삭제시
function deleteList(e){ //삭제 버튼(x) 클릭시 
    let removeOne = e.target.parentElement;  //선택한 목록 한개만 지우기(부모 객체를 지운다)
    removeOne.remove();
}


function allClear(){
    if(registered.innerText==''){  		//리스트가 없을 때
        alert("삭제할 목록이 없습니다");    
    }else{                 				//리스트가 있을때
        if(confirm("정말 삭제하시겠습니까?") == true){ 	//취소 true일때
			registered.innerText='';   //전체 삭제
		}else{
			return false;    //취소
		}
    }
}

//엔터키로 실행
function enterkey(){
	if (window.event.keyCode == 13) {
		add_list();
	};
}