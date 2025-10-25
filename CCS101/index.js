let ansName;

document.getElementById("submit").onclick = function(){
    ansName = document.getElementById("name").value;
    document.getElementById("ans-name").textContent = '$(ansName)'
}