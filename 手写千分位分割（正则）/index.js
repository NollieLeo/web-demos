'12312312311'.replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) { return s + ',' })
