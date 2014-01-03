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
                    row.append("<" + rowTag + ">" + rowData[key] + "</" + rowTag + ">");
                }

                $(this).append($("<" + frameTag + "></" + frameTag + ">").append(row));
                return this;
            };

            if(options.header) {
                table.appendTr(obj[0], true);
            }

            for (i = 0; i < obj.length; i++) {
                table.appendTr(obj[i]);
            }

            $(options.id).append(table);
        }

        return this;
    };
}(jQuery));
