angular.module('app')
  .controller('ProductController', ProductController)

function ProductController(ProductService) {
  ProductService.get({
    id: "59c788969abe6c8fb9827b21"
  }, function () {
    //alert(result.name)
  })
  ProductService.update({
      "id": "59c788969abe6c8fb9827b21",
      "name": "BusinessFromAngular2"
    },
    function () {
      //alert('Business Saved')
    })
}
