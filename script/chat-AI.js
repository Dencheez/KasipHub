  const chatBtn = document.querySelector(".aiChat-btn");
    const chatWindow = document.querySelector(".chat-window");
    const sendBtn = document.getElementById("sendBtn");
    const userInput = document.getElementById("userInput");
    const chatMessages = document.getElementById("chatMessages");

    // открыть/закрыть чат
    chatBtn.addEventListener("click", () => {
      chatWindow.style.display = chatWindow.style.display === "flex" ? "none" : "flex";
    });

    // функция добавления сообщений
    function addMessage(text, sender) {
      const msg = document.createElement("div");
      msg.classList.add("message", sender === "user" ? "user-message" : "bot-message");
      msg.textContent = text;
      chatMessages.appendChild(msg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // ответ "бота"
    function botReply(userText) {
      let reply = "Я пока тестовый бот. Вы написали: " + userText;
      setTimeout(() => addMessage(reply, "bot"), 500);
    }

    // отправка сообщения
    sendBtn.addEventListener("click", () => {
      let text = userInput.value.trim();
      if (text) {
        addMessage(text, "user");
        userInput.value = "";
        botReply(text);
      }
    });

    // отправка по Enter
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendBtn.click();
      }
    });