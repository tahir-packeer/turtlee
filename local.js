document.addEventListener('DOMContentLoaded',function(){
        sdate = document.getElementById("currdate").innerText;
        stime = document.getElementById("t1").innerText;
        sdur = document.getElementById("d1").innerText;
        sslad = document.getElementById("slAD1").innerText;
        sslch = document.getElementById("slCH1").innerText;
        sfoad = document.getElementById("foAD1").innerText;
        sfoch = document.getElementById("foCH1").innerText;
        sinf = document.getElementById("inf1").innerText;
        stotal = document.getElementById("total").innerText;
        btnpur = document.getElementById("purchaseButton");
        sname = document.getElementById("Name");
        smobile = document.getElementById("mobile");
        semail = document.getElementById("email");
        sgen = document.getElementById("gender");
        
        function updateSummary(){
            sdate = localStorage.getItem('Date');
            stime = localStorage.getItem('Time');
            sdur = localStorage.getItem('Duration')
        }
        updateSummary();
}); 