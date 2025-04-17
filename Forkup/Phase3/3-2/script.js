document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // フォームのデフォルト送信を防止
        errorMessages.innerHTML = ''; // エラーメッセージをクリア
        let isValid = true;

        // ユーザー名のバリデーション
        const username = document.getElementById('username').value.trim();
        if (username === '') {
            addError('ユーザー名は必須です。');
            isValid = false;
        } else if (username.length < 3) {
            addError('ユーザー名は3文字以上である必要があります。');
            isValid = false;
        }

        // メールアドレスのバリデーション
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            addError('有効なメールアドレスを入力してください。');
            isValid = false;
        }

        // パスワードのバリデーション
        const password = document.getElementById('password').value;
        if (password.length < 8) {
            addError('パスワードは8文字以上である必要があります。');
            isValid = false;
        }

        if (isValid) {
            alert('フォームが正常に送信されました！');
            // ここで実際のフォーム送信処理を行う
        }
    });

    function addError(message) {
        const errorElement = document.createElement('p');
        errorElement.textContent = message;
        errorMessages.appendChild(errorElement);
    }
});
