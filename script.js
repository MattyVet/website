function loadSection(section) {
    const content = document.getElementById('content');
    
    if (section === 'services') {
        // Запрос цен с сервера
        fetch('getPrices.php')
            .then(response => response.json())
            .then(prices => {
                content.innerHTML = `
                    <h2>Наши услуги</h2>
                    <h3>Буст для MLBB</h3>
                    <table>
                        <tr><th>Ранг</th><th>Цена за звезду</th></tr>
                        ${prices.mlbb.map(item => `<tr><td>${item.rank}</td><td>${item.price}</td></tr>`).join('')}
                    </table>
                    <h3>Буст для PUBG Mobile</h3>
                    <table>
                        <tr><th>Ранг</th><th>Цена за 1 птс</th></tr>
                        ${prices.pubg.map(item => `<tr><td>${item.rank}</td><td>${item.price}</td></tr>`).join('')}
                    </table>
                `;
            })
            .catch(error => {
                content.innerHTML = '<p>Ошибка загрузки цен</p>';
                console.error('Ошибка:', error);
            });
    } else {
        switch (section) {
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
}
