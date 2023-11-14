let listAction = [
    {
        username:"ducthuan914",
        password:"admin"
    },
    {
        username:"admin1",
        password:"admin"
    },
    {
        username:"admin2",
        password:"admin"
    },
]
let inLogin = !!localStorage.getItem("token")
function CheckLogin(){
    if(inLogin){
        window.location.href = "index.html"
    }
}

function Login(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let checkLogin = listAction.some(value => value.username === username && value.password === password)
    if (checkLogin){
        localStorage.setItem("token", username)
        inLogin = true
        CheckLogin()
    }else {
        alert("Đăng Nhập Thất Bại")
    }

}