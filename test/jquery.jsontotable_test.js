(function($) {
  test("Test1 for Array", function() {
    var target = $("#test1");
    var arr = [[1, 2, 3]];

    target.empty();
    $.jsontotable(arr, { id: "#test1", header: false });
    equal(target.find("thead").length, 0);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 0);
    equal(target.find("tr").length, 1);
    equal(target.find("td").length, 3);
    equal(target.text(), arr[0].join(""));

    target.empty();
    $.jsontotable(arr, { id: "#test1", header: true });
    equal(target.find("thead").length, 1);
    equal(target.find("tbody").length, 0);
    equal(target.find("th").length, 3);
    equal(target.find("tr").length, 1);
    equal(target.find("td").length, 0);
    equal(target.text(), arr[0].join(""));

    arr = [[1, 2, 3], [1, 2, 3]];
    target.empty();
    $.jsontotable(arr, { id: "#test1", header: false });
    equal(target.find("thead").length, 0);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 0);
    equal(target.find("tr").length, 2);
    equal(target.find("td").length, 6);
    equal(target.text(), arr[0].join("") + arr[1].join(""));

    target.empty();
    $.jsontotable(arr, { id: "#test1", header: true });
    equal(target.find("thead").length, 1);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 3);
    equal(target.find("tr").length, 2);
    equal(target.find("td").length, 3);
    equal(target.text(), arr[0].join("") + arr[1].join(""));

    target.empty();
    $.jsontotable(arr, { id: "#test1" });
    equal(target.find("thead").length, 1);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 3);
    equal(target.find("tr").length, 2);
    equal(target.find("td").length, 3);
    equal(target.text(), arr[0].join("") + arr[1].join(""));
  });

  test("Test2 for String", function() {
    var target = $("#test2");
    var str = "[[1, 2, 3]]";

    target.empty();
    $.jsontotable(str, { id: "#test2", header: false });
    equal(target.find("thead").length, 0);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 0);
    equal(target.find("tr").length, 1);
    equal(target.find("td").length, 3);
    equal(target.text(), str.replace(/[\[\], ]/gi, ""));

    target.empty();
    $.jsontotable(str, { id: "#test2", header: true });
    equal(target.find("thead").length, 1);
    equal(target.find("tbody").length, 0);
    equal(target.find("th").length, 3);
    equal(target.find("tr").length, 1);
    equal(target.find("td").length, 0);
    equal(target.text(), str.replace(/[\[\], ]/gi, ""));


    str = "[[1, 2, 3], [1, 2, 3]]";
    target.empty();
    $.jsontotable(str, { id: "#test2", header: false });
    equal(target.find("thead").length, 0);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 0);
    equal(target.find("tr").length, 2);
    equal(target.find("td").length, 6);
    equal(target.text(), str.replace(/[\[\], ]/gi, ""));

    target.empty();
    $.jsontotable(str, { id: "#test2", header: true });
    equal(target.find("thead").length, 1);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 3);
    equal(target.find("tr").length, 2);
    equal(target.find("td").length, 3);
    equal(target.text(), str.replace(/[\[\], ]/gi, ""));

    target.empty();
    $.jsontotable(str, { id: "#test2" });
    equal(target.find("thead").length, 1);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 3);
    equal(target.find("tr").length, 2);
    equal(target.find("td").length, 3);
    equal(target.text(), str.replace(/[\[\], ]/gi, ""));
  });

  test("Test3 for Dictionary", function() {
    var target = $("#test3");
    var str = '[{ "a": 1, "b": 2, "c": 3 }]';

    target.empty();
    $.jsontotable(str, { id: "#test3", header: false });
    equal(target.find("thead").length, 0);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 0);
    equal(target.find("tr").length, 1);
    equal(target.find("td").length, 3);
    equal(target.text(), str.replace(/[\{\}\"\[\], abc:]/gi, ""));

    target.empty();
    $.jsontotable(str, { id: "#test3", header: true });
    equal(target.find("thead").length, 1);
    equal(target.find("tbody").length, 0);
    equal(target.find("th").length, 3);
    equal(target.find("tr").length, 1);
    equal(target.find("td").length, 0);

    str = '[{ "a": 1, "b": 2, "c": 3 }, { "a": 1, "b": 2, "c": 3 }]';

    target.empty();
    $.jsontotable(str, { id: "#test3", header: false });
    equal(target.find("thead").length, 0);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 0);
    equal(target.find("tr").length, 2);
    equal(target.find("td").length, 6);

    target.empty();
    $.jsontotable(str, { id: "#test3", header: true });
    equal(target.find("thead").length, 1);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 3);
    equal(target.find("tr").length, 2);
    equal(target.find("td").length, 3);

    target.empty();
    $.jsontotable(str, { id: "#test3" });
    equal(target.find("thead").length, 1);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 3);
    equal(target.find("tr").length, 2);
    equal(target.find("td").length, 3);
  });

  test("Test4 for _data Attribute", function() {
    var target = $("#test4");
    var arr = [{id:'header', _data:['one', 'two', 'three']}, [1, 2, 3]];

    target.empty();
    $.jsontotable(arr, { id: "#test4", header: false });
    equal(target.find("thead").length, 0);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 0);
    equal(target.find("tr").length, 2);
    equal(target.find("td").length, 6);
    equal(target.text(), arr[0]._data.join("") + arr[1].join(""));

    target.empty();
    $.jsontotable(arr, { id: "#test4", header: true });
    equal(target.find("thead").length, 1);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 3);
    equal(target.find("tr").length, 2);
    equal(target.find("td").length, 3);
    equal(target.text(), arr[0]._data.join("") + arr[1].join(""));
  });
  
  test("Test5 for Auto Header", function() {
    var target = $("#test5");
    var data = [
      {"Date":"2012-05-02","Weight":"76.20"},{"Date":"2012-05-22","Weight":"75.50"},{"Date":"2012-07-02","Weight":"73.80"},
      {"Date":"2012-08-06","Weight":"73.00"},{"Date":"2012-10-10","Weight":"70.50"},{"Date":"2013-01-02","Weight":"72.50"}
    ];
    
    target.empty();
    $.jsontotable(data, { id: "#test5", header: true });
    equal(target.find("thead").length, 1);
    equal(target.find("tbody").length, 1);
    equal(target.find("th").length, 2);
    equal(target.find("tr").length, 6);
    equal(target.find("td").length, 10);
  });
}(jQuery));
