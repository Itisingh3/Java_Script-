const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    // it prevents the default operation for example=> if form is by default sub,itted so, if we have to prevent it then we can use this function
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results= document.querySelector('#results');

    if(height==='' || height<0 || isNaN(height)){
        // alert("please provide a valid number")
        // OR 
        results.innerHTML=`Please give a valid height ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid height ${height}`;
    }
    else {
        const bmi =( weight / ((height * height)/10000)).toFixed(2);
        // show the result
        results.innerHTML=`<span>${bmi}</span>`;
    }

})