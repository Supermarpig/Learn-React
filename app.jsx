import React from 'react';
import ReactDOM from 'react-dom';

// //建立一個DOM物件
// let element = <h1>Helloooooooooooooo, GQSeeeeeeeeeeeeeeeeeM!</h1>

// //使用ReactDOM.render把剛建立的物件element插入目標DOM中
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
//宣告一個匿名function
const displayTime = () =>{
  //建立一個顯示目前時間的組件
  let nowTime = (
    <div>
      /*在組件裡要註解得前後註解標記，下方則是利用大括號加入JS語法*/
      <span>現在時間：{new Date().toLocaleTimeString()}</span>
    </div>
  )
  //將上方的組件放進id為root的element中
  ReactDOM.render(nowTime,document.getElementById('root'))
}

//每隔一秒重新取得時間放到畫面上
setInterval(displayTime,1000)