function indexFn() {
    //初始
    var index = document.getElementsByClassName('index')[0];
    var main = document.getElementsByClassName('main')[0];
    index.style.display = 'block';
    var mode = location.hash ? location.hash.substr(1).split('/')[0] : 0;
    var charact = location.hash ? location.hash.substr(1).split('/')[1] : 'whiteC';
    var levels = location.hash ? location.hash.substr(1).split('/')[2] : '1';
    //选择人物
    var character = index.getElementsByClassName('character')[0];
    var characters = character.getElementsByTagName('span');

    normal.play();
    //人物初始化
    for (var i = 0; i < characters.length; i++) {
        characters[i].style.cssText = '';
        if (characters[i].className.indexOf(charact) != -1) {
            var prev = characters[i];
        }
        if (characters[i].className.indexOf(charact) != -1) {
            characters[i].parentNode.classList.add('selected');
        }
        characters[i].onOff = true;
        characters[i].onmouseenter = function() {
            this.parentNode.classList.add('selected');
        }
        characters[i].onmouseleave = function() {
            this.parentNode.classList.remove('selected');
            prev.parentNode.classList.add('selected');
        }
        characters[i].onclick = function() {
            if (this.onOff) {
                this.onOff = false;
                charact = this.className;
                if (prev) {
                    prev.parentNode.classList.remove('selected');
                }
                prev = this;
                this.parentNode.classList.add('selected');
                var t = this.offsetTop;
                var n = -30;
                var that = this;
                that.timer = setInterval(function() {
                    that.style.top = t + (n++) + 'px';
                    if (that.offsetTop == 28) {
                        clearInterval(that.timer);
                        that.onOff = true;
                    }
                }, 10);
            }
        }
    }
    //出场动画
    indexLogo();
    //选择模式
    var btns = index.getElementsByClassName('btn');
    //按钮初始化
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('selected');
        btns[i].num = i;
        btns[i].onmouseenter = function() {
            this.classList.add('selected');
        }
        btns[i].onmouseleave = function() {
            this.classList.remove('selected');
        }
        btns[0].onclick = function() {
            //打开关卡页面
            if (levels < 1) {
                levels = 1;
            }
            location.hash = '0/' + charact + '/' + levels + '/' + highest;
            trans(index, levelFn);
        }
        btns[1].onclick = function() {
            //打开关卡页面
            mode = this.num;
            location.hash = '1/' + charact + '/' + levels + '/' + highest;
            trans(index, mainFn);
        }
    }
    //首页出场动画
function indexLogo() {
    var index = document.getElementsByClassName('index')[0];
    var toRight = index.getElementsByClassName('toRight')[0];
    var toLeft = index.getElementsByClassName('toLeft')[0];
    var spatter = index.getElementsByClassName('spatter')[0];
    var timer = null;
    moving({
        obj: toRight,
        attrs: {
            left: 200
        },
        duration: 700,
        callBack: function() {
            bossMove();
        }
    })
   setTimeout(function() {
        moving({
            obj: toLeft,
            attrs: {
                right: 255
            },
            duration: 500
        })
    }, 1500)
//首页Give it up 小人跳动
    function bossMove() {
        var boss = document.createElement('div');
        spatter.style.cssText = '';
        index.appendChild(boss);
        boss.className = 'boss';
        var n = 1;
        timer = setInterval(function() {
            starBlack(boss, index);
        }, 50)
        fn();

        function fn() {
            n++;
            moving({
                obj: boss,
                attrs: {
                    top: 20,
                    left: 300 + 60 * n
                },
                duration: 200,
                callBack: function() {
                    n++;
                    moving({
                        obj: boss,
                        attrs: {
                            top: 80,
                            left: 300 + 60 * n
                        },
                        duration: 200,
                        callBack: function() {
                            if (n <= 8) {
                                fn();
                            } else {
                                index.removeChild(boss);
                                clearInterval(timer);
                                spatter.style.display = 'block';
                            }
                        }
                    })
                }
            })
        }

    }

    //尾巴
    function starBlack(box, father) {
        var div = document.createElement('div');
        var l = box.offsetLeft;
        var t = Math.round(Math.random() * 30) + box.offsetTop;
        div.style.left = l + 'px';
        div.style.top = t + 'px';
        div.className = 'bubble';
        var x = -6;
        var size = Math.round(Math.random() * 20);
        div.style.width = size;
        div.style.height = size;
        div.style.borderRadius = '50%';
        father.appendChild(div);
        div.timer = setInterval(function() {
            div.style.left = (l += x) + 'px';
            div.style.width = (size -= 1) + 'px';
            div.style.height = (size -= 1) + 'px';
            if (size <= 0) {
                clearInterval(div.timer);
                father.removeChild(div);
            }
        }, 80)
    }

}
function trans(obj, fn) {
    var transition = document.getElementsByClassName('transiton')[0];
    transition.style.left = background.offsetLeft + 'px';
    transition.style.display = 'block';
    transition.children[0].classList.add('left');
    transition.children[4].classList.add('right');
    for (var i = 1; i < transition.children.length / 2; i++) {
        transition.children[i].classList.add('up');
    }
    for (var i = transition.children.length / 2 + 1; i < transition.children.length; i++) {
        transition.children[i].classList.add('down');
    }
    changePage(obj, fn);
    setTimeout(function() {
        transition.style.display = 'none';
        for (var i = 0; i < transition.children.length; i++) {
            transition.children[i].className = '';
        }
    }, 2000);
}
//开始界面切换到下一个页面
function changePage(obj, fn) {
    setTimeout(function() {
        obj.style.display = 'none';
        fn();
    }, 1000)
}
