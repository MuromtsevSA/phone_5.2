$(window).on('load', function(){
let $forma = $('#forma');
let $plus = $('#plus');

let arr = ["Мобильный", "Домашний", "Рабочий"];

$plus.on('click', function(){
    let $div = $('<div>').attr({'calss':'di'});
    let $select = $('<select>').attr({'class':'sel'});
    let $input = $('<input>').attr({'class':'inp', 'value':'+7(9XX)XXX-XX-XX'});
    let $button = $('<button>').attr({'class':'but', }).append('-')

    $forma.append($div);
    $div.append($select);
    for(let i=0; i<arr.length; i++){
        let $option = $('<option>').append(arr[i]);
        $select.append($option);

    }
    $div.append($input);
    $div.append($button);
});
$forma.on('click', '.but', function(){
    $(this).closest('div').remove();

});

});
     


