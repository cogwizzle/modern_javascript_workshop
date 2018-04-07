import jQuery from 'jquery';
jQuery.fn.card = require('./jquery.card');

/**
 * On ready function.
 */
jQuery(function() {

  jQuery.get('./api/index.json', json => {

    var talks = Object.keys(json.schedule.conference.days[0].rooms);

    for (var i = 0, length = talks.length; i < length; i++) {
      var index = talks[i];
      var talk = json.schedule.conference.days[0].rooms[index][0];

      jQuery('.anchor').card({
        "title": talk.title,
        "name": talk.persons[0].full_public_name,
        "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAALVBMVEX///85lJRi1bQQEBCD7sUYSkpzrDG9/3Mxc3Ok1UGsADFSYinNzc3/amLuIDniOs+hAAABkklEQVRoge2Wy3KDMAxFLdtyZfP4/8+tdG1I2m3EtAsdJkOSxT3oQUJKQRAEQRAEQRD8LdvD8Vsv5YngpmxK11PzN7T2BXrvrT8gWPFKa6rYfATMP/O5aJdQg4+AalWFXDDXXFaXfHqkgipSjZwz2+kl8DBQJaQTkRqguQQ+e0Ry5RNqUKjcAgfDe/6boJvApYRbgCkQTcHM9yhBdGvqIlfZd1YJlZnvIeCTYLARVzlH2tkE3JqvgG5BehNo/qcC2U/cCRgBnWloCSpgYi9BGonWEDKNdBwQCJnBIT9JHoPygsY4DssHjCI+HkHJv7D+XAqH+4x1nhqas8x44VLQIS1AXw6/FEw62Du7JMGlQ2CGzwW2lTJu7vxZgosBPRnnoSDePs9FchJMxaLgvawu2RceArbcyVofDV5T8PnXtO1cy2k7ZetDngJdHTOUee24FZ4QYABWxyUgt3z0KCPN0k2QipAdXo9ekukS4B9NB7/jcMpnO3C1fJkSlsop/5UGU3rkqfqXKQiCIAiCIAiC4F/yDbSoDdqamtxjAAAAAElFTkSuQmCC",
        "abstract": talk.abstract
      });
    }
  })
});