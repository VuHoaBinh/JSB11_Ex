
// global email, password in register form
let email_global = "";
let password_global = "";

// const: hằng số
// ES6+
document.getElementById("loginForm")?.addEventListener("submit", login);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function login(event){
    event.preventDefault(); // ngăn chặn load trang

    const email = document.getElementById("email_login").value;
    const password = document.getElementById("inputPassword2").value;
    if (email === email_global && password === password_global) {
        Swal.fire({
          title: "Đăng nhập thành công",
          text: "Let's gooooooo",
          icon: "success",
          draggable: true,
        });
        await sleep(2000); // độ ưu tiên cao - thực hiện trước khi chuyển trang
        window.location.href = "./index.html"; // chuyển trang home
    } else {
        Swal.fire({
            title: "Đăng nhập thất bại",
            text: "Vui lòng kiểm tra lại email và mật khẩu",
            icon: "error",
            draggable: true
        });
    }
}


/////// Form Đăng ký ///////
document.getElementById("registerForm")?.addEventListener("submit", register);

async function register(event) {
  event.preventDefault(); // ngăn chặn load trang

  const email = document.getElementById("inputEmail4").value;
  const password = document.getElementById("inputPassword4").value;
//   !== : khác: === bằng
// && và   || hoặc
  if (email !== "" && password !== "") {
    // password.length: độ dài chuỗi password 123=> 3 ký tự
    if (password.length < 6) {
        await sleep(2000);
        Swal.fire({
            title: "Đăng ký thất bại",  
            text: "Mật khẩu phải có ít nhất 6 ký tự",
            icon: "error",
            draggable: true,
        });
        return; // dừng hàm register
    }
    // gán giá trị cho biến global
    email_global = email;
    password_global = password;

    Swal.fire({
      title: "Đăng ký thành công",
      text: "Let's gooooooo",
      icon: "success",
      draggable: true,
    });
    await sleep(2000); // độ ưu tiên cao - thực hiện trước khi chuyển trang
    window.location.href = "./google.html"; // chuyển trang
  } else {
    Swal.fire({
      title: "Đăng ký thất bại",
      text: "Vui lòng đăng kí lại email và mật khẩu",
      icon: "error",
      draggable: true,
    });
  }
}
