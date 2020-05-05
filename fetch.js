URL='https:restcountries.eu/rest/v2/all';
let arr=[];


 function getDetails(){
    

        const response = fetch(URL)
          .then(responses => responses.json())
          .then(data=>{
              //console.log(data);
              let  name="";
              let flag="";
              let currency="";
              data.map(resposeData=>{
                  //console.log(countryname.name);
                  //console.log(countryname.flag);
                  
                  name+=`<div class='cntry-name-currency'>
                  
                  <div>
                  <h5>${resposeData.name}</h5>
                  </div>
                    
                  
                  <div>
                  <img src=${resposeData.flag}>
                  </div>
                      
                  
                  <div>
                  <h5>${resposeData.currencies[0].name}</h5>
                  </div>

                  </div>` 
                
                
              });
             
              document.getElementById('name').innerHTML=name;
              //document.getElementById('flag1').innerHTML=flag;
              //document.getElementById("currency").innerHTML=currency;
              
          });
}
getDetails();

