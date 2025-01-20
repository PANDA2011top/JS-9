
        const button = document.getElementById('showAlert');
        const output = document.getElementById('output');


        button.addEventListener('click', () => {

            const name = prompt("Iltimos, ismingizni kiriting:");
            if (!name) {
                output.textContent = "Ism kiritilmadi!";
                return;
            }

            const surname = prompt("Iltimos, familiyangizni kiriting:");
            if (!surname) {
                output.textContent = "Familiya kiritilmadi!";
                return;
            }

            const favoriteMonth = prompt("O'zingiz yoqtirgan oyiningiz nomini kiriting:");
            if (!favoriteMonth) {
                output.textContent = "Sevimli oyiningiz kiritilmadi!";
                return;
            }

            output.innerHTML = `
                Salom, ${name} ${surname}!<br>
                Sizning sevimli oyiningiz: ${favoriteMonth}.
            `;
        });