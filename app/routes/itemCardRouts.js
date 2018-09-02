const itemCardController = require('../controller/itemController');

module.exports = app => {
  app.route('/item_card/created')
    .post(itemCardController.add);

  app.route('/item_card/get_my')
    .get(itemCardController.getMy);

  app.route('/item_card/edit')
    .post(itemCardController.edditItem);

  app.route('/item_card')
    .get(itemCardController.getAll);
};
