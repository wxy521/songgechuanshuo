function createDiv() {
    var circleBox = document.createElement('div');
    for (var i = 0; i < 40; i++) {
        var div = document.createElement('div');
        //获取随机数 from 参数表示从哪个数开始  to参数表示到哪个数结束 from<= num <= to
        function randomNum(from, to) {
            from = Number(from);
            to = Number(to);
            var Range = to - from;
            var num = from + Math.round(Math.random() * Range); //四舍五入
            return num;
        };

        var bottom = randomNum(-300, -250);
        var left = randomNum(-200, 200);
        var duration = randomNum(10, 30) / 10;
        var delay = randomNum(0, 50) / 10;

        div.style.cssText += `animation:move ${duration}s linear ${delay}s infinite;bottom:${bottom}px;left:${left}px;`;
        div.className += " dot";
        console.log(div);
        circleBox.appendChild(div);
    }
    var fire = document.querySelector(".fire");
    fire.appendChild(circleBox);
}
createDiv();