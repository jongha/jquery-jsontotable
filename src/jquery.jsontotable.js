(function ($) {
	$.jsontotable = function(data, options) {
		var settings = $.extend({
			id: null, // target element id
			header: true,
			className: null,
		}, options);

		options = $.extend(settings, options);

		var obj = data;
		if(typeof obj === "string") {
			obj = $.parseJSON(obj);
		}

		if(options.id && obj.length) {

			var i, row;
			var table = $("<table></table>");

			if(options.className) {
				table.addClass(options.className);
			}

			$.fn.appendTr = function(rowData, isHeader) {
				var frameTag = (isHeader) ? "thead" : "tbody";
				var rowTag = (isHeader) ? "th" : "td";

				row = $("<tr></tr>");
				for(var key in rowData) {
					if(typeof rowData[key] !== "function"){ /* ADDED: this wrapper to account for people bootstrapping the ECMA Array model otherwise functions get converted to strings and show up in the object list / output */
						row.append("<" + rowTag + ">" + rowData[key] + "</" + rowTag + ">");
					}
				}

				if(isHeader){ /* ADDED: IF/ELSE to eliminate repetitive TBODY tags for every row */
					$(this).append($("<" + frameTag + "></" + frameTag + ">").append(row).append("<tbody></tbody>"));
				}else{
					$(this).find("tbody").append(row); //always append data rows to the first tbody tag
				}

				return this;
			};

			if(options.header) {
				table.appendTr(obj[0], true);
			}

			for (i = options.header ? 1 : 0; i < obj.length; i++) { /* MODIFIED: options.header ? 1 : 0 --- to eliminate duplicating header as the first row of data */
				table.appendTr(obj[i], false, i);
			}

			$(options.id).append(table);
		}

		return this;
	};
}(jQuery));
