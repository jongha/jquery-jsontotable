(function($) {
  $.jsontotable = function(data, options) {
    var settings = $.extend({
      id: null, // target element id
      header: true,
      className: null
    }, options);

    options = $.extend(settings, options);

    var obj = data;
    if (typeof obj === "string") {
      obj = $.parseJSON(obj);
    }

    if (options.id && obj.length) {

      var i, row;
      var table = $("<table></table>");

      if (options.className) {
        table.addClass(options.className);
      }

      $.fn.appendTr = function(rowData, isHeader) {
        var frameTag = isHeader ? "thead" : "tbody";
        var rowTag = isHeader ? "th" : "td";
        var rowi,key,cellObj,cell,j;

        /* if rowData is object, set the key and value as tr's properties */
        if ($.isPlainObject(rowData) && rowData._data) {
          row = '<tr';

          for (rowi in rowData) {
            if (rowi !== '_data') {
              row += ' ' + rowi + '="' + rowData[rowi] + '"';
            }
          }
          row += '></tr>';
          rowData = rowData._data;

        } else {
          row = "<tr></tr>";
        }

        row = $(row);

        for (key in rowData) {
          cellObj = rowData[key];

          if (typeof cellObj !== "function") { /* ADDED: this wrapper to account for people bootstrapping the ECMA Array model otherwise functions get converted to strings and show up in the object list / output */

            cell = '';

            /* if cellObj is object, set the key and value as cell's properties */
            if ($.isPlainObject(cellObj) && cellObj._data) {
              cell = "<" + rowTag;

              for (j in cellObj) {
                if (j !== '_data') {
                  cell += ' ' + j + '="' + cellObj[j] + '"';
                }
              }

              cellObj = cellObj._data;

              cell += '>' + cellObj + "</" + rowTag + ">";

            } else {
              cell = "<" + rowTag + ">" + cellObj + "</" + rowTag + ">";
            }

            row.append(cell);
          }
        }

        if (isHeader) { /* ADDED: IF/ELSE to eliminate repetitive TBODY tags for every row */
          $(this).append($("<" + frameTag + "></" + frameTag + ">").append(row));

        } else {
          var tbody = $(this).find("tbody");
          if (tbody.length === 0) {
            tbody = $(this).append("<tbody></tbody>");
          }

          tbody.append(row); //always append data rows to the first tbody tag
        }

        return this;
      };

      // from http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-an-object
      var clone = function (obj) {
        if(obj == null || typeof(obj) !== "object") {
          return obj;
        }

        var temp = obj.constructor(); // changed
        for(var key in obj) {
            if(obj.hasOwnProperty(key)) {
                temp[key] = clone(obj[key]);
            }
        }
        return temp;
      };

      var dictType = false, headerObj = {}, key = null;
      if (options.header) {
        headerObj = obj[0]._data ? clone(obj[0]._data) : clone(obj[0]);
        
        if (headerObj.toString() === "[object Object]") { // data type is dictonary
          dictType = true;
          for (key in headerObj) { headerObj[key] = key; }
        }

        table.appendTr(headerObj, true);
      }

      /**
      /* MODIFIED: options.header ? 1 : 0
      /* to eliminate duplicating header as the first row of data 
      **/
      for (i = (options.header ? 1 : 0); i < obj.length; i++) { 
        if (dictType && headerObj) {
          var bodyItem = {};
          for (key in headerObj) {
            bodyItem[key] = (obj[i] && obj[i][key] != null) ? obj[i][key] : "";
          }
          
          table.appendTr(bodyItem, false);
          
        }else {
          table.appendTr(obj[i], false);
        }
      }

      $(options.id).append(table);
    }

    return this;
  };
}(jQuery));
