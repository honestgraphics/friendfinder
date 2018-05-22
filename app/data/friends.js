var friends = [];

function save(friend) {
  var friendobj = {
    name: friend.name,
    photo: friend.photo,
    scores: [Number(friend.q1), Number(friend.q2), Number(friend.q3), Number(friend.q4), Number(friend.q5), Number(friend.q6), Number(friend.q7), Number(friend.q8), Number(friend.q9), Number(friend.q10)]
  }

  friends.push(friendobj);
  // console.log(friends);

  return checkCompatibility(friendobj);
}

function checkCompatibility(friend) {
  if (friends.length > 1) {
    var compatibleFriend = {};
    var leastSum;
    for (var i = 0; i < friends.length-1; i++) {
      var sum = getSum(friend, friends[i]);
      if (i === 0) {
        leastSum = sum;
        compatibleFriend = friends[0];
        continue;
      }

      if (sum < leastSum) {
        leastSum = sum;
        compatibleFriend = friends[i];
      }
    }

    return compatibleFriend;
  }
  return {}
}

function getSum(user, user2) {
  var sum = 0;
  for (var i = 0; i < user.scores.length; i++) {
    sum += Math.abs(user.scores[i] - user2.scores[i]);
  }

  return sum;
}



module.exports.friends = friends;
module.exports.save = save;