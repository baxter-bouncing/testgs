function testGS() {
    const url = "https://script.google.com/macros/s/AKfycby62jOdGnnfx-GhqPEPFDsEGPhg165LOoAsiX8ObHzPd07Jwrho/exec";

fetch(url)
    .then(d => d.json())
    .then(d => {

       document.getElementById("app").textContent = d[0].status;


    });

}



function addGS() {

    const url = "https://script.google.com/macros/s/AKfycby62jOdGnnfx-GhqPEPFDsEGPhg165LOoAsiX8ObHzPd07Jwrho/exec";

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
