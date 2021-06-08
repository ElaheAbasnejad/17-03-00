function init() {
    console.log('Init');
}

function addClient() {
    //debugger;
    var x = parseInt($('#txt_x').val());
    var y = parseInt($('#txt_y').val());
    var z = x + y;
    $("#h_result").text(z);
    alert('ddddd');
}

function addServer() {
    //debugger;
    var x = parseInt($('#txt_x').val());
    var y = parseInt($('#txt_y').val());
    $.post('http://localhost/17-03-00/main.php',
        { x, y },
        function (d, s) {
            //debugger;
            console.log(d);
            $("#h_result").text(d['z']);
        }
    );
    alert('welcome to the server side');
}

//Leson 8 laravel
function fetchinfo(){
    $.post(
        'http://localhost/17-03-00/Lbl/routes/api.php',
        {},
        function(d,s){
            //console.log(d);
            $("#res").text(d);
        }
    );
}