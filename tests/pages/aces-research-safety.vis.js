const util = require('../tests.util');

module.exports = (viewports) => {
  return [
    {
      'label': 'page-aces-safety',
      'url': util.testUrl(__filename),
      'viewports': [viewports.desktop, viewports.iphone]
    }
  ];
}