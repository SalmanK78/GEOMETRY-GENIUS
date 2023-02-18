let areaCalculation = (firstElementId,secondElementId,text) =>{

    /* === Element Id === */

    const valueB = document.getElementById(firstElementId)
    const valueH = document.getElementById(secondElementId)

  /*   const text = document.getElementById(p3) */

    const value1 = parseFloat(valueB.value)
    const value2 = parseFloat(valueH.value)

    /* === error === */

    valueH.value = '';
    valueB.value = '';
    if(isNaN(value1) || isNaN(value2)){
        alert('Enter a Value')
        return;
    }
    
    /* === Create Element === */

    const div = document.createElement('div')
    const ol = document.getElementById('ol');
    const li = document.createElement('li');
    let btn = document.createElement('button');

    /* === Math Calculation === */
    
    const calc1 = 0.5 * value1 * value2;
    const calc2 = value1 * value2;
    const calc3 = (3.1416 * value1 * value2).toFixed(3);

    switch(text){
        case 'triangle' :
            div.innerHTML = calc1 +' cm<sup>2</sup>';
            break ;
        case 'rectangle' :
            div.innerHTML = calc2 +' cm<sup>2</sup>';
            break ;
        case 'parallelogram' :
            div.innerHTML = calc2 +' cm<sup>2</sup>';
            break ;
        case 'rhombus' :
            div.innerHTML = calc1 +' cm<sup>2</sup>';
            break ;
            case 'pentagon' :
            div.innerHTML = calc2 +' cm<sup>2</sup>';
            break ;
        case 'ellipse' :
            div.innerHTML = calc3 +' cm<sup>2</sup>';
            break ;
    }


    li.innerText = text;
    btn.innerHTML = 'Convert to m<sup>2</sup>';
    btn.classList.add('px-1','py-1','rounded','bg-sky-500','text-white')
    ol.appendChild(li)
    ol.appendChild(div)
    ol.appendChild(btn)
}