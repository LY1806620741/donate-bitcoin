// 在简书控制塔看到的，觉得挺不错，根据思想搞了一个
// console.log("%c ".concat(title, " %c ").concat(info, " "), "padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: ".concat("#606060", ";"), "padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ".concat(color, ";"));

console.badgelog=function(title,info,color="#1475b2",msg=""){
    console.log("%c ".concat(title, " %c ").concat(info, " %c").concat(msg, " "), "padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: ".concat("#606060", ";"), "padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ".concat(color, ";"), ""===msg?msg:"padding: 5px;border:none;color:none;background:none;");
}