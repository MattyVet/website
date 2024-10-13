function loadSection(section) {
    const content = document.getElementById('content');
    
    // Загрузка содержимого в зависимости от выбранного раздела
    switch (section) {
        case 'services':
            content.innerHTML = `
                <h2>Наши услуги</h2>
                <ul>
                    <li>
                        <h3>Буст уровня</h3>
                        <p>Увеличьте уровень вашего персонажа быстро и безопасно.</p>
                    </li>
                    <li>
                        <h3>Буст рейтинга</h3>
                        <p>Поднимите свой рейтинг в PvP и соревнованиях.</p>
                    </li>
                    <li>
                        <h3>Буст для конкретных игр</h3>
                        <p>Специальные предложения для LoL, Dota 2, Fortnite и других игр.</p>
                    </li>
                </ul>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <h2>О нашей команде</h2>
                <p>Мы - команда профессионалов с многолетним опытом в игровом бусте.</p>
                <h3>Почему выбрать нас?</h3>
                <ul>
                    <li>Безопасность и конфиденциальность</li>
                    <li>Быстрые сроки выполнения</li>
                    <li>Гарантия качества услуг</li>
                </ul>
            `;
            break;
        case 'reviews':
            content.innerHTML = `
                <h2>Отзывы наших клиентов</h2>
                <ul>
                    <li>
                        <p>Отличный сервис! Уровень повысился за пару дней. - <strong>Иван</strong></p>
                    </li>
                    <li>
                        <p>Рекомендую! Быстро и безопасно. - <strong>Анна</strong></p>
                    </li>
                </ul>
                <h3>Оставьте свой отзыв</h3>
                <form onsubmit="submitReview(event)">
                    <input type="text" placeholder="Ваше имя" required>
                    <textarea placeholder="Ваш отзыв" required></textarea>
                    <button type="submit">Отправить</button>
                </form>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <h2>Свяжитесь с нами</h2>
                <form onsubmit="submitContact(event)">
                    <input type="text" placeholder="Ваше имя" required>
                    <input type="email" placeholder="Ваш email" required>
                    <textarea placeholder="Сообщение" required></textarea>
                    <button type="submit">Отправить</button>
                </form>
                <h3>Контактная информация</h3>
                <p>Телефон: +7 (123) 456-78-90</p>
                <p>Email: zolaola753@gmail.com</p>
            `;
            break;
        default:
            content.innerHTML = '<h2>Выберите раздел</h2><p>Выберите услугу, чтобы увидеть подробности.</p>';
    }
}

function submitReview(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    alert('Ваш отзыв отправлен!'); // Здесь можно добавить AJAX-запрос для отправки данных на сервер
}

function submitContact(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    alert('Сообщение отправлено!'); // Здесь можно добавить AJAX-запрос для отправки данных на сервер
}
