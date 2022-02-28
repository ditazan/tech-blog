const { Post } = require("../models");

const postdata = [
  {
    title: "The Black Rat, Rattus Rattus",
    post_url:
      "https://i.natgeofe.com/n/73c00c4f-a746-4d0b-a006-ea5c5097d265/01-rat-friends-nationalgeographic_1162144.jpg",
    user_id: 1,
  },
  {
    title:
      "An elusive and hardy creature, the rat excels at damaging structures",
    post_url:
      "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1440,f_auto/50491001_kupidw.png",
    user_id: 1,
  },
  {
    title: "Man descends into the sewers to live among the rats",
    post_url:
      "https://www.aljazeera.com/wp-content/uploads/2022/01/000_8QP2QD.jpg?resize=770%2C513",
    user_id: 3,
  },
  {
    title:
      "His love for the rat became so great that he soon left the world of men",
    post_url:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MSDBJWR4FREKDJFKQ2SJD5BB5Y.jpg&w=1450",
    user_id: 3,
  },
  {
    title: "Pellentesque eget nunc.",
    post_url:
      "https://secure.img1-fg.wfcdn.com/im/02539660/resize-h755-w755%5Ecompr-r85/5545/55456121/Halloween+Evil+Rat.jpg",
    user_id: 3,
  },
  {
    title:
      "Rats retreat at the first sign of danger, only to attack anew once the threat passes",
    post_url:
      "https://www.science.org/do/10.1126/science.acz9863/abs/_20211215_on_rat_main.jpg",
    user_id: 2,
  },
  {
    title: "Unlike many of his peers, Ahnberg greatly respected the rat",
    post_url:
      "https://www.rocklinpestcontrol.com/wp-content/uploads/2019/11/vaun0815-2YBeaM09DVI-unsplash.jpg",
    user_id: 2,
  },
  {
    title: "Man finds many rat features similar to his own",
    post_url:
      "https://nc3rs.org.uk/sites/default/files/2021-11/Rat%20tickling%20with%20technician%20hand.png",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
