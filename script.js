document.getElementById("loginForm").addEventListener("submit", login);

function login(event){
    event.preventDefault(); // ngăn chặn load trang

    const email = document.getElementById("email_login").value;
    const password = document.getElementById("inputPassword2").value;
    if (email === "admin@gmail.com" && password === "123456") {
        Swal.fire({
          title: "Đăng nhập thành công",
          text: "Let's gooooooo",
          icon: "success",
          draggable: true,
        });
        window.location.href = "./index.html"; // chuyển trang
    } else {
        Swal.fire({
            title: "Đăng nhập thất bại",
            text: "Vui lòng kiểm tra lại email và mật khẩu",
            icon: "error",
            draggable: true
        });
    }
}

