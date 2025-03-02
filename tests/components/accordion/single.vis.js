const util = require('../../tests.util');

const url = util.testUrl(__filename);

module.exports = (viewports) => {
  return [
    {
      url, label: 'accordion-single',
      caption: 'Accordion single',
      viewports: [viewports.desktop, viewports.iphone, viewports.hdtv]
    }
  ];
}