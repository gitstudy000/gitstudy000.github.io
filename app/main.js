import * as firebase from 'firebase';
import 'firebase/firestore';
 
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD7rWru_lWFJTcOtINdsgvUf033wQW1hCs",
    authDomain: "contactform-ec7b9.firebaseapp.com",
    databaseURL: "https://contactform-ec7b9.firebaseio.com",
    projectId: "contactform-ec7b9",
    storageBucket: "contactform-ec7b9.appspot.com",
    messagingSenderId: "600533252606",
    appId: "1:600533252606:web:3ca8fe1e3d771fd6ac28af",
    measurementId: "G-W75FF4XH8V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// 创建一个collection
var messageRef = firebase.database().ref('message');

// 添加submit事件
document.getElementById('contactForm').addEventListener("submit",submitForm);

function submitForm(e) {
	e.preventDefault();

	// console.log(123);

	// 获取input中的值
	var name = getInputVal('name');
	var company = getInputVal('company');
	var email = getInputVal('email');
	var phone = getInputVal('phone');
	var message = getInputVal('message');

	// console.log(name);

	// 存储数据
	saveMessage(name,company,email,phone,message);

	// 展示alert
	document.querySelector(".alert").style.display = "block";

	// 3秒消失alert
	setTimeout(function(){
		document.querySelector(".alert").style.display = "none";
	},3000);

	// 清除表单
	document.getElementById('contactForm').reset();
}

function getInputVal(id){
	return document.getElementById(id).value;
}

function saveMessage(name,company,email,phone,message){
	messageRef.push({
		name:name,
		company:company,
		email:email,
		phone:phone,
		message:message
	});
}









