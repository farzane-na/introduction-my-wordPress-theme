let $=document;

// Variables
let users=[
    {id:1,name:"farzane-nazmabadi",number:"9100038947#farzane"},
    {id:2,name:"armin-amirinasab",number:"9904643198#armin"}
];
let usernameValue=$.querySelector(".username-input");
let passwordValue=$.querySelector(".password-input");
let submitBtn=$.querySelector(".button");
let urlWrapper=$.querySelector(".show-url");
let fileLink=$.querySelector("file-link");

//Functions :

// Check the Values of inputs.
function checkInputValue(event){
    event.preventDefault();
    let username=usernameValue.value.toLowerCase();
    let password=passwordValue.value.toLowerCase();
    let availableValue=users.some(function(user){
        return user.name===username && user.number===password;
    });

    if(availableValue){
        urlWrapper.style.display="flex";
    };
    emptyValue(username,password);
};

//If input was not True.
function emptyValue(user,pass){
    if(user=="" || pass==""){
        alert("لطفا نام کاربری و رمز عبور را به درستی وارد کنید !");
    };
};

// Events
submitBtn.addEventListener("click",checkInputValue);