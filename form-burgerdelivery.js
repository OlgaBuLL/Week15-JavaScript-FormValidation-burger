// function checkPhone() {
//   let telephone = document.getElementById("telephone").value;
//   if (
//     telephone ==
//     (А,
//     Б,
//     В,
//     Г,
//     Д,
//     Е,
//     Ё,
//     Ж,
//     З,
//     И,
//     Й,
//     К,
//     Л,
//     М,
//     Н,
//     О,
//     П,
//     Р,
//     С,
//     Т,
//     У,
//     Ф,
//     Х,
//     Ц,
//     Ч,
//     Ш,
//     Щ,
//     Ъ,
//     Ы,
//     Ь,
//     Э,
//     Ю,
//     Я)
//   ) {
//     document.getElementById("errorPhone").innerHTML +=
//       "Номер телефона не должен содержать букв";
//   }
//   else(~,!,@,#,$,%,^,&,*,(,),`,',",;,:,<,>,/,\,|;){"Введен недопустимый символ"}
// }

function check() {
  let name = document.getElementById("userName");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone").value;

  document.getElementById("errorMessage").innerHTML = "";

  if (name.value.length <= 2) {
    document.getElementById("errorMessage").innerHTML +=
      "Кол-во символов имени должно быть больше двух<br>";
  }
  if (email.value == "") {
    document.getElementById("errorMessage").innerHTML +=
      "Ваш e-mail не заполнен<br>";
  }

  if (phone.length <= 5) {
    document.getElementById("errorMessage").innerHTML +=
      "Недостаточно символов в номере телефона";
  } else {
    document.getElementById("successMessage").innerHTML +=
      "Ваш заказ успешно оформлен!";
  }
}

function checkPerson() {
  let personNumber = document.getElementById("personNumber").value;

  document.getElementById("personNumber").innerHTML = "";

  if (personNumber <= 0) {
    document.getElementById("errorPerson").innerHTML +=
      "Количество персон должно быть больше 0<br>";
  }
}

// function checkCity() {
//   let city = document.getElementById("city").value;

//   if (city === Number) {
//     document.getElementById("errorMessage").innerHTML +=
//       "В наименовании города нельзя указывать число";
//   }
// }
