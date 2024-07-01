const resupplyMutatorSelector = document.getElementById('resupply-mutator');

const resupplyMutateBy = document.getElementById('resupply-mutate-by');

const resupplyCostOnePlayer = document.getElementById('resupply-cost-1p');

const mutatedNitraCost = document.querySelectorAll('.mutated-nitra-cost');

const resuppliesCalled = document.querySelectorAll('.resupplies-called');

const vanillaNitraCost = document.querySelectorAll('.vanilla-nitra-cost');

resupplyMutatorSelector.addEventListener('change', function handleChange(event) {
  if (event.target.value === "None") {
    for (var i=0; i<mutatedNitraCost.length; i++) {
        mutatedNitraCost[i].style.display = 'none';
        mutatedNitraCost[i].required = false;
    }
    for (var j=0; j<vanillaNitraCost.length; j++) {
        vanillaNitraCost[j].style.display = 'block';
    }
    for (var k=0; k<resuppliesCalled.length; k++) {
        resuppliesCalled[k].style.display = 'none';
    }
    resupplyCostOnePlayer.required = true;
  } else {
    for (var i=0; i<mutatedNitraCost.length; i++) {
        mutatedNitraCost[i].style.display = 'block';
        mutatedNitraCost[i].required = true;
    }
    for (var j=0; j<vanillaNitraCost.length; j++) {
        vanillaNitraCost[j].style.display = 'none';
    }
    if (resupplyMutateBy.value === "ResuppliesCalled") {
        for (var i=0; i<resuppliesCalled.length; i++) {
            resuppliesCalled[i].style.display = 'block';
            resuppliesCalled[i].required = true;
        }
    }
    resupplyCostOnePlayer.required = false;
  }
});

resupplyMutateBy.addEventListener('change', function handleChange(event) {
  if (event.target.value === "None") {
    for (var i=0; i<resuppliesCalled.length; i++) {
        resuppliesCalled[i].style.display = 'none';
        resuppliesCalled[i].required = false;
    }
  } else {
    for (var i=0; i<resuppliesCalled.length; i++) {
        resuppliesCalled[i].style.display = 'block';
        resuppliesCalled[i].required = true;
    }
  }
});

document.addEventListener("DOMContentLoaded", function(){
    for (var i=0; i<mutatedNitraCost.length; i++) {
        mutatedNitraCost[i].style.display = 'none';
    }
    for (var j=0; j<vanillaNitraCost.length; j++) {
        vanillaNitraCost[j].style.display = 'block';
    }
    for (var k=0; k<resuppliesCalled.length; k++) {
        resuppliesCalled[k].style.display = 'none';
    }
    resupplyCostOnePlayer.required = true;
});