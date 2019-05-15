// za dohvatanje jsona
$(document).ready(function () {
    getApiJson();
});

function getApiJson() {
    $.ajax({
        type: 'GET',
        url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD&CMC_PRO_API_KEY=1c2eadb2-09a8-4f06-af42-42d08b14cc3a',
        // data: data,
        async: false,
        // ovo menaj!!!!!
        beforeSend: function (xhr) {
            if (xhr && xhr.overrideMimeType) {
                xhr.overrideMimeType('application/json;charset=utf-8');
            }
        },
        dataType: 'json',
        success: onSuccess,
        // success: function (data) {
        //Do stuff with the JSON data
        // }
        //error stuff
        error: onError 
    });
}

function onSuccess(jsonReturn) {
    // console.log(data);
    for (var i = 0; i < jsonReturn.data.length; i++) {
        var data = jsonReturn.data[i];
console.log(data)
    }
}
function onError(){
    $('#home').html('I failed.');
   }