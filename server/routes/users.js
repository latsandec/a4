var express = require('express');
var router = express.Router();

var nextId = 4;
var users = [
  {
  'id': '1',
      'name': 'Fried Rice',
      'description': 'rice, egg, carrot, green pea',
      'price': '15',
      'url': 'https://www.allrecipes.com/thmb/-695p6NRUJBW08joTDDq9xrMiyM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/79543-fried-rice-restaurant-style-DDMFS-4x3-b79a6ea27e0344399257ca1df67ca1cd.jpg'
  },
  {
  'id': '2',
      'name': 'Miso Soup',
      'description': 'miso, tofu, green onion',
      'price': '9',
      'url': 'https://www.allrecipes.com/thmb/q8mj4aSbHY2rJgky7JYEpWYkpQo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/13107-miso-soup-Melissa-Goff-1x1-1-2962011c74e340fd8afbfaf43ac4b6f2.jpg'
     },
     {
  'id': '3',
      'name': 'Bake Potato',
      'description': 'potato, cheese, butter',
      'price': '12',
      'url': 'https://www.allrecipes.com/thmb/LzDye6-jP60bHuDufo6GqwGuBR0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/85337-microwave-baked-potato-DDMFS-4x3-f10fc0f5cd9b4278b45204068803f61e.jpg'
     }
 ];

/* GET users listing. */
router.get('/', function(req, res, next) {
  const userList = users.map(user => ({
    'id':user.id,
    'name':user.name,
    'url':user.url
  }));
  res.send(userList);
});

router.get('/:userId', function(req, res, next) {
  const userId = req.params.userId;
  const foundUser = users.find(user => user.id == userId);
  if (!foundUser) {
    res.status(404);
    res.send("Menu does not exist.");
  }
  return res.send(foundUser);
});

router.post('/', function(req, res, next) {
  const newUser = req.body;
  newUser.id = '' + nextId;
  nextId++;
  users.push(newUser);
  return res.send(newUser.id);
});

module.exports = router;
