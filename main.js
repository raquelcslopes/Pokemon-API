let pokemon = "";
const dropdown = document.getElementById("dropdown");

dropdown.addEventListener("change", function () {
    pokemon = dropdown.options[dropdown.selectedIndex].text;
        fetchData(pokemon);
})

async function fetchData(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        if (!response.ok) {
            throw new Error("Could not fetch that one")
        }
        const data = await response.json();

        const bckg = document.getElementById("card");
        console.log("oi")
        switch(data.types[0].type.name) {
            case "fire":
                bckg.style.background = "linear-gradient(to bottom right, orange, red";
                break;

        case "grass":
            bckg.style.background= "linear-gradient(to bottom right, white, green";
            break;

            case "water":
                bckg.style.background = "linear-gradient(to bottom right, blue, lightblue)";
                break;

            case "electric":
                bckg.style.background = "linear-gradient(to bottom right, yellow, gold)";
                break;
                
            default:
                bckg.style.background = "linear-gradient(to bottom right, gray, white)";
                break;
        }
    

        const imageElement = document.getElementById("image");
        imageElement.src = data.sprites.front_default;
        imageElement.style.display = "flex";

        const typePokemon = document.getElementById("type");
        typePokemon.textContent = data.types[0].type.name;
        typePokemon.style.color = "white";

        const nameElement = document.getElementById("name");
        nameElement.textContent = data.forms[0].name;
        nameElement.style.fontWeight = "bold";
        nameElement.textContent = nameElement.textContent.toUpperCase();

        const HPElement = document.getElementById("HP");
        HPElement.textContent = "HP";
        HPElement.style.fontWeight = "bold";

        const HPValue = document.getElementById("HPValue");
        HPValue.textContent = data.stats[0].base_stat;

        const attackElement = document.getElementById("attack");
        attackElement.textContent = "ATTACK";
        attackElement.style.fontWeight = "bold";

        const attackValue = document.getElementById("attackValue");
        attackValue.textContent = data.stats[1].base_stat;

        const defenseElement = document.getElementById("defense");
        defenseElement.textContent = "DEFENSE";
        defenseElement.style.fontWeight = "bold";

        const defenseValue = document.getElementById("defenseValue");
        defenseValue.textContent = data.stats[2].base_stat;

        const specialAttackElement = document.getElementById("specialAttack");
        specialAttackElement.textContent = "SPECIAL ATTACK";
        specialAttackElement.style.fontWeight = "bold";

        const specialAttackValue = document.getElementById("specialAttackValue");
        specialAttackValue.textContent = data.stats[3].base_stat;

        const specialDefenseelement = document.getElementById("specialDefense");
        specialDefenseelement.textContent = "SPECIAL DEFENSE";
        specialDefenseelement.style.fontWeight = "bold";

        const specialDefenseValue = document.getElementById("specialDefenseValue");
        specialDefenseValue.textContent = data.stats[4].base_stat;

        const speedElement = document.getElementById("speed");
        speedElement.textContent = "SPEED";
        speedElement.style.fontWeight = "bold";

        const speedValue = document.getElementById("speedValue");
        speedValue.textContent = data.stats[5].base_stat + " m/s";

        const heightElement = document.getElementById("height");
        heightElement.textContent = "HEIGHT";
        heightElement.style.fontWeight = "bold";

        const heightValue = document.getElementById("heightValue");
        heightValue.textContent = data.height + " feets";

        const weightElement = document.getElementById("weight");
        weightElement.textContent = "WEIGHT";
        weightElement.style.fontWeight = "bold";

        const weightValue = document.getElementById("weightValue");
        weightValue.textContent = data.weight + " pounds";

        const abilityElement = document.getElementById("abilityName");
        abilityElement.textContent = "ABILITY";
        abilityElement.style.fontWeight = "bold";

        const abilityValue = document.getElementById("abilityValue");
        abilityValue.textContent = data.abilities[0].ability.name;

        const hiddenAbilityElement = document.getElementById("hiddenAbilityName");
        hiddenAbilityElement.textContent = "HIDDEN ABILITY";
        hiddenAbilityElement.style.fontWeight = "bold";

        const hiddenAbilityValue = document.getElementById("hiddenAbilityValue");
        hiddenAbilityValue.textContent = data.abilities[1].ability.name;
    
    } catch (error) {
        console.error("ERRO:", error);
    }
}

