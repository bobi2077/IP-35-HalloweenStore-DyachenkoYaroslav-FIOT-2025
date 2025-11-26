function showDetails3() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
<p><strong>Тема:</strong> ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</p>
<p><strong>Мета:</strong> ⎯	придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок
⎯	придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX   
</p>
<p><strong>Місце розташування:</strong></p>
<ul>
        <a href="https://github.com/bobi2077/IP-35_appWEB-DYACHENKOYAROSLAV-FIOT-2025" target="_blank">посилання на репозиторій веб застосунка</a><br>
        <a href="https://bobi2077.github.io/IP-35_appWEB-DYACHENKOYAROSLAV-FIOT-2025/" target="_blank">посилання на живу сторінку веб-застосунка</a><br>
        <a href="#" target="_blank">посилання на живу сторінку звітного html-докумсенту</a>
</ul>`
;
}
function Task1() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
            <img src="./pics/w1.jpg" alt="Placeholder Image" width="700">
            <img src="./pics/w2.jpg" alt="Placeholder Image" width="700">
            <img src="./pics/c1.jpg" alt="Placeholder Image" width="700">
            <img src="./pics/c2.jpg" alt="Placeholder Image" width="700">`
        ;
    }
    function showFixedTable() {
        var outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `
        <a href="./3lab/fixtable.html">фіксована таблична верстка</a>
        <img src="./pics/ft.jpg" alt="Placeholder Image" width="700">
                `
            ;
        }
    function showGumTable() {
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = `
            <a href="./3lab/Gummytable.html">гумова таблична верстка</a>
            <img src="./pics/gt.jpg" alt="Placeholder Image" width="700"> `
                ;
            }

    function showFixedBlock() {
                var outputDiv = document.getElementById("output");
                outputDiv.innerHTML = `
                <a href="./3lab/fixblock.html">фіксована блокова верстка</a>
                <img src="./pics/fb.jpg" alt="Placeholder Image" width="700">`;
                }

    function showGumBlock() {
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = `
            <a href="./3lab/Gummyblock.html">гумова блокова верстка</a>
            <img src="./pics/gb.jpg" alt="Placeholder Image" width="700">`;
            }

    function showConclusion3() {
                            var outputDiv = document.getElementById("output");
                            var conclusion = `
                                <p><strong>Висновок:</strong> Під час виконання ЛР №3 я придбав практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувала переваги та недоліки типів макетів веб-сторінок, придбала практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX.    </p>`
                            ;
                            outputDiv.innerHTML = conclusion;
    }             