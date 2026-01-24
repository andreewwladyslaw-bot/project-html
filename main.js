const ilosc = document.querySelector("#ilosc");
const klient = document.getElementById("klient");
const btf = document.querySelector("#kalkulacja");
const wynik = document.querySelector("#wynik");

const kalkulacja = () => {
    if(ilosc.value > 0 && ilosc.value <= 40 && klient.checked==false)
    {
        wynik.innerHTML = ilosc.value * 3 + "zł";
    }
    else if(ilosc.value > 40 && klient.checked ==false)
    {
        wynik.innerHTML = ilosc.value * 2 + "zł";
    }
    else if(ilosc.value > 40 && klient.checked ==true)
    {
        wynik.innerHTML = (ilosc.value * 2) - 0.3 + "zł";
    }
    else if(ilosc.value > 0 && ilosc.value <= 40 && klient.checked==true)
    {
        wynik.innerHTML = (ilosc.value * 3) - 0.3 + "zł";
    }
    else{
        alert("Dane nie pasują");
    }
}
btf.addEventListener("click",kalkulacja);