
wishList = []



btnSubmitItem.onclick=function(){
  let anItem = inptItem.value
  wishList.push(anItem)
  lblWishList.value = wishList
}
