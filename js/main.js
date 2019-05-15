$(document).ready(function () {
    getApiJson();
    ispis();
});

// za dohvatanje jsona
function getApiJson() {
    $.ajax({
        type: 'GET',
        url: 'fakeServer/latest1.json',
        async: false,
        // ovo menaj!!!!!
        // beforeSend: function (xhr) {
        //     if (xhr && xhr.overrideMimeType) {
        //         xhr.overrideMimeType('application/json;charset=utf-8');
        //     }
        // },
        dataType: 'json',
        success: onSuccess,
        error: onError
    });
}
var names = [];
var shortNames = [];
var values = [];
var valuesNo = [];
var lastChanges = [];
var inputs = [];
var inputsNo = [];
var coins = [];

function onSuccess(jsonReturn) {
    for (var i = 0; i < jsonReturn.data.length; i++) {
        var data = jsonReturn.data[i];
        var name = data.name;
        names.push(name);
        var shortName = data.symbol;
        shortNames.push(shortName);
        var value = data.quote.USD.price;
        values.push("<td id='value" + i + "'>" + value.toFixed(2) + "</td>");
        valuesNo.push(value.toFixed(2));
        var lastChange = data.quote.USD.percent_change_24h;
        if (lastChange > 0) {
            lastChanges.push("<td class='green'>" + lastChange.toFixed(2) + "%" + "</td>");
        } else if (lastChange < 0) {
            lastChanges.push("<td class='red'>" + lastChange.toFixed(2) + "%" + "</td>");

        } else {
            lastChanges.push("<td>" + lastChange.toFixed(2) + "%" + "</td>");

        }
        var input = '<form><input type="number" name="amount' + i + '" min="0" step="0.01" value="0"><br><input type="button" value="Submit" onclick="coinsCalc()"></form>'
        inputs.push(input);
    
        var coin = 0;
        coins.push("<td id='coin" + i + "'>" + "$" + coin.toFixed(2) + "</td>");
    }
}

function onError() {
    $('#home').html('I failed. Nope!');
}


// ispis redova u tabeli
function ispis() {
    for (var i = 0; i < names.length; i++) {
        $("#table").append("<tr><td>" + names[i] + "<td>" + shortNames[i] + "</td>" + values[i] + lastChanges[i] + "<td>" + inputs[i] + "</td>" + coins[i] + "</td></tr>");
        if (lastChanges[i] > 0) {
            $("p").addClass("green");
        }
        if (lastChanges[i] < 0) {
            $("p").addClass("red");
        }
    }
}

function coinsCalc() {
    $('#coin0').text("$"+($('[name="amount0"]').val()*valuesNo[0]).toFixed(2));
    $('#coin1').text("$"+($('[name="amount1"]').val()*valuesNo[1]).toFixed(2));
    $('#coin2').text("$"+($('[name="amount2"]').val()*valuesNo[2]).toFixed(2));
    $('#coin3').text("$"+($('[name="amount3"]').val()*valuesNo[3]).toFixed(2));
    $('#coin4').text("$"+($('[name="amount4"]').val()*valuesNo[4]).toFixed(2));
    $('#coin5').text("$"+($('[name="amount5"]').val()*valuesNo[5]).toFixed(2));
    $('#coin6').text("$"+($('[name="amount6"]').val()*valuesNo[6]).toFixed(2));
    $('#coin7').text("$"+($('[name="amount7"]').val()*valuesNo[7]).toFixed(2));
    $('#coin8').text("$"+($('[name="amount8"]').val()*valuesNo[8]).toFixed(2));
    $('#coin9').text("$"+($('[name="amount9"]').val()*valuesNo[9]).toFixed(2));
}
