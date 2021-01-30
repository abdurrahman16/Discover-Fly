document.getElementById('firstClass-Increase').addEventListener('click', function(){
    const firstClassInput = document.getElementById('firstClass-count');
    const fCount = parseInt(firstClassInput.value);
     const fClassNewCount = fCount + 1;
     firstClassInput.value = fClassNewCount;
    var fTotal = fClassNewCount * 150;

     console.log(fTotal);
     
    });


    document.getElementById('firstClass-decrease').addEventListener('click', function(){
        const firstClassInput = document.getElementById('firstClass-count');
        const fCount = parseInt(firstClassInput.value);
         const fClassNewCount = fCount - 1;
         firstClassInput.value = fClassNewCount;
         var fTotal = fClassNewCount * 150;
         
        
         
        });



/////////////////////////////////


document.getElementById('economyClass-Increase').addEventListener('click', function(){
            const ecoClassInput = document.getElementById('economyClass-count');
            const ecoCount = parseInt(ecoClassInput.value);
             const ecoClassNewCount = ecoCount + 1;
             ecoClassInput.value = ecoClassNewCount;
             var ecoTotal = ecoClassNewCount * 100;
            
             
            });
        
        
            document.getElementById('economyClass-decrease').addEventListener('click', function(){
                const ecoClassInput = document.getElementById('economyClass-count');
                const ecoCount = parseInt(ecoClassInput.value);
                 const ecoClassNewCount = ecoCount - 1;
                 ecoClassInput.value = ecoClassNewCount;
                 var ecoTotal = ecoClassNewCount * 100;
                
                // // autoMation(true);
              
                 
                });


   function finalBill(){
    const firstClassInput = document.getElementById('firstClass-count');
    const fCount = parseInt(firstClassInput.value);

    const ecoClassInput = document.getElementById('economyClass-count');
    const ecoCount = parseInt(ecoClassInput.value);

var finalCost = fCount*150 + ecoCount*100;
 var subTotalBill = parseInt(finalCost);
document.getElementById('sub-Total').innerText = '$'+ subTotalBill;

  }             
  
        















    // document.getElementById('case-decrease').addEventListener('click',function(){
    //     // const caseInput = document.getElementById('case-count');
    //     // const caseCount = parseInt(caseInput.value);
    //     // const caseNewCount = caseCount - 1;
    //     // caseInput.value = caseNewCount
    //     // const caseTotal = caseNewCount * 59;
    //     // document.getElementById('case-total').innerText='$'+caseTotal;
    //     autoMation(false);
    
    // });