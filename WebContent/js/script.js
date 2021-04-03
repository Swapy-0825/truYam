function myFunction() {
  confirm("Item is added into the cart.");
}
function mydelete() {
  alert("Item is deleted from the Cart successfully.");
}
function validate()
{

   if( document.form.name.value == "" )
   {
     alert( "Please provide name!!!" );
     document.form.name.focus() ;
     return false;
   }
   if( document.form.price.value == "" )
   {
     alert( "Please provide Price!!!" );
     document.form.price.focus() ;
     return false;
   }
 if( document.form.category.value == "-1" )
   {
     alert( "Please provide category!" );
     return false;
   }
 else{
	alert("Changes Saved!!!");
}
   return( true );
} 

