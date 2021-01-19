const { v4 } = require("uuid");
const uuid = v4;

class Comment {
  constructor() {
    this.commentName = "爱读书的赫敏";
    this.content =
      "你肯定这是一道咒语吗？看来不怎么样，是吧？我在家里试过几道简单的咒语，只是为了练习，而且都起作用了。我家没有一个人懂魔法，所以当我收到录取通知书时，我吃惊极了，但又特别高兴，因为，我的意思是说，据我所知，这是一所最优秀的魔法学校——所有的课本我都背会了，当然，我只希望这能够用——我叫赫敏·格兰杰，顺便问一句，你们叫什么名字？";
    this.id = uuid();
    this.profilePhoto =
      "https://images5.fanpop.com/image/photos/30600000/Hermione-Philosopher-s-stone-hermione-granger-30651907-500-213.jpg";
    this.releaseDate = "2021/01/01";
    this.thumbUpCount = Math.floor(Math.random() * 10000);
    this.thumbUped = Math.random() > 0.5;
    this.userId = uuid();
  }
}

function generateComments(number = 1) {
  let comments = [];
  for (let i = 0; i < number; i++) {
    comments.push(new Comment());
  }
  return comments;
}

module.exports = {
  ss: true,
  dt: {
    bookCommentCount: 233,
    enterpriseBookCommentItemVos: generateComments(10),
  },
};
