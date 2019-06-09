var aboutMap = document.querySelector(".about-map");
var aboutFeedback = document.querySelector(".about-feedback");

var formFeedback = document.querySelector(".modal-contact-form");
var inputName = document.querySelector("[name=name]");
var inputEmail = document.querySelector("[name=email]");
var inputText = document.querySelector("[name=text]");
var inputSubmit = document.querySelector(".modal-contact-submit");

var modal = document.querySelectorAll(".modal");
var modalContact = document.querySelector(".modal-contact");
var modalMap = document.querySelector(".modal-map");
var overlay = document.querySelector(".overlay");
var modalClose = document.querySelectorAll(".modal-close");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

// Открываем модальное окно с формой обратной связи
aboutFeedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!modalContact.classList.contains("open") && !overlay.classList.contains("open")) {
    overlay.classList.add("open");
    modalContact.classList.add("open");

    if (storageName && storageEmail) {
      inputName.value = storageName;
      inputEmail.value = storageEmail;
      inputText.focus();
    } else if (storageName) {
      inputName.value = storageName;
      inputEmail.focus();
    } else if (storageEmail) {
      inputEmail.value = storageEmail;
      inputName.focus();
    } else {
      inputName.focus();
    }
  }
});

// Отправка сообщения
formFeedback.addEventListener("submit", function (evt) {
  if (!inputName.value) {
    evt.preventDefault();
    if (!inputName.classList.contains("input-error")) {
      inputName.classList.add("input-error");
      inputName.placeholder = "Это поле обязательно для заполнения";
    }
  } else {
    localStorage.setItem("name", inputName.value);
  }

  if (!inputEmail.value) {
    evt.preventDefault();
    if (!inputEmail.classList.contains("input-error")) {
      inputEmail.classList.add("input-error");
      inputEmail.placeholder = "Это поле обязательно для заполнения";
    }
  } else {
    localStorage.setItem("email", inputEmail.value);
  }

  if (!inputText.value) {
    evt.preventDefault();
    if (!inputText.classList.contains("input-error")) {
      inputText.classList.add("input-error");
      inputText.placeholder = "Это поле обязательно для заполнения";
    }
  }

  if (!inputName.value && !inputEmail.value && !inputText.value) {
    inputName.focus();
  } else if (!inputEmail.value && !inputText.value) {
    inputEmail.focus();
  } else {
    inputText.focus();
  }
});

// Открываем модальное окно с картой проезда
aboutMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!modalMap.classList.contains("open") && !overlay.classList.contains("open")) {
    overlay.classList.add("open");
    modalMap.classList.add("open");
  }
});

// Закрытие модальных окон через кнопку Закрыть
for (i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    for (j = 0; j < modal.length; j++) {
      if (modal[j].classList.contains("open") && overlay.classList.contains("open")) {
        overlay.classList.remove("open");
        modal[j].classList.remove("open");
      }
    }
  });
}

// Закрытие модальных окон через клавишу Esc
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    for (i = 0; i < modal.length; i++) {
      if (modal[i].classList.contains("open") && overlay.classList.contains("open")) {
        overlay.classList.remove("open");
        modal[i].classList.remove("open");
      }
    }
  }
});




