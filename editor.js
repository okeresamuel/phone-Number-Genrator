   const input = document.getElementById("input")
   const btn = document.querySelector(".btn")
   const real_phone_num = document.getElementById("real_phone_num")
   const cpNumber = document.querySelector(".cpNumber")
   const phoneIcon = document.querySelector(".phoneIcon")
   const list_num_icon = document.querySelector(".list_num_icon")
   const number_list   = document.querySelector(".number_list")
   input.value === "" ? cpNumber.style.display="none" : ""

    function createPhoneNumber(nums){
    //we need to get the firstThree numbers and last four
    let firstThree = nums.slice(0,3)
    let lastFour =nums.slice(-4)
    
    //next we minus the last four to be able to get the middleNum then we push it to the empty array called middle
    let middle = []
    for(let i = 0; i < nums.length -4; i++){
        let middleNum = nums[i]
        middle.push(middleNum)
    }
    //joining all numbers back to a string and also slicing out the middle numbers
    let one = firstThree
    let two = middle.slice(-3).join("")
    let three = lastFour
    return `(${one}) ${two}-${three}`
    }

   //Alerts  
    function lessThanTen(){
      swal({ title: " input should not be less or greater than 10 ", text: "", icon: "warning", buttons: true, dangerMode: true, })
      }
    function EmptyInputOne(){
      swal({ title: "please enter something", text: "", icon: "warning", buttons: true, dangerMode: true, })}
   
    // The caller function.
      function preventDef(e){
      e.preventDefault()
      if( input.value === "" ){
        EmptyInputOne()
      }else{
      // check if input is less than ten
      let i = 0
      function executeInputChecker(){
       if (input.value.length  <  10 || input.value.length > 10 ){
        lessThanTen()
       }else{
        real_phone_num.value= createPhoneNumber(input.value).trim().split().join("")
        cpNumber.style.display="block" 
        phoneIcon.style.fill="green"
       }
       }
       executeInputChecker()
       }

      
       // reset input value
        setTimeout(()=>{input.value= ""},2000)
        cpNumber.addEventListener("click", (e)=>{
        e.preventDefault()
        navigator.clipboard.writeText(real_phone_num.value);
        cpNumber.innerText="copied Number" 
    
        // reset btn inner text
        setTimeout(()=>{ cpNumber.innerText="copy Number", real_phone_num.value= ""}, 2000)
        if(real_phone_num.value === "" ){
          EmptyInputOne() 
          cpNumber.innerText="copy Number"
        } 
        })
       
        //hide and show phoneIcon
         form.addEventListener("click", ()=>{
          phoneIcon.classList.toggle("phoneIcon")
         })
      }
      btn.addEventListener("click", preventDef)
    
   
      // show save numbers
      list_num_icon.addEventListener("click", ()=>{
        number_list.classList.toggle("hidesavedNum")
      })