export function onReadFile($parse) {
  'ngInject';
  return {
    restrict: 'A',
    scope: false,
    link: function(scope, element, attrs) {
      var fn;
      fn = $parse(attrs.onReadFile);
      return element.on('change', function(onChangeEvent) {
        var reader;
        reader = new FileReader();
        reader.onload = function(onLoadEvent) {
          return scope.$apply(function() {
            return fn(scope, {
              $fileContent: onLoadEvent.target.result
            });
          });
        };
        return reader.readAsBinaryString((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
      });
    }
  };
}
