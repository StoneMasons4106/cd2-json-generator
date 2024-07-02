const encounterDifficultyTab = document.getElementById('encounter-difficulty-tab');

const removeEncounterDifficultyButton = document.getElementById('remove-encounter-difficulty-bin');

document.addEventListener('click', function(e) {
    var addEncounterDifficultyButton = e.target.closest('#add-encounter-difficulty-bin');
    var removeEncounterDifficulty = e.target.closest('#remove-encounter-difficulty-bin');
    if (addEncounterDifficultyButton) {
        var encounterBins = document.querySelectorAll('.encounter-difficulty-bin-row');
        var encounterBinRowNumber = encounterBins.length + 1;
        encounterDifficultyTab.innerHTML += '<div class="row encounter-difficulty-bin-row"><div class="col-4"><mwc-textfield type="number" step=".01" min="0" max="1" class="w-100 mt-1" id="encounter-difficulty-weight-bin-'+encounterBinRowNumber+'" label="Weight" maxlength="4" charcounter></mwc-textfield></div><div class="col-4"><mwc-textfield type="number" min="0" max="9999" class="w-100 mt-1" id="encounter-difficulty-min-bin-'+encounterBinRowNumber+'" label="Min" maxlength="4" charcounter></mwc-textfield></div><div class="col-4"><mwc-textfield type="number" min="0" max="9999" class="w-100 mt-1" id="encounter-difficulty-max-bin-'+encounterBinRowNumber+'" label="Max" maxlength="4" charcounter></mwc-textfield></div></div>'
    } else if (removeEncounterDifficulty) {
        var encounterBins = document.querySelectorAll('.encounter-difficulty-bin-row');
        if (encounterBins.length > 1) {
            var lastEncounterBin = encounterBins[encounterBins.length-1];
            lastEncounterBin.parentNode.removeChild(lastEncounterBin);
        }
    }
});