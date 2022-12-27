


// name && age || login with java.script

// var name = 'suhayb'
// var age  = '19'

// function chrck(){
// var input1 = document.getElementById('input1').value
// var input2 = document.getElementById('input2').value
// if(input1 == name && input2 == age){
// alert('rasta')
// }
// else{
//     alert('halaya')
// }
// }



// name && age || Login with J.query

// var name = 'suhayb'
// var age = '19'

// $(document).on('click''#id',function(){
//     var name = $('#input1').val()
//     var age = $('#input2').val()
//     if(input1 == name && input1 == age){
//         alert('rasta')
//     }
//     else{
//         alert('halaya')
//     }
// })




// CALCULATOR || with J.query

$(document).on('click','#pl',function(){
    var num1 = $('#num1').val()
    var num2 = $('#num2').val()
    var sum = Number(num1) + Number(num2)
    $('#result').val('')
    $('#result').val(sum)
})
$(document).on('click','#mi',function(){
    var num1 = $('#num1').val()
    var num2 = $('#num2').val()
    var sum = Number(num1) - Number(num2)
    $('#result').val('')
    $('#result').val(sum)
})
$(document).on('click','#mu',function(){
    var num1 = $('#num1').val()
    var num2 = $('#num2').val()
    var sum = Number(num1) * Number(num2)
    $('#result').val('')
    $('#result').val(sum)
})
$(document).on('click','#di',function(){
    var num1 = $('#num1').val()
    var num2 = $('#num2').val()
    var sum = Number(num1) / Number(num2)
    $('#result').val('')
    $('#result').val(sum)
})
$(document).on('click','#cl',function(){
    $('#num1').val('')
    $('#num2').val('')
    $('#result').val('')
})
