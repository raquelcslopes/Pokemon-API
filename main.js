async function fetchData(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        if (!response.ok) {
            throw new Error("Could not fetch that one")
        }
        const data = await response.json();

        const bckg = document.getElementById("type");
        console.log("oi")
        switch(data.types[0].type.name) {
            case "fire":
                bckg.style.backgroundColor = "rgb(168, 109, 109)";
                break;

        case "grass":
            bckg.style.backgroundColor = "rgb(118, 175, 117)";
            break;

            case "water":
                bckg.style.backgroundColor = "rgb(153, 192, 197)";
                break;

            case "electric":
                bckg.style.backgroundColor = "gold";
                break;
                
            default:
                bckg.style.backgroundColor = "gray";
                break;
        }
    

        const imageElement = document.getElementById("image");
        imageElement.src = data.sprites.front_default;
        imageElement.style.display = "flex";

        const typePokemon = document.getElementById("type");
        typePokemon.textContent = data.types[0].type.name;
        typePokemon.style.color = "white";
        typePokemon.style.fontWeight = "bolder";
        typePokemon.style.justifySelf = "center";

        const nameElement = document.getElementById("name");
        nameElement.textContent = data.forms[0].name;
        nameElement.style.fontWeight = "bold";
        nameElement.textContent = nameElement.textContent.toUpperCase();

        const HPValue = document.getElementById("HPValue");
        HPValue.textContent = "HP: " + data.stats[0].base_stat;
        HPValue.style.display="relative"

        const attackValue = document.getElementById("attackText");
        attackValue.textContent = data.stats[1].base_stat;

        const defenseValue = document.getElementById("defenseText");
        defenseValue.textContent = data.stats[2].base_stat;

        const speedValue = document.getElementById("speedText");
        speedValue.textContent = data.stats[5].base_stat + " m/s";

        const abilityValue = document.getElementById("abilityText");
        abilityValue.textContent = data.abilities[0].ability.name;

        const hiddenAbilityValue = document.getElementById("hiddenAbilityText");
        hiddenAbilityValue.textContent = data.abilities[1].ability.name;
    
    } catch (error) {
        console.error("ERRO:", error);
    }
}

