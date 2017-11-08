  angular.module('app')
    .controller('BusinessController', BusinessController)

  function BusinessController(BusinessService) {
    BusinessService.get({
      id: "59cf64c58bc1bb00062d2973"
    }, function () {
      //alert(result.name)
    })
    BusinessService.update({
        "id": "59cf64c58bc1bb00062d2973",
        "name": "BusinessFromAngular2",
        "address": "12 cape town",
        "telephone": "0834820044",
        "website": "soffo.co.za",
        "userId": "1"
      },
      function () {
        //alert('Business Saved')
      })
  }
