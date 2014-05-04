# jQuery-JSONtoTable
[![Build Status](https://travis-ci.org/jongha/jquery-jsontotable.png?branch=master)](https://travis-ci.org/jongha/jquery-jsontotable)
[![Coverage Status](https://coveralls.io/repos/jongha/jquery-jsontotable/badge.png)](https://coveralls.io/r/jongha/jquery-jsontotable)
[![Dependency Status](https://gemnasium.com/jongha/jquery-jsontotable.png)](https://gemnasium.com/jongha/jquery-jsontotable)

This plugin can convert JSON data type to table for html. JSON, or JavaScript Object Notation, is an open standard format that uses human-readable text to transmit data objects consisting of attribute–value pairs. It is used primarily to transmit data between a server and web application, as an alternative to XML. In these reasons todays many applications use JSON data format for data transferring. And you need JSON to table converter for html display. Let's fork and use this. Thanks.

## Screenshot

![Screenshot](https://raw.github.com/jongha/jquery-jsontotable/master/demo/screenshot.png)

## Usage

This sample is how to use this plugin using an Array type. 'header' key is an option. Default value is 'true'. This option indicates whether a header of the table is showing or hiding.

```
<div id="jsontotable" class="jsontotable"></div>

var data = [[1, 2, 3], [1, 2, 3]];
$.jsontotable(data, { id: '#jsontotable', header: false });
```

And the following is how to use this plugin using an Object type.

```
<div id="jsontotable" class="jsontotable"></div>

var data = [{'Title1': 'Hello', 'Title2': 'Fine', 'Title3': 'Thank you'}, {'Title1': 'Hello', 'Title2': 'Fine', 'Title3': 'Thank you'}];
$.jsontotable(data, { id: '#jsontotable', header: false });
```

And you can also use the string. The following is how to use this plugin using an String type.

```
<div id="jsontotable" class="jsontotable"></div>

var data = '[[1, 2, 3], [1, 2, 3]]';
$.jsontotable(data, { id: '#jsontotable', header: false });
```

And you can also use the Object with custom attributes.

```
<div id="jsontotable" class="jsontotable"></div>

var data = [ { id: 'header', class: 'header-class', _data:['1', '2', '3'] }, {'Title1': '1', 'Title2': '2', 'Title3': '3'} ];
$.jsontotable(data, { id: '#jsontotable', header: false });
```

If you want to use the bootstrap style you can add 'className' key as follows.

```
<link href="bootstrap.min.css" rel="stylesheet">

$.jsontotable(data, { id: '#jsontotable', className: 'table table-hover' });
```

## License

jQuery-JSONtoTable is available under the terms of the [MIT License](https://github.com/jongha/jquery-jsontotable/blob/master/LICENSE).
