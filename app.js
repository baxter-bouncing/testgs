function testGS() {

const url = "https://script.googleusercontent.com/macros/echo?user_content_key=hSHH71XeoP9X18H2CUvD3EbEId4nvTuwkMJZfou4WM4ERwsB6-eJjzWlWHcNo_MIkeF5Fvj0KXIspKoV7tjpj9Wc_-bInMJ6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDvvlVnGxmPkhR4g7m7MXiHLbmaH4KsICyjNkBQBEMFkLxJ1AclEdOhmz65PknAiSKV-rV9yhQ38&lib=MvPG1sc-IdFrZFOKWcXF8bPLSJHYMIpDM";

fetch(url)
    .then(d => d.json())
    .then(d => {

       document.getElementById("app").textContent = d[0].status;


    });

}

document.getElementById("btn").addEventListener("click", testGS);