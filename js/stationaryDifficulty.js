const stationaryDifficultyTab = document.getElementById('stationary-difficulty-tab');

const removeStationaryDifficultyButton = document.getElementById('remove-stationary-difficulty-bin');

document.addEventListener('click', function(e) {
    var addStationaryDifficultyButton = e.target.closest('#add-stationary-difficulty-bin');
    var removeStationaryDifficulty = e.target.closest('#remove-stationary-difficulty-bin');
    if (addStationaryDifficultyButton) {
        var stationaryBins = document.querySelectorAll('.stationary-difficulty-bin-row');
        var stationaryBinRowNumber = stationaryBins.length + 1;
        stationaryDifficultyTab.innerHTML += '<div class="row stationary-difficulty-bin-row"><div class="col-4"><mwc-textfield type="number" step=".01" min="0" max="1" class="w-100 mt-1" id="stationary-difficulty-weight-bin-'+stationaryBinRowNumber+'" label="Weight" maxlength="4" charcounter></mwc-textfield></div><div class="col-4"><mwc-textfield type="number" min="0" max="9999" class="w-100 mt-1" id="stationary-difficulty-min-bin-'+stationaryBinRowNumber+'" label="Min" maxlength="4" charcounter></mwc-textfield></div><div class="col-4"><mwc-textfield type="number" min="0" max="9999" class="w-100 mt-1" id="stationary-difficulty-max-bin-'+stationaryBinRowNumber+'" label="Max" maxlength="4" charcounter></mwc-textfield></div></div>'
    } else if (removeStationaryDifficulty) {
        var stationaryBins = document.querySelectorAll('.stationary-difficulty-bin-row');
        if (stationaryBins.length > 1) {
            var lastStationaryBin = stationaryBins[stationaryBins.length-1];
            lastStationaryBin.parentNode.removeChild(lastStationaryBin);
        }
    }
});