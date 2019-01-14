import { Base } from '../../utils/base.js';

class Repair extends Base {
  //构造函数
  constructor() {
    super();//基类构造函数
  }


  //提交请求表单
  PostSupplementCard(checkedValue,dateTime,contentText,callback){
    var params = {
      url: 'supplement',
      type: 'POST',
      data:{
        checkedValue: checkedValue,
        dateTime: dateTime,
        contentText: contentText
      },
      callback: function (data) {
        callback && callback(data);
      }
    };
    this.request(params);
  }




}
export {Repair};