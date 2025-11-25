function showDetails() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
<p><strong>Тема:</strong> КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.</p>
<p><strong>Мета:</strong> придбати практичні навички роботи з селекторами, ідентифікаторами, списками, різноманітними властивостями кольору і фону, зовнішними та внутрішними відступами, плаваючими елементами, оформленням текстових елементів.</p>
<p><strong>Місце розташування:</strong></p>
<ul>
      <a href="https://github.com/bobi2077/IP-35_appWEB-DYACHENKOYAROSLAV-FIOT-2025" target="_blank">посилання на репозиторій веб застосунка</a><br>
        <a href="https://bobi2077.github.io/IP-35_appWEB-DYACHENKOYAROSLAV-FIOT-2025/" target="_blank">посилання на живу сторінку веб-застосунка</a><br>
        <a href="#" target="_blank">посилання на живу сторінку звітного html-докумсенту</a>
</ul> `
;

}
function showStyles() {
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
        <p><strong>Вбудований стиль (Inline CSS)<p>
        <p>Стилі додаються безпосередньо в тег HTML за допомогою атрибута style.</p>
        <img src="./pics/st1.jpg" alt="Placeholder Image" width="700">   
        <p><strong>Внутрішній стиль (Internal CSS)<p>   
        <p>Стилі додаються у секцію style всередині елемента head HTML-документа.</p>      
        <img src="./pics/st2.jpg" alt="Placeholder Image" width="300"> 
        <p><strong>Зовнішній стиль (External CSS)<p> 
        <p>Стилі зберігаються в окремому файлі з розширенням .css, який підключається до HTML-документа за допомогою тега link.head HTML-документа.</p>  
        <img src="./pics/st33.jpg" alt="Placeholder Image" width="700"> `
    ;
}

function showTagSelector() {
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
        <img src="./pics/11.jpg" alt="Placeholder Image" width="700">
        <p>селектор тегу</p>`
    ;
}

function showClassSelector() {
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
        <img src="./pics/9.jpg" alt="Placeholder Image" width="300">
      `
    ;
}



function showCSS() {
var outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
        <p> шрифти.</p> 
        <img src="./pics/5.jpg" alt="шрифти" width="700">
        
        <p> контури.</p> 
        <img src="./pics/6.jpg" alt="Placeholder Image" width="700">

        <p> фон.</p> 
        <img src="./pics/7.jpg" alt="Placeholder Image" width="700">
        
        <p> колір тексту.</p>
        <img src="./pics/8.jpg" alt="Placeholder Image" width="700">

        <p> CSS-властивості.</p>
        <img src="./pics/9.jpg" alt="Placeholder Image" width="700">
       `
    ;
}

function showConclusion2() {
    var outputDiv = document.getElementById("output");
    var conclusion = `
        <p><strong>Висновок:</strong> Під час виконання ЛР №2 я засвоїв практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів</p>`
    ;
    outputDiv.innerHTML = conclusion;
}