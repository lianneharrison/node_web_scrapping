var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var baseUrl = "http://substack.net/images/";

function getAllImagesUrl(urls, then) {

  var url = urls[0];
  //urls.remove(0);
  // remove url from folder list

  request(url, function(err, response, html) {
    if (err) {
      console.log("We have encounter an error")
    } else {
      var $ = cheerio.load(html, {normalizeWhitespace: true})
    }


    var rows = $('tr').text().split('(');
    var fullFile = '';


    rows.each(function(i, element) {
      //
      // var split = row.split(')');
      // var filePermission = split[0];
      // var nameSizeType = split[1];
      // var fileName = '';
      // var fileType = '';
      // var absoluteURL = '';

      // if (nameSizeType !== undefined) {
      //   fileName = nameSizeType.split(/\d+\.*\d*[a-z]+/);
      //   fileName = fileName[1];
      //   console.log(fileName)


        // if (indexOfK !== - 1) {
        //   fileName = nameSizeType.substring(indexOfK + 1);
          // var lastIndexOfTheDot = fileName.lastIndexOf('.');
          // if (lastIndexOfTheDot !== - 1) {
          //   fileType = fileName.substring(lastIndexOfTheDot + 1);
          // };
          // absoluteURL = url + fileName;
        // };
      } //else {
      //   //urls.push(folderUrl);
      //     // handle folders (add to folder list)
      // }
      // fullFile += filePermission + ',' + absoluteURL + ',' + fileType + '\n';

    });
    // if (folder.length > 0){
    //   getAllImagesUrl(urls);
    // } else {
    //   then(fullFile);
    // }
  });
};

getAllImagesUrl([baseUrl], function(data) {

  fs.writeFile('images.csv', data, function (err, data) {
    if (err) {
      console.log("There's an error");
    } else {
      console.log("It's saved!");
    }
  });
});
