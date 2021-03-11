// 註冊
var send = document.querySelector('.send');

send.addEventListener('click',signup,false);

function  signup(){
    var emailStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;
    console.log(account);
    
    var xhr = new XMLHttpRequest()
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function(){
        var callBackData = JSON.parse(xhr.responseText);
        console.log(callBackData);
        var valueStr = callBackData.message;
        if(valueStr == "帳號註冊成功"){
            alert('帳號註冊成功！！！');
        }else{
            alert('帳號註冊失敗：（');
        }
    document.querySelector('.signup-message').textContent= valueStr;
    }
}
// 註冊

// 登入
var signinSend = document.querySelector('.signin-btn');

signinSend.addEventListener('click',signin,false);

function signin(){
    var signinAccount = document.querySelector('.signin-account').value;
    var signinPassword = document.querySelector('.signin-password').value;
    var signinValue = {};
    signinValue.email = signinAccount;
    signinValue.password = signinPassword;
    console.log(signinValue);

    var xhrSignin = new XMLHttpRequest();
    xhrSignin.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
    xhrSignin.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(signinValue);
    xhrSignin.send(data);
    xhrSignin.onload = function(){
        var callBackData = JSON.parse(xhrSignin.responseText);
        console.log(callBackData);
        var valueStr = callBackData.message;
        if(valueStr == "此帳號不存在或帳號密碼錯誤"){
            alert('此帳號不存在或帳號密碼錯誤');
        }else{
            alert('此帳號已被使用');
        }
        document.querySelector('.signin-message').textContent= valueStr;
    }
}
// 登入


var map;


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 22.6188513, lng: 120.2910801 },
        zoom: 15,
    });


    var data = [
        {
            position: { lat: 22.6173632, lng: 120.2935532 },
            map: map,
            title: '百貨'
        },
        {
            position: { lat: 22.617891, lng: 120.292918 },
            map: map,
            title: '商旅'
        },
    ];
    for (var i = 0; data.length > i; i++) {
        var marker = new google.map.Marker(data[i]);

    }
}