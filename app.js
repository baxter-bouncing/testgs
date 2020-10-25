function testGS() {
var url = "https://script.googleusercontent.com/macros/echo?user_content_key=0s7fD_pTMDJSbP-_kCNmKuLGq7IEOjcbkQsVQ6bJ-XmbCNU2IGjMay6mszWFVqeM0T2qo0VUJgqGRqIjI1FISoATxurqYcKFm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOQ3a7VIZY1YB-_aSAHhWLcgT49K6KgVN_U7LiEG-UL7GiqzjesouW24tkgnH9X6eQ&lib=MN5mtiBr4FJ__o3jOdxIUl9tiVCmZWsC4"
    //"https://script.google.com/macros/s/AKfycby62jOdGnnfx-GhqPEPFDsEGPhg165LOoAsiX8ObHzPd07Jwrho/exec";
      //"https://script.googleusercontent.com/macros/echo?user_content_key=BnfkN5oSrKlffUiIDcGNfBEwEXRymMLlhoKcaNd8hwzUA8BcYoTdUVqX5_jtKBGdm_Fqg63tpbyK4U-RbJb2a2VKb17UpS7um5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOQ3a7VIZY1YB-_aSAHhWLcgT49K6KgVN_U7LiEG-UL7GiqzjesouW24tkgnH9X6eQ&lib=MN5mtiBr4FJ__o3jOdxIUl9tiVCmZWsC4";
      //"https://script.googleusercontent.com/macros/echo?user_content_key=hSHH71XeoP9X18H2CUvD3EbEId4nvTuwkMJZfou4WM4ERwsB6-eJjzWlWHcNo_MIkeF5Fvj0KXIspKoV7tjpj9Wc_-bInMJ6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDvvlVnGxmPkhR4g7m7MXiHLbmaH4KsICyjNkBQBEMFkLxJ1AclEdOhmz65PknAiSKV-rV9yhQ38&lib=MvPG1sc-IdFrZFOKWcXF8bPLSJHYMIpDM";

fetch(url)
    .then(d => d.json())
    .then(d => {

       document.getElementById("app").textContent = d[0].status;


    });

}



function addGS() {

    var url = "https://script.google.com/macros/s/AKfycby62jOdGnnfx-GhqPEPFDsEGPhg165LOoAsiX8ObHzPd07Jwrho/exec";
          //"https://script.google.com/macros/s/AKfycbzz6tCnBGakoqexU1N0COXgRA3-s83BydQs6X5qw8S4mywBx6w/exec";
    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify({"Subcontractor":"Rusty Pipe Plumbing","Job_Name":"BPlaza","Description_of_Work":"Patch Roof","Date_of_Work":"10/29/2020","Amount":"500.00"})
    });
 
    }


    document.getElementById("btn").addEventListener("click", testGS);

    
    document.getElementById("btn2").addEventListener("click", addGS);
