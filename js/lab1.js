
function showTopicDetails() {
    var outputDiv = document.getElementById("output");
    var topicDetails = `
       <p><strong>Тема:</strong> СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.<br>
        РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ.<br><br>
        <strong>Мета:</strong> придбати практичні навички роботи з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами.<br>
        <strong>Місце розташування:</strong> <a href="https://github.com/bobi2077/IP-35_appWEB-DYACHENKOYAROSLAV-FIOT-2025" target="_blank">посилання на репозиторій веб застосунка</a><br>
        <a href="https://bobi2077.github.io/IP-35_appWEB-DYACHENKOYAROSLAV-FIOT-2025/" target="_blank">посилання на живу сторінку веб-застосунка</a><br>
        <a href="#" target="_blank">посилання на живу сторінку звітного html-докумсенту</a>
    `;
    outputDiv.innerHTML = topicDetails;
}


function showListCode() {
    var outputDiv = document.getElementById("output");
    var listCode = `
        <img src="./pics/1.png" alt="Placeholder Image" width="300">
        <img src="./pics/2.png" alt="Placeholder Image" width="300">
         <h1>Теги та атрибути для створення списків</h1>

        <h2>Види списків:</h2>

        <h3>1. Маркірований список</h3>
        <p>
            Створюється тегом <b>&lt;ul&gt;</b> (unordered list).  
            Кожен пункт списку — <b>&lt;li&gt;</b> (list item).  
            Атрибут <b>type</b> (устарілий, замінений CSS) дозволяє задати маркери: <code>disc</code>, <code>circle</code>, <code>square</code>.
        </p>
        <pre>
&lt;ul&gt;
    &lt;li&gt;Фантастика&lt;/li&gt;
    &lt;li&gt;Драма&lt;/li&gt;
    &lt;li&gt;Бойовик&lt;/li&gt;
&lt;/ul&gt;
        </pre>

        <h3>2. Нумерований список</h3>
        <p>
            Створюється тегом <b>&lt;ol&gt;</b> (ordered list).  
            Атрибути:  
        </p>
        <ul>
            <li><b>type</b> — стиль нумерації (<code>1</code>, <code>A</code>, <code>a</code>, <code>I</code>, <code>i</code>).</li>
            <li><b>start</b> — з якого числа почати.</li>
            <li><b>reversed</b> — відлік у зворотному порядку.</li>
        </ul>
        <pre>
&lt;ol type="I" start="3"&gt;
    &lt;li&gt;Фантастика&lt;/li&gt;
    &lt;li&gt;Драма&lt;/li&gt;
    &lt;li&gt;Бойовик&lt;/li&gt;
&lt;/ol&gt;
        </pre>

        <h3>3. Список визначень</h3>
        <p>
            Створюється тегом <b>&lt;dl&gt;</b> (description list).  
            Елементи:  
        </p>
        <ul>
            <li><b>&lt;dt&gt;</b> — термін (назва).</li>
            <li><b>&lt;dd&gt;</b> — його опис.</li>
        </ul>
        <pre>
&lt;dl&gt;
    &lt;dt&gt;Фантастика&lt;/dt&gt;
    &lt;dd&gt;Жанр, що описує вигадані світи та події.&lt;/dd&gt;
&lt;/dl&gt;
        </pre>
    `;
    outputDiv.innerHTML = listCode;
}

function showImage() {
    var outputDiv = document.getElementById("output");
    var imageCode = `
        <img src="./pics/3.png" alt="Placeholder Image" width="300">
        <h1>Атрибути зображень</h1>

        <p>
            Зображення вставляються тегом <b>&lt;img&gt;</b>, який є <b>порожнім тегом</b> (не має закриваючого).
        </p>

        <h2>Основні атрибути:</h2>
        <ul>
            <li><b>src</b> (source) — шлях до зображення (локальний або URL).</li>
            <li><b>alt</b> (alternative text) — альтернативний текст, який відображається, якщо картинка недоступна (важливий для SEO та доступності).</li>
            <li><b>width</b> — ширина зображення (в пікселях або %).</li>
            <li><b>height</b> — висота зображення.</li>
            <li><b>title</b> — підказка при наведенні курсора.</li>
        </ul>
    `;
    outputDiv.innerHTML = imageCode;
}

function showConclusion() {
    var outputDiv = document.getElementById("output");
    var conclusion = `
        <p><strong>Висновок:</strong> Під час виконання ЛР №1 я набув практичних навичок зі створення структури HTML-документу та роботи з таблицями, списками, зображеннями.</p>
    `;
    outputDiv.innerHTML = conclusion;
}