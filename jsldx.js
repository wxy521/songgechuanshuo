var LEVELS = [
	["                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                  xxx           ",
		"                                                   xx      xx    xx!xx          ",
		"                                          xx                     x!!!x          ",
		"                                                                 xx!xx          ",
		"       |                            xxxxx                          xvx           ",
		"                                                                             xx  ",
		"  xx                                                                          x  ",
		"  x                                                                           x  ",
		"  x                                      xxxxx                                x  ",
		"  x          xxxx                                                              x  ",
		"  x  @       x  x                                                xxxxx        x  ",
		"  x         x  x                                                xxxxx        o  ",
		"  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
		"                              x   x                  x     x                    ",
		"                              x!!!x                  x!!!!!x                    ",
		"                              x!!!x                  x!!!!!x                    ",
		"                              xxxxx                  xxxxxxx                    ",
		"                                                                                ",
		"                                                                                "
	],
	["                                      x!!x                           xxxxxxx                                    x!x  ",
		"                                      x!!x                     xxxx     xxxx                                 x!x  ",
		"                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
		"                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
		"                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ",
		"                                                xx!x         x                                              xx!x  ",
		"                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ",
		"                                                 xvx         x     x   x                   !!!!!!!!!!!!!!!!!!!xx  ",
		"                                                             xx  |   |   |  xx           v xxxxxxxxxxxxxxxxxxxxx   ",
		"                                                              xx!!!!!!!!!!!xx                                     ",
		"                                                               xxxx!!!!!xxxx                                      ",
		"                                               x     x            xxxxxxx        xxx         xxx                  ",
		"                                               x     x                           x x         x x                  ",
		"                                               x     x                             x         x                    ",
		"                                               x     x                             xx        x                    ",
		"                                               xx    x                             x         x                    ",
		"                                               x     x      o  o     x   x         x         x                    ",
		"               xxxxxxx        xxx   xxx        x     x               x   x         x         x                    ",
		"              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
		"             xx       xx        x o x          x    xx               x   x   x               x                    ",
		"     @       x         x        x   x          x     x               x   x   x               x                    ",
		"    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ",
		"    x x      x         x       xx o xx         x     x               x     o     x x         x                    ",
		"!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ",
		"!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
		"!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
		"!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
		"!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
		"!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
		"!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "
	],
	["                                                                                                              ",
		"                                                                                                              ",
		"                                                                                                              ",
		"                                                                                                              ",
		"                                                                                                              ",
		"                                        o                                                                     ",
		"                                                                                                              ",
		"                                        x                                                                     ",
		"                                        x                                                                     ",
		"                                        x                                                                     ",
		"                                        x                                                                     ",
		"                                       xxx                                                                    ",
		"                                       x x                 !!!        !!!  xxx                                ",
		"                                       x x                 !x!        !x!                                     ",
		"                                     xxx xxx                x          x                                      ",
		"                                      x   x                 x   oooo   x       xxx                            ",
		"                                      x   x                 x          x      x!!!x                           ",
		"                                      x   x                 xxxxxxxxxxxx       xxx                            ",
		"                                     xx   xx      x   x      x                                                ",
		"                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
		"                                      x   x           x                    x!!!x                              ",
		"                                      x   x           x                     xxx                               ",
		"                                     xx   xx          x                                                       ",
		"                                      x   x= = = =    x            xxx                                        ",
		"                                      x   x           x           x!!!x                                       ",
		"                                      x   x    = = = =x     o      xxx       xxx                              ",
		"                                     xx   xx          x                     x!!!x                             ",
		"                              o   o   x   x           x     x                xxv        xxx                   ",
		"                                      x   x           x              x                 x!!!x                  ",
		"                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
		"                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
		"                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
		"                             xx           xx                                         xxx                      ",
		"  xxx                         x     x     x                                         x!!!x                xxx  ",
		"  x x                         x    xxx    x                                          xxx                 x x  ",
		"  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
		"  x                           x           x                              x   x                             x  ",
		"  x                           xx          x                              x x x                             x  ",
		"  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
		"  x                xxx             o o    x                              x         xxx                     x  ",
		"  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
		"  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
		"  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
		"  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
		"  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
		"                                                                                                              ",
		"                                                                                                              "
	],
	["                                                                                                  xxx x       ",
		"                                                                                                      x       ",
		"                                                                                                  xxxxx       ",
		"                                                                                                  x           ",
		"                                                                                                  x xxx       ",
		"                          o                                                                       x x x       ",
		"                                                                                             o o oxxx x       ",
		"                   xxx                                                                                x       ",
		"       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
		"       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
		"       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
		"       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
		"       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
		"                                                                                                              ",
		"          o              xxx                              xx                                                  ",
		"                                                                                                              ",
		"                                                                                                              ",
		"                                                      xx                                                      ",
		"                   xxx         xxx                                                                            ",
		"                                                                                                              ",
		"                          o                                                     x      x                      ",
		"                                                          xx     xx                                           ",
		"             xxx         xxx         xxx                                 x                  x                 ",
		"                                                                                                              ",
		"                                                                 ||                                           ",
		"  xxxxxxxxxxx                                                                                                 ",
		"  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
		"  x         x   x       x   x       x   x                 ||                  x     x                         ",
		"  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
		"  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
		"        x=                  =                =x   x                     xxx                                   ",
		"        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
		"                                                                                                              "
	]
];

/************************************************************************************************************************************/
function Vector(x, y) { 
	this.x = x;
	this.y = y;
}
Vector.prototype.plus = function(other) {
	return new Vector(this.x + other.x, this.y + other.y);
};
Vector.prototype.times = function(scale) {
	return new Vector(this.x * scale, this.y * scale);
};

var actorchars = {
	"@": Player,
	"o": Coin,
	"=": Monster,
	"|": Monster,
	"v": Monster
};
/*******************************************************************角色系统**********************************************************/
//这里定义角色类
//角色属性：基础属性（可加点），战斗属性（HP、MP、CP），经验（Level、EXP）
//角色技能：已学技能在角色类中，其次为每个角色定义个人技能树
//角色装备：已穿戴装备在角色类中，需要定义个人装备偏好
//角色数组从1开始，0默认为全体角色，装备栏设在player[0]中
//


//PLAYER -- 角色初始化
var LIUGE_PROPRETY = {
	"ATK": 23,
	"DEF": 21,
	"AGL": 21,
	"STR": 18,
	"MGK": 23,
	"LUK": 25,
	"name": "艾斯蒂亚"
};

//Text/测试用数据
var LEVEL_EXPERIENCE = [0,50,120,200,300,450,650,920,1240,1600,"--"]; //经验台阶
var MAX_LEVEL = 10;
//PersonalMagic Obj -- 个人技能树
//PersonalItems Array -- 个人装备偏好

function Player(pos, PROPRETY) {
	//pos
	this.pos = new Vector(0,0);	
	this.size = new Vector(1,2);
	this.speed = new Vector(0,0);
	//姓名
	this.name = PROPRETY["name"];
	//基础属性初始化
	this.basicproprety = new PlayerBasicproprety(PROPRETY);	
	//战斗属性初始化
	this.fightproprety = new PlayerFightproprety(this.basicproprety);	
	//this.calculation();
	//经验属性初始化
	this.levelproprety = new PlayerLevelproprety();	
	//装备栏
	this.equipspersonal = new PlayerEquips();
	//**//TEST
	ITEMS[1] = {"id":1, "name":"锡杖"};
	ITEMS[2] = {"id":2, "name":"皮革背心"};
	ITEMS[3] = {"id":3, "name":"光明背带"};
	this.equipspersonal.weapon = new EquipsItems(ITEMS[1]);
	this.equipspersonal.armor = new EquipsItems(ITEMS[2]);
	this.equipspersonal.jewelry = new EquipsItems(ITEMS[3]);
	//**//
 
	//背包栏:注，只有Player[0]有背包栏，由所有角色共享
	this.itemsall = new PlayerItems();
	//Magic Obj

}
/*********************************************************************************/
//装备类
function PlayerEquips(){
	this.weapon	= null;
	this.armor = null;
	this.shoes = null;
	this.jewelry = null;
}
/*
////未测试
Player.prototype.wearEquips = function(item){//装备：没有写卸下装备功能，考虑简化
	switch(item.typedetailed){//装备类型
		case 1:{
			if(!this.equipspersonal.weapon){//判断是否多余?
				this.equipspersonal.weapon = item;
			}
			else{
				this.equipspersonal.weapon.user = 0;//原物品设定未使用
				this.equipspersonal.weapon = item;
			}
			item.user = 1;
			break;
		}
		case 2:{
			if(!this.equipspersonal.armor){
				this.equipspersonal.armor = item;
			}
			else{
				this.equipspersonal.armor.user = 0;
				this.equipspersonal.armor = item;
			}
			item.user = 1;
			break;
		}
		case 3:{
			if(!this.equipspersonal.shoes){
				this.equipspersonal.shoes = item;
			}
			else{
				this.equipspersonal.shoes.user = 0;
				this.equipspersonal.shoes = item;
			}
			item.user = 1;
			break;
		}
		case 4:{
			if(!this.equipspersonal.jewelry){
				this.equipspersonal.jewelry = item;
			}
			else{
				this.equipspersonal.jewelry.user = 0;
				this.equipspersonal.jewelry = item;
			}
			item.user = 1;
			break;
		}
	}
}
*/
/*********************************************************************************/
//背包类:一个40格的数组
function PlayerItems(){
	this.items = new Array();
	this.MAX_ITEMS = 40;	//只读属性
}

/*
///未测试
//放入背包:检查背包是否已满，若背包不满则放进去，背包已满则放地上
Player.prototype.pushItems = function(item) {
	if(this.itemsall.items.length()<this.itemsall.MAX_ITEMS){//背包不满
		var flag = -1;
		for(var temp in this.itemsall.items){//检查背包里是否有该物品
			if(this.itemsall.items[temp].id === item.id){
				flag = temp;
				break;
			}
		}
		if(flag === -1){//没有该物品
			this.itemsall.items.push(item);
			this.arrangeItems();
		}
		else{//有该物品
			this.itemsall.items[flag].num +=;
		}
		//if(this.itemsall.items.find(function(temp){
		//	return temp.id === item.id;
		//}))//有该物品
	}
	else{//背包已满
		//TODO：地面生成该物品
	}
}
//丢弃:背包里丢弃物品、系统回收物品、物品使用
Player.prototype.popItems = function(item) {
	//不需要测试物品在不在背包，


}
//背包整理:空值整理，同类物品整理
Player.prototype.arrangeItems = function() {

}
*/
/*********************************************************************************/
//基础属性类
function PlayerBasicproprety(PROPRETY) {
	this.ATK = PROPRETY["ATK"];
	this.DEF = PROPRETY["DEF"];
	this.AGL = PROPRETY["AGL"];
	this.STR = PROPRETY["STR"];
	this.MGK = PROPRETY["MGK"];
	this.LUK = PROPRETY["LUK"];
}
//因为fight属性由基础属性得来，因此可能会有更新不及时的情况，会引发bug，在用到hp、mp之前要确保已经更新
//同样也有属性菜单数据更新的问题，这个问题在那边考虑
//战斗属性类
function PlayerFightproprety(basicproprety) {
	this.maxHP = basicproprety.STR*2;
	this.HP = this.maxHP;
	this.maxMP = basicproprety.MGK*2;;
	this.MP = this.maxMP;
	this.CP = 0;
}
//经验属性类
function PlayerLevelproprety() {
	this.Level = 1;
	this.Exp = 0;
}
//设置等级
//未测试
Player.prototype.setLevel = function(){
	var temp = 1;
	for(; temp<MAX_LEVEL; temp++){
		if(this.levelproprety.Exp<LEVEL_EXPERIENCE[temp]){
			this.levelproprety.Level = temp;
			return;
		}
	}
	this.levelproprety.Level = MAX_LEVEL;
}
//需要重写calculation函数，因为nowHP/MP无法在加点后用这个函数
Player.prototype.calculation = function(){
	this.fightproprety.HP = this.basicproprety.STR*2;
	this.fightproprety.MP = this.basicproprety.MGK*2;
}
Player.prototype.type = "player";


/*******************************************************************怪物系统**********************************************************/
//这里定义怪物类
//首先要有一个怪物图鉴，由此来确定怪物的种类，要确定的有：名称、等级、基础属性&战斗属性&技能、金钱掉落、物品掉落率、经验递减规律
//怪物移动AI：怪物分静止的、随机走动的，怪物设置视野系统，发现玩家时会自动追击玩家，一定时间后未追到则返回原地
//怪物战斗AI：
//

///TODO：需重写
function Monster(pos, ch) {
	this.pos = pos;						//pos
	this.size = new Vector(1, 1);		//大小
	if (ch === "=")
		this.speed = new Vector(2, 0);	//速度
	else if (ch === '|')
		this.speed = new Vector(0, 2);	
	else if (ch === 'v') {
		this.speed = new Vector(0, 3);	
		this.repeatPos = pos;
	}
}
Monster.prototype.type = "Monster";	//类型
Monster.prototype.act = function(step, level) {
	var newPos = this.pos.plus(this.speed.times(step)); //首先，计算移动后的位置；
	if (!level.obstacleAt(newPos, this.size))           //然后，判断是否碰到别的物体，如果没碰到，移动到下一个位置。
		this.pos = newPos;               
	else if (this.repeatPos)            //如果碰到了，对于滴落的Monster，它有个属性repeatPos（初始位置），直接移动到repeatPos；
		this.pos = this.repeatPos;
	else 								//没有repeatPos属性的Monster，都可以往复运动，撞墙之后弹回，即speed逆转。 			
		this.speed = this.speed.times(-1);
};


/*******************************************************************物品系统**********************************************************/
//这里定义物品类
//首先要定义几类物品：战斗消耗品、非战斗消耗品、装备、任务物品、（其他）。
//物品来源：战斗掉落；开宝箱（宝箱由怪物守护，类似于原游戏中的金币）；剧情/任务所得；购买。
//物品使用：	
//- 钱
//- 消耗品			分为战时可用与战时不可用，使用后消失，需要修改人物数据（如加血）、或对游戏系统进行变动（如修改怪物移动AI：不主动攻击）、或其他
//- 装备 			每个角色有各自可用的装备，需要作区分，使用后不可再用，需要修改人物数据（如加攻防、写入角色装备栏），
//- 任务物品		任务标志，不可丢弃
//- 其他			扩充玩法时可加入，其他玩法如定时消耗品、宝石镶嵌、生活技能
//


///TODO：需重写
function Coin(pos) {
	this.basePos = this.pos = pos;
	this.size = new Vector(1, 1);
	// take a look back
	this.wobble = Math.random() * Math.PI * 3;
}
Coin.prototype.type = "coin";
var wobbleSpeed = 8,
	wobbleDist = 0.07;
Coin.prototype.act = function(step) {
	this.wobble += step * wobbleSpeed;
	var wobblePos = Math.sin(this.wobble) * wobbleDist;
	this.pos = this.basePos.plus(new Vector(0, wobblePos));
};

//**//未测试
//物品数组
var ITEMS = new Array();

/*
function readItems(flag){
	//TODO:读取文件里的物品信息,参数确定读取的部分
}
ITEMS = readItems(0);	//任务物品，编号为0xx，通过id获得实例的方法有：1遍历数组，2令数组下标与编号建立联系
ITEMS = readItems(1);	//消耗品，编号为1xx
ITEMS = readItems(2);	//装备，编号为2xx
*/
//根据需求
function Items(ITEMS){
	//初始化父类属性：注意这个东西没有分析可能导致什么错误
	this.resetParent = function(ITEMS){	
		this.id = ITEMS.id;	//物品唯一编号
		this.name = ITEMS.name;
	}
}

//任务物品
function TaskItems(ITEMS){//寄生组合方式继承
	Items.call(this);
	//初始化父类属性
	this.resetParent(ITEMS);
	this.type = ITEMS.type;	
}
(function(){
	//创建一个没有实例方法的类
	var Class = function(){};
	Class.prototype = Items.prototype;
	//将实例的子类作为原型
	TaskItems.prototype = new Class();
})();
//修复构造函数
TaskItems.prototype.constructor = TaskItems;

//消耗品
function ConsumablesItems(ITEMS){
	Items.call(this);
	this.resetParent(ITEMS);
	this.type = ITEMS.type;					//1:任务物品，2:消耗品，3:装备，（4:其他）
	this.typedetailed = ITEMS.typedetailed;	//消耗品:1战斗消耗品，2非战斗消耗品; 装备:1武器，2护甲，3鞋子，4项链
	//TODO:效果
}
(function(){
	var Class = function(){};
	Class.prototype = Items.prototype;
	ConsumablesItems.prototype = new Class();
})();
ConsumablesItems.prototype.constructor = ConsumablesItems;

//装备
function EquipsItems(ITEMS){
	Items.call(this);
	this.resetParent(ITEMS);
	this.type = ITEMS.type;
	this.typedetailed = ITEMS.typedetailed;
	this.user = 0;//是否使用：0为无使用者，1为有使用者
	//TODO:效果
}
(function(){
	var Class = function(){};
	Class.prototype = Items.prototype;
	EquipsItems.prototype = new Class();
})();
EquipsItems.prototype.constructor = EquipsItems;
//**//

/*******************************************************************关卡**********************************************************/
///TODO：需重写

//关卡
function Level(plan) {
	this.width = plan[0].length;
	this.height = plan.length;
	this.grid = [];
	this.actors = [];

	for (var y = 0; y < this.height; y++) {
		var line = plan[y],	//一行
			gridLine = [];
		for (var x = 0; x < this.width; x++) {
			var ch = line[x],
				fieldType = null;
			var Actor = actorchars[ch];
			if (Actor){
				if(ch != '@')
					this.actors.push(new Actor(new Vector(x, y), ch));				//player, moster, coin
				else
					this.actors.push(new Actor(new Vector(x, y), LIUGE_PROPRETY));
			}
			else if (ch === "x")
				fieldType = "wall";									
			else if (ch === "!")
				fieldType = "sea";
			/*else if (ch === "|")
				fieldType = "Monster";
			else if (ch === "=")
				fieldType = "Monster";
			else if (ch === "v") {
				fieldType = "Monster";*/
			//console.log(fieldType);
			gridLine.push(fieldType)
		}
		this.grid.push(gridLine);
	}
	this.player = this.actors.filter(function(actor) {
		return actor.type === "player"
	})[0];
	this.status = this.finishDelay = null;
}

Level.prototype.isFinished = function() {
	return this.status != null && this.finishDelay < 0;
};




/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
/************************************************************act移动模块******************************************************/
///TODO：代码重整

//键盘移动左
var playerXSpeed = 10;
Player.prototype.moveX = function(step, level, keys) {
	this.speed.x = 0;
	if (keys.left) this.speed.x -= playerXSpeed;
	if (keys.right)this.speed.x += playerXSpeed;

	var motion = new Vector(this.speed.x * step, 0);
	var newPos = this.pos.plus(motion);
	var obstacle = level.obstacleAt(newPos, this.size);
	if (obstacle)
		level.playerTouched(obstacle);
	else
		this.pos = newPos;
};
//键盘移动右
var jumpSpeed = 10;
Player.prototype.moveY = function(step, level, keys) {
	this.speed.y = 0;
	if (keys.up) this.speed.y -=  jumpSpeed;
	if (keys.down) this.speed.y += jumpSpeed;

	//碰撞检测或移动
	var motion = new Vector(0,this.speed.y * step);
	var newPos = this.pos.plus(motion);
	var obstacle = level.obstacleAt(newPos, this.size);
	if (obstacle)
		level.playerTouched(obstacle);
	else
		this.pos = newPos;
};
//角色移动
Player.prototype.act = function(step, level, keys) {
	this.moveX(step, level, keys);
	this.moveY(step, level, keys);

	var otherActor = level.actorAt(this);
	if (otherActor)
		level.playerTouched(otherActor.type, otherActor);
	//死亡
	if (level.status == "lost") {
		this.pos.y += step;
		this.size.y -= step;
	}
};
//背景碰撞检测：位置值与大小值
Level.prototype.obstacleAt = function(pos, size) {
	var xStart = Math.floor(pos.x);
	var xEnd = Math.ceil(pos.x + size.x);
	var yStart = Math.floor(pos.y);
	var yEnd = Math.ceil(pos.y + size.y);
	//地图边界检测(视为墙)
	if (xStart < 0 || xEnd > this.width || yStart < 0 || yEnd > this.height)
		return "wall";
	//碰撞物检测(返回本身符号)
	for (var y = yStart; y < yEnd; y++) {
		for (var x = xStart; x < xEnd; x++) {
			var fieldType = this.grid[y][x];
			if (fieldType) return fieldType;
		}
	}
};
//角色碰撞检测
Level.prototype.actorAt = function(actor) {
	for (var i = 0; i < this.actors.length; i++) {
		var other = this.actors[i];
		if (other != actor &&
			actor.pos.x + actor.size.x > other.pos.x &&
			actor.pos.x < other.pos.x + other.size.x &&
			actor.pos.y + actor.size.y > other.pos.y &&
			actor.pos.y < other.pos.y + other.size.y)
			return other;
	}
};
///act行为总控
var maxStep = 0.05;
Level.prototype.animate = function(step, keys) {
	if (this.status != null)
		this.finishDelay -= step;

	while (step > 0) {
		var thisStep = Math.min(step, maxStep);
		this.actors.forEach(function(actor) {
			actor.act(thisStep, this, keys);
		}, this);
		step -= thisStep;
	}
};

var contentout = [];  
var content = "ducle, ducle, ducle, ducle...";  
contentout = content.substring(0, content.length);  
var sub = 0;  
 
function myFunction(){
	var carname="ucle, ducle, ducle, ducle...";
	document.getElementById("demo").innerHTML=carname;
}

//需重写
///事件触发部分：此处调用战斗系统
Level.prototype.playerTouched = function(type, actor) {
	if (type == "Monster" && this.status == null) {
		//alert("加入战斗");

	    /*TODO：战斗场景*/

	    //隐藏原始界面并消除该怪物，载入战斗界面
	    this.actors = this.actors.filter(function (other) {
	        return other != actor;
	    })
		//displaybind.wrap.style.visibility = "collapse";
	    //document.body.style.visibility = "collapse";
		showBattlePlan();
		//setTimeout(function () {
		//    battle.hidden = "hidden";
		//}, 5000);

		/*TODO：战斗模拟及临时变量*/
		//

		/*TODO：战斗结束*/
		//还原原数据，若逃跑则显示该怪物，更新界面数据，更新角色属性，交互
		//setTimeout(function(){
		//	displaybind.wrap.style.visibility = "visible";
		//},5000);
	} 
	if (type == "sea" && this.status == null)
	{
        //alert("对话");
		//this,finishDelay = 1;
		setTimeout(this.status = "lost",5000);  
		//this.status = "lost";
		this.finishDelay = 1;
	}
	if (type == "coin") {
		//更新金币情况
		this.actors = this.actors.filter(function(other) {
			return other != actor;
		});
		if (!this.actors.some(function(actor) {
				return actor.type == "coin";
			})) {
			alert("进入下一地图");
			this.status = "won";
			this.finishDelay = 1;
		}
	}
};

/***********************************************************************************************************/
/***********************************************************************************************************/
/**************************************************战斗场景部分*********************************************/
function ShowBattle(parent, level) {
    //战斗界面初始化
    this.root = parent.appendChild(element("div", "battleShow"));
    this.root.style.visibility = "collapse";
    this.level = level;
    this.leaves = new leaves(level);
    this.root.appendChild(this.drawbattleBackground());
}

ShowBattle.prototype.drawbattleBackground = function () {
    var battleground = element("div", "battlebackground");

    //1/战斗动画界面
    battleground.appendChild(this.leaves.BattleTapdiv());
    battleground.appendChild(element("br"));
    //2/人物属性技能
    var characterdiv = battleground.appendChild(element("div", "characterdiv"));
    //战斗角色头像
    characterdiv.appendChild(this.leaves.BattleRolediv());
    //技能攻击面板
    characterdiv.appendChild(this.leaves.BattleAttackdiv());
    //道具面板
    characterdiv.appendChild(this.leaves.BattleItemdiv());
    return battleground;
}

function leaves(level) {
    this.level = level;
}

/**************************战斗动画界面********************************************/
//战斗动画逻辑
leaves.prototype.BattleTapdiv = function () {
    var BattleTapdiv = element("div", "BattleTapdiv");
    BattleTapdiv.style.width = "1152";
    BattleTapdiv.style.height = "560";
    //var animation = BattleTapdiv.appendChild("canvas", "animation");
    //animation.style.width = "1152";
    //animation.style.height = "560";
    return BattleTapdiv;
}
///战斗画面
//function DrawBattle() {
//    battle.hidden = "";
//    var c = document.getElementById("animation");
//    var cxt = c.getContext("2d");
//    var x1 = 200;
//    var x2 = 520;
//    var y = 150;
//    var player = new Image()
//    player.src = "image/death.png"
//    player.onload = function () {
//        cxt.drawImage(player, 0, 0, 200, 400);
//    }
//    //根据选择的magic不同skill_1选择的图片不同
//    var skill_1 = new Image()
//    skill_1.src = "image/4.png"
//    //cxt.drawImage(skill_1, 355, 50, 80, 80);
//    //根据怪物不同skill_2选择的图片不同
//    var skill_2 = new Image()
//    skill_2.src = "image/3.jpg"
//    Draw();
//    function Draw() {
//        cxt.clearRect(200, 0, 400, 450);
//        y += 0;
//        if (x1 < 600 - 80) {
//            x1 += 20;
//            cxt.drawImage(skill_1, x1, y, 80, 80);
//        }
//        if (x1 == 600 - 80 && x2 >= 200) {
//            x2 -= 20;
//            cxt.drawImage(skill_2, x2, y, 80, 80);
//        }
//    }
//    window.setInterval(draw, 100);
//    //根据遇到的怪物不同选择的怪物图片不同
//    var monster1 = new Image()
//    monster1.src = "image/housewoman.png"
//    monster1.onload = function () {
//        cxt.drawImage(monster1, 600, 0);
//    }
//}

/***********************************************人物属性技能**************************************************/
/**********************************************战斗角色头像***************************************************/
leaves.prototype.BattleRolediv = function () {
    var BattleRolediv = element("div", "BattleRolediv");
    BattleRolediv.style.float = "left";
    var roletable = BattleRolediv.appendChild(element("table", "roletable"));
    roletable.style.border = "thick inset #C0C0C0";
    //1/姓名栏
    var row1_roletable = roletable.appendChild(element("tr"));
    var col_row1_roletable = row1_roletable.appendChild(element("td"));
    col_row1_roletable.appendChild(document.createTextNode("\u00A0\u00A0" + this.level.player.name));
    col_row1_roletable.style.fontSize = "15";
    col_row1_roletable.style.textAlign = "left";
    //2/图片栏
    var row2_roletable = roletable.appendChild(element("tr"));
    var col1_row2_roletable = row2_roletable.appendChild(element("td"));
    var table_col1_row2_roletable = col1_row2_roletable.appendChild(element("table"));
    var role_table_col1_row2_roletable = table_col1_row2_roletable.appendChild(element("tr"));
    var col_table_col1_row2_roletable = role_table_col1_row2_roletable.appendChild(element("td", "rolepicture"));
    col_table_col1_row2_roletable.style.width = "51";
    col_table_col1_row2_roletable.style.height = "51";
    col_table_col1_row2_roletable.style.background = "#000000";
    //3/状态栏
    var col2_row2_roletable = row2_roletable.appendChild(element("td"));
    var table_col2_row2_roletable = col2_row2_roletable.appendChild(element("table"));
    var role_table_col2_row2_roletable = table_col2_row2_roletable.appendChild(element("tr"));
    table_col2_row2_roletable.appendChild(statusRolediv("HP", this.level.player.fightproprety.maxHP, this.level.player.fightproprety.HP));
    table_col2_row2_roletable.appendChild(statusRolediv("MP", this.level.player.fightproprety.maxMP, this.level.player.fightproprety.MP));
    return BattleRolediv;
}
function statusRolediv(name, status, nowstatus) {
    var row = element("tr");
    var col1 = row.appendChild(element("td"));
    col1.style.fontSize = "13";
    col1.appendChild(document.createTextNode(name + "\u00A0\u00A0\u00A0\u00A0"));
    var col2 = row.appendChild(element("td"));
    col2.style.fontSize = "13";
    col2.appendChild(document.createTextNode(nowstatus + "/"));
    var col3 = row.appendChild(element("td"));
    col3.style.fontSize = "13";
    col3.appendChild(document.createTextNode(status + "\u00A0\u00A0"));

    return row;
}

/*******************************************技能攻击面板****************************************/
//技能窗口
leaves.prototype.BattleAttackdiv = function () {
    var BattleAttackdiv = element("div", "BattleAttackdiv");
    BattleAttackdiv.style.float = "left";
    //BattleAttackdiv.
    BattleAttackdiv.style.width = "550";
    BattleAttackdiv.style.height = "140";
    var attacktable = BattleAttackdiv.appendChild(element("table", "attacktable"));
    attacktable.style.border = "thick inset #C0C0C0";
    attacktable.appendChild(rowAttackStatus("普通攻击", "Magic_3", 1));
    attacktable.appendChild(rowAttackStatus("Magic_1", "Magic_4", 2));
    attacktable.appendChild(rowAttackStatus("Magic_2", "S-Magic", 3));
    return BattleAttackdiv;
}
var magicflag = 0;
function rowAttackStatus(text1, text2, num) {
    var row = element("tr");
    var col1 = row.appendChild(element("td"));
    col1.style.width = "275";
    col1.style.border = "3px ridge #C0C0C0";
    var col2 = row.appendChild(element("td"));
    col2.style.width = "275";
    col2.style.border = "3px ridge #C0C0C0";
    col1.appendChild(document.createTextNode(text1));
    col2.appendChild(document.createTextNode(text2));
    col1.style.fontSize = "13.5";
    col2.style.fontSize = "13.5";
    col1.style.textAlign = "center";
    col2.style.textAlign = "center";
    col1.onmousedown = function () {
        col1.style.background = "#C0C0C0";
    }
    col1.onmouseup = function () {
        col1.style.background = "";
    }
    col2.onmousedown = function () {
        col2.style.background = "#C0C0C0";
    }
    col2.onmouseup = function () {
        col2.style.background = "";
    }

    if (num == 1) {
        col1.onclick = function () {
            magicflag = 0;
            alert(magicflag);
        }
        col2.onclick = function () {
            magicflag = 3;
            alert(magicflag);
        }
    }else if (num == 2) {
        col1.onclick = function () {
            magicflag = 1;
            alert(magicflag);
        }
        col2.onclick = function () {
            magicflag = 4;
            alert(magicflag);
        }
    } else if (num == 3) {
        col1.onclick = function () {
            magicflag = 2;
            alert(magicflag);
        }
        col2.onclick = function () {
            magicflag = 5;
            alert(magicflag);
        }
    }
    return row;
}

/********************************************道具面板**********************************/
leaves.prototype.BattleItemdiv = function () {
    var BattleItemdiv = element("div", "BattleItemdiv");
    BattleItemdiv.style.float = "left";
    BattleItemdiv.style.width = "252";
    BattleItemdiv.style.height = "120";
    var itemtable = BattleItemdiv.appendChild(element("table", "itemtable"));
    itemtable.style.border = "thick inset #C0C0C0";
    itemtable.appendChild(rowItemStatus("Item1", 1));
    itemtable.appendChild(rowItemStatus("Item2", 2));
    itemtable.appendChild(rowItemStatus("Item3", 3));
    itemtable.appendChild(rowItemStatus("Item4", 4));
    return BattleItemdiv;
}
var itemflag = 0;
function rowItemStatus(text, num) {
    var row = element("tr");
    var col = row.appendChild(element("td"));
    col.style.width = "252";
    col.appendChild(document.createTextNode(text));
    col.style.fontSize = "9";
    col.style.textAlign = "center";
    col.style.border = "3px ridge #C0C0C0";
    col.onmousedown = function () {
        col.style.background = "#C0C0C0";
    }
    col.onmouseup = function () {
        col.style.background = "";
    }
    if (num == 1) {
        col.onclick = function () {
            itemflag = 1;
            alert(itemflag);
        }
    } else if (num == 2) {
        col.onclick = function () {
            itemflag = 2;
            alert(itemflag);
        }
    } else if (num == 3) {
        col.onclick = function () {
            itemflag = 3;
            alert(itemflag);
        }
    } else if (num == 4) {
        col.onclick = function () {
            itemflag = 4;
            alert(itemflag);
        }
    }
    return row;
}


ShowBattle.prototype.clear = function () {
    this.root.parentNode.removeChild(this.root);
}

/********************************************战斗场景部分结束*************************************************/
/*************************************************************************************************************/



/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
/*****************************************************************显示************************************************************/
//1/菜单初始化
//2/菜单同步刷新
//3/键盘控制逻辑
//4/交互完善
//5/美工
function ShowPlayer(parent, level) {
	//菜单界面初始化
	this.root = parent.appendChild(element("div", "show"));
	this.root.style.visibility = "collapse";
	this.level = level;
	this.leaves = new leaves(level);
	this.root.appendChild(this.drawBackground());
	//菜单界面更新
	//this.buffdraw = new Object();

}

///////////////////////////////////////用JavaScript绘制HTML，并将后台数据显示
//整体逻辑
ShowPlayer.prototype.drawBackground = function(){
	var background = element("div", "menubackground");

	//1/导航
	background.appendChild(this.leaves.bardiv());
	background.appendChild(element("br"));

	//2/主体
	var bodydiv = background.appendChild(element("div", "bodydiv"));
	//人物界面
	bodydiv.appendChild(this.leaves.playerdiv());
	//分割块
	bodydiv.appendChild(element("div", "blockdiv"));
	//立绘
	bodydiv.appendChild(this.leaves.painteddiv());
	//分割块
	bodydiv.appendChild(element("div", "blockdiv"));
	//属性栏
	bodydiv.appendChild(this.leaves.propretydiv());
	background.appendChild(element("br"));	
	//分割块
	bodydiv.appendChild(element("div", "blockdiv"));	
	//装备栏
	bodydiv.appendChild(this.leaves.equipsdiv());
	bodydiv.appendChild(element("br"));
	bodydiv.appendChild(element("br"));
	//分割块
	bodydiv.appendChild(element("div", "blockdiv"));	
	//技能视窗
	bodydiv.appendChild(this.leaves.magicdiv());


	return background;
}

//绘制
function leaves(level) {
	this.level = level;
	//注::由于prototype是共享的，因此有可能需要将所有变量命名在此，而prototype只运行逻辑
}
/*******************************************************************导航栏**********************************************************/
//导航栏逻辑
leaves.prototype.bardiv = function(){
	var bardiv = element("div", "bardiv");
	var subbardiv1 = bardiv.appendChild(element("div", "subbardiv"));
	subbardiv1.appendChild(tableBarAll("Status"));
	var subbardiv2 = bardiv.appendChild(element("div", "subbardiv"));
	subbardiv2.appendChild(tableBarAll("Equip"));
	var subbardiv3 = bardiv.appendChild(element("div", "subbardiv"));
	subbardiv3.appendChild(tableBarAll("Magic"));
	var subbardiv4 = bardiv.appendChild(element("div", "subbardiv"));
	subbardiv4.appendChild(tableBarAll("Items"));
	var subbardiv5 = bardiv.appendChild(element("div", "subbardiv"));
	subbardiv5.appendChild(tableBarAll("Files"));
	return bardiv;
};
function tableBarAll(test){//导航格
	var table = element("table", "table_subbardiv");
	table.style.border = "6px groove #000000";
	var row = table.appendChild(element("tr"));
	var col = row.appendChild(element("td", "bartext"));
	col.appendChild(document.createTextNode(test));
	return table;
}
/*******************************************************************角色视窗**********************************************************/
//角色窗口
leaves.prototype.playerdiv = function(){
	var playerdiv = element("div", "playerdiv");
	var playertable = playerdiv.appendChild(element("table", "playertable"));
	playertable.style.border = "thick inset #C0C0C0";
	//1/姓名栏
	var row1_playertable = playertable.appendChild(element("tr"));
	var col_row1_playertable = row1_playertable.appendChild(element("td"));
	col_row1_playertable.appendChild(document.createTextNode("\u00A0\u00A0" + this.level.player.name));
	col_row1_playertable.style.fontSize = "11";
	col_row1_playertable.style.textAlign = "left";
	var col2_row1_playertable = row1_playertable.appendChild(element("td"));//选定时的交互
	col2_row1_playertable.appendChild(document.createTextNode("→" + "\u00A0\u00A0"));
	col2_row1_playertable.style.textAlign = "right";
	//2/图片栏
	var row2_playertable = playertable.appendChild(element("tr"));
	var col1_row2_playertable = row2_playertable.appendChild(element("td"));
	var table_col1_row2_playertable = col1_row2_playertable.appendChild(element("table"));
	var row_table_col1_row2_playertable = table_col1_row2_playertable.appendChild(element("tr"));
	var col_table_col1_row2_playertable = row_table_col1_row2_playertable.appendChild(element("td", "playerpicture"));						//TODO:添加图片
	//3/状态栏
	var col2_row2_playertable = row2_playertable.appendChild(element("td"));
	var table_col2_row2_playertable = col2_row2_playertable.appendChild(element("table"));
	//table_col2_row2_playertable.style.rules = "rows";
	var row_table_col2_row2_playertable = table_col2_row2_playertable.appendChild(element("tr"));
	table_col2_row2_playertable.appendChild(statusPlaydiv("HP", this.level.player.fightproprety.maxHP, this.level.player.fightproprety.HP));
	table_col2_row2_playertable.appendChild(statusPlaydiv("MP", this.level.player.fightproprety.maxMP, this.level.player.fightproprety.MP));
	
	return playerdiv;
};
function statusPlaydiv(name, status, nowstatus){//角色窗口的状态栏目
	var row = element("tr");
	var col1 = row.appendChild(element("td"));//名称
	col1.style.fontSize = "11";
	col1.appendChild(document.createTextNode(name + "\u00A0\u00A0\u00A0\u00A0"));
	var col2 = row.appendChild(element("td"));//当前数值
	col2.style.fontSize = "11";
	col2.appendChild(document.createTextNode(nowstatus + "/"));
	var col3 = row.appendChild(element("td"));//总值
	col3.style.fontSize = "11";
	col3.appendChild(document.createTextNode(status + "\u00A0\u00A0"));

	return row;
}
/*******************************************************************立绘视窗**********************************************************/
//立绘视窗
leaves.prototype.painteddiv = function(){
	var painteddiv = element("div", "painteddiv");
	var paintedtable = painteddiv.appendChild(element("table", "paintedtable"));
	var row_paintedtable = paintedtable.appendChild(element("tr"));
	var col_row_paintedtable = row_paintedtable.appendChild(element("td", "paintedpicture"));				//-------------TODO：立绘图片
	col_row_paintedtable.style.border = "3px ridge #996633";
	return painteddiv;
}
/*******************************************************************状态视窗**********************************************************/
//状态窗口逻辑
leaves.prototype.propretydiv = function(){
	//窗口
	var propretydiv = element("div", "propretydiv");
	var propretytable = propretydiv.appendChild(element("table", "propretytable"));
	propretytable.style.border = "3px ridge #000000";
	//propretytable.style.rules = "rows";
	//标题Name
	propretytable.appendChild(titleStatus("Name", "3"));
	//名字
	var row2_propretytable = propretytable.appendChild(element("tr"));
	var col_row2_propretytable = row2_propretytable.appendChild(element("td"));
	col_row2_propretytable.appendChild(document.createTextNode("\u00A0" + this.level.player.name + "\u00A0"));
	col_row2_propretytable.colSpan = "3";
	col_row2_propretytable.style.fontSize = "15";
	col_row2_propretytable.style.textAlign = "center";
	//标题Status
	propretytable.appendChild(titleStatus("Status", "3"));
	propretytable.appendChild(rowStatusPropretydiv("Level", this.level.player.levelproprety.Level, 2));
	propretytable.appendChild(rowStatusPropretydiv("HP", this.level.player.fightproprety.maxHP, 3, this.level.player.fightproprety.HP));
	propretytable.appendChild(rowStatusPropretydiv("MP", this.level.player.fightproprety.maxMP, 3, this.level.player.fightproprety.MP));
	propretytable.appendChild(rowStatusPropretydiv("CP", this.level.player.fightproprety.CP, 2));
	//标题Parameter
	propretytable.appendChild(titleStatus("Parameter", "3"));
	propretytable.appendChild(rowParameterPropretydiv("ATK", this.level.player.basicproprety["ATK"]));
	propretytable.appendChild(rowParameterPropretydiv("DEF", this.level.player.basicproprety["DEF"]));
	propretytable.appendChild(rowParameterPropretydiv("AGL", this.level.player.basicproprety["AGL"]));
	propretytable.appendChild(rowParameterPropretydiv("STR", this.level.player.basicproprety["STR"]));
	propretytable.appendChild(rowParameterPropretydiv("MGK", this.level.player.basicproprety["MGK"]));
	propretytable.appendChild(rowParameterPropretydiv("LUK", this.level.player.basicproprety["LUK"]));
	//标题Experience
	propretytable.appendChild(titleStatus("Experience", "3"));
	//EXP
	propretytable.appendChild(rowExperiencePropretydiv("EXP", this.level.player.levelproprety.Level));
	//NEXT
	propretytable.appendChild(rowExperiencePropretydiv("NEXT", LEVEL_EXPERIENCE[this.level.player.levelproprety.Level]));

	return propretydiv;
};
//可以声明一个类，来减少传参，但是会变复杂
function rowStatusPropretydiv(name, status, colnum, nowstatus){	//状态栏目
	var row = element("tr");
	var col1 = row.appendChild(element("td"));
	col1.appendChild(document.createTextNode(name));
	col1.style.fontSize = "11";
	col1.style.color = "#CC9933";
	col1.style.textAlign = "left";
	if(colnum == 2){
		col1.colSpan = "2";
		var col2 = row.appendChild(element("td"));
		col2.appendChild(document.createTextNode(status));
		col2.style.fontSize = "13";
		col2.style.textAlign = "center";
	}
	else if(colnum == 3){
		var col2 = row.appendChild(element("td"));
		col2.appendChild(document.createTextNode(nowstatus + "\u00A0/"));
		col2.style.fontSize = "13";
		col2.style.textAlign = "right";

		var col3 = row.appendChild(element("td"));
		col3.appendChild(document.createTextNode(status));
		col3.style.fontSize = "13";
	}

	return row;
}
function rowParameterPropretydiv(name, status){	//状态栏目
	var row = element("tr");
	var col1 = row.appendChild(element("td"));
	col1.style.fontSize = "11";
	col1.appendChild(document.createTextNode("\u00A0\u00A0\u00A0\u00A0" + name +"\u00A0\u00A0\u00A0"));
	var col2 = row.appendChild(element("td"));
	var col3 = row.appendChild(element("td"));
	col3.style.fontSize = "11";
	col3.appendChild(document.createTextNode("\u00A0\u00A0\u00A0" + status + "\u00A0\u00A0\u00A0\u00A0"));
	return row;
}
function rowExperiencePropretydiv(name, status){//状态栏目
	var row = element("tr");
	var col1 = row.appendChild(element("td"));
	col1.appendChild(document.createTextNode(name));
	col1.style.fontSize = "11";
	col1.colSpan = "2";
	col1.style.color = "#CC9933";
	col1.style.textAlign = "left";
	var col2 = row.appendChild(element("td"));
	col2.appendChild(document.createTextNode(status));
	col2.style.fontSize = "11";
	col2.style.textAlign = "center";
	return row;
}
/*******************************************************************装备视窗**********************************************************/
function rowEquipstable(playeritem){//装备栏目
	var row = element("tr");
	if(playeritem){
		var col1 = row.appendChild(element("td", "EquipsPicture"));			// -----------TODO:EquipsPicture
		var col2 = row.appendChild(element("td"));
		col2.appendChild(document.createTextNode(playeritem.name));
		col2.style.fontSize = "12";
		col2.style.textAlign = "left";
	}
	else{//别忘记测试无装备时，跨列的情况，有标题在应该没事
		var col = row.appendChild(element("td"));
		col.colSpan = "2";
		col.appendChild(document.createTextNode("\u00A0\u00A0—\u00A0—\u00A0—\u00A0—\u00A0—\u00A0—\u00A0—"));			//-------------TODO接口
		col.style.fontSize = "12";
		col.style.textAlign = "left";
	}
	
	return row;
}
//角色装备栏
leaves.prototype.equipsdiv = function(){
	var equipsdiv = element("div", "equipsdiv");
	var equipstable = equipsdiv.appendChild(element("table", "equipstable"));
	equipstable.style.border = "3px ridge #000000";
	//标题Equips
	equipstable.appendChild(titleStatus("Equips", "2"));
	//武器
	equipstable.appendChild(rowEquipstable(this.level.player.equipspersonal.weapon));
	//防具
	equipstable.appendChild(rowEquipstable(this.level.player.equipspersonal.armor));
	//鞋子
	equipstable.appendChild(rowEquipstable(this.level.player.equipspersonal.shoes));
	//饰品
	equipstable.appendChild(rowEquipstable(this.level.player.equipspersonal.jewelry));

	return equipsdiv;
}
/*******************************************************************技能视窗**********************************************************/
//技能视窗
//只是一个demo
leaves.prototype.magicdiv = function(){
	var	magicdiv = element("div", "magicdiv");
	var magictable = magicdiv.appendChild(element("table", "magictable"));
	magictable.style.border = "3px ridge #000000";
	//Magic
	magictable.appendChild(titleStatus("Magic"));																//-------------TODO：技能数据
	magictable.appendChild(rowMagicStatus("助威"));
	magictable.appendChild(rowMagicStatus("挑拨"));
	magictable.appendChild(rowMagicStatus("旋风轮"));
	magictable.appendChild(rowMagicStatus("\u00A0"));
	//S-Magic
	magictable.appendChild(titleStatus("\u00A0S-Magic\u00A0"));
	magictable.appendChild(rowMagicStatus("烈焰无双击"));
	magictable.appendChild(rowMagicStatus("\u00A0"));
	return magicdiv;
}
function rowMagicStatus(test){	//技能栏目
	var row = element("tr");
	var col = row.appendChild(element("td"));
	col.appendChild(document.createTextNode(test));
	col.style.fontSize = "12";
	col.style.textAlign = "left";
	return row;
}

function titleStatus(test, span){	//标题栏目
	var row = element("tr");
	var col = row.appendChild(element("td"));
	if(test.length < 7)
		col.appendChild(document.createTextNode("-♦——" + test + "———"));
	else
		col.appendChild(document.createTextNode("-♦—" + test + "——"));
	if(span != 0)
		col.colSpan = span;
	col.style.color = "#CC9933";		//颜色
	col.style.fontWeight = "900";		//粗细
	col.style.fontSize = "13";
	col.style.textAlign = "center";
	return row;
}

ShowPlayer.prototype.clear = function() {
	this.root.parentNode.removeChild(this.root);
};
/*******************************************************************************************************************************************************/
/*******************************************************************************************************************************************************/
/*******************************************************************************************************************************************************/
/*************************************************************************大地图************************************************************************/
///TODO：代码重整

function element(name, className) {
	var elem = document.createElement(name);
	if (className) elem.className = className;
	return elem;
}

function DOMDisplay(parent, level) {
	//向parent添加新建的div节点
	this.wrap = parent.appendChild(element("div", "game"));
	this.level = level;

	//向div添加 drawBackground()
	this.wrap.appendChild(this.drawBackground());

	//画图
	this.actorLayer = null;
	this.drawFrame();
}

/*************************************************************************************************************************************************/
//大地图背景绘制
var scale = 15;	//一个grid的大小
DOMDisplay.prototype.drawBackground = function() {
	//新建一个table节点
	var table = element("table", "background");
	//给table设置大小属性
	table.style.width = this.level.width * scale + "px";
	table.style.height = this.level.height * scale + "px";
	//绘制
	this.level.grid.forEach(function(row) {
		var rowElement = table.appendChild(element("tr"));
		rowElement.style.height = scale + "px";
		row.forEach(function(type) {
			rowElement.appendChild(element("td", type));
		});
	});
	return table;
};

/*************************************************************************************************************************************************/
//绘制每帧
// clear it later
DOMDisplay.prototype.scrollPlayerIntoView = function() {
	var width = this.wrap.clientWidth;
	var height = this.wrap.clientHeight;
	var margin = width / 3;

	// The viewport
	var left = this.wrap.scrollLeft,
		right = left + width;
	var top = this.wrap.scrollTop,
		bottom = top + height;

	var player = this.level.player;
	var center = player.pos.plus(player.size.times(0.5)).times(scale);

	if (center.x < left + margin)
		this.wrap.scrollLeft = center.x - margin;
	else if (center.x > right - margin)
		this.wrap.scrollLeft = center.x + margin - width;
	if (center.y < top + margin)
		this.wrap.scrollTop = center.y - margin;
	else if (center.y > bottom - margin)
		this.wrap.scrollTop = center.y + margin - height;
};
DOMDisplay.prototype.drawActors = function() {
	var wrap = element("div");
	this.level.actors.forEach(function(actor) {
		var rect = wrap.appendChild(element("div", "actor " + actor.type));
		rect.style.width = actor.size.x * scale + "px";
		rect.style.height = actor.size.y * scale + "px";
		rect.style.left = actor.pos.x * scale + "px";
		rect.style.top = actor.pos.y * scale + "px";
	});
	return wrap;
}
DOMDisplay.prototype.drawFrame = function() {
	if (this.actorLayer)
		this.wrap.removeChild(this.actorLayer);
	this.actorLayer = this.wrap.appendChild(this.drawActors());
	this.wrap.className = "game " + (this.level.status || "");
	this.scrollPlayerIntoView();
};


//清空
DOMDisplay.prototype.clear = function() {
	this.wrap.parentNode.removeChild(this.wrap);
};





/********************************************************************************************************************************************/
/********************************************************************************************************************************************/
/********************************************************************************************************************************************/
/********************************************************************************************************************************************/
/****************************************************************总控函数********************************************************************/
///TODO：代码重整
//键盘事件部分
var arrowCodes = {
	37: "left",
	38: "up",
	39: "right",
	40: "down",
	192: "numbersign_apostrophe",
};
function trackKeys(codes) {
	var pressed = Object.create(null);

	//需要处理一些bug：比如只有弹起时才可以置0，需要在某些时候函数无法执行时手动置0
	function handler(event) {	
		if (codes.hasOwnProperty(event.keyCode)) {
			var down = event.type == "keydown";
			pressed[codes[event.keyCode]] = down;
			event.preventDefault();
		}
	}

	addEventListener("keydown", handler);	
	addEventListener("keyup", handler);
	return pressed;
}
var arrows = trackKeys(arrowCodes);

/****************************************************************************************************************************************/
//菜单栏显示控制逻辑
var tempkeys = 0;	//解决一个难缠的bug：该变量用来存储前一个keys值
var fightflag = 0;	//游戏状态标志：0为继续，1为暂停
function showPlayerPlan(keys){	
	if((!tempkeys)&&keys.numbersign_apostrophe){
		tempkeys = keys.numbersign_apostrophe;
		if(battlebind.root.style.visibility == "collapse")	{
		    displaybind.wrap.style.visibility = "collapse";
		    battlebind.root.style.visibility = "visible";
			//menubind.root.style.visibility = "visible";
			fightflag = 1;
		}
		else {
			displaybind.wrap.style.visibility = "visible";
			//menubind.root.style.visibility = "collapse";
			battlebind.root.style.visibility = "collapse";
			fightflag = 0;
		}
	}
	else tempkeys = keys.numbersign_apostrophe;
}
/*********************************/
///出现了严重的问题，需要时间解决
///战斗界面不能显示，且加入战斗界面会出现人物及主地图不能运动
///将menu换成battle也会出现这个问题
///所以可能是界面的逻辑出现错误需要改正
//function showBattlePlan() {
//    alert("aaa");
//}
function showBattlePlan() {
    if (battlebind.root.style.visibility == "collapse") {
        displaybind.wrap.style.visibility = "collapse";
        menubind.root.style.visibility = "collapse";
        battlebind.root.style.visibility = "visible";
    }
}


var time = 0;  
function runAnimation(frameFunc) {
	var lastTime = null;
	function frame(time) {
		var stop = false;
		if (lastTime != null) {
			var timeStep = Math.min(time - lastTime, 100) / 1000;
			showPlayerPlan(arrows);			//显示状态栏
			if(fightflag === 0)				//0:大地图状态
				stop = frameFunc(timeStep) === false;
			else if(fightflag ===1){		//1:属性界面状态

			}
		}
		lastTime = time;
		if (!stop)
			requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);
}

var displaybind;//大地图显示根目录绑定
var menubind;//按下~键显示的菜单
var battlebind;//战斗界面显示
function runLevel(level, Display, andThen) {	//关卡显示控制
	var display = new Display(document.body, level);
	//var menustatus = new ShowPlayer(document.body, level);
	var battlestatus = new ShowBattle(document.body, level);
	displaybind = display;
	//menubind = menustatus;
	battlebind = battlestatus;

	runAnimation(function(step) {
		level.animate(step, arrows);
		display.drawFrame(step);
		//新的游戏
		if (level.isFinished()) {
			display.clear();
			//menustatus.clear();		//同时清空属性界面树
			battlestatus.clear();
			arrows["up"] = arrows["down"] = arrows["left"] = arrows["right"] = 0;
			if (andThen)
				andThen(level.status);
			return false;
		}
	});
}

//总控函数:关卡逻辑
function runGame(plans, Display) {
    function startLevel(n) {  
        runLevel(new Level(plans[n]), Display, function(status) {  
            if (status == "lost")
                startLevel(0);
            else if (n < plans.length - 1)  
                startLevel(n + 1);  
            else  
                alert("You win!");  
        });  
    }  
    startLevel(0);
}  




runGame(LEVELS, DOMDisplay);
