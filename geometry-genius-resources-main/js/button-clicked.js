document.getElementById('triangle-calc').addEventListener('click',function(){
    areaCalculation('triangle-value-b','triangel-value-h','triangle');
});
document.getElementById('rectangle-calc').addEventListener('click',function(){
    areaCalculation('rectangle-value-w','rectangle-value-l','rectangle');
});
document.getElementById('parallelogram-calc').addEventListener('click',function(){
    areaCalculation('parallelogram-value-b','parallelogram-value-h','parallelogram')
});
document.getElementById('rhombus-calc').addEventListener('click',function(){
    areaCalculation('rhombus-value-d1','rhombus-value-d2','parallelogram')
});
document.getElementById('pentagon-calc').addEventListener('click',function(){
    areaCalculation('pentagon-value-p','pentagon-value-b','pentagon')
});
document.getElementById('ellipse-calc').addEventListener('click',function(){
    areaCalculation('ellipse-value-a','ellipse-value-b','ellipse')
});