
 document.querySelector("#formsub").addEventListener("submit",myForm)

 function myForm(event){
     event.preventDefault()
     var arr= JSON.parse(localStorage.getItem("alldata")) || []
 

     var form=document.querySelector("#formsub")

     var obj={
        consumerName:form.consumerName.value,
        consumerNumber:form.consumerNumber.value,
         lastpaidDetail:form.lastpaidDetail.value,
         billAmount:form.billAmount.value,
         date:form.date.value,
         email:form.email.value,
         number:form.number.value
         
        
     }
arr.push(obj)
     console.log(arr)
     localStorage.setItem("alldata",JSON.stringify(arr))
     window.location.href = "./Display.html";
 }
