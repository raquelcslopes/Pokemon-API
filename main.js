fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {

        if (!response.ok) {
            throw new Error("Could not fetch that one")
        }
        return response.json();


    })
    .then(data => {
        console.log(data)

        const imageElement = document.getElementById("image");
        imageElement.src = data.sprites.front_default;
        imageElement.style.display="flex";

        const typePokemon = document.getElementById("type");
        typePokemon.textContent = data.types[0].type.name;
        typePokemon.style.color = "white";

        const nameElement = document.getElementById("name");
        nameElement.textContent = data.forms[0].name;
        nameElement.style.fontWeight = "bold";

        const HPElement = document.getElementById("HP");
        HPElement.textContent = "HP";

        const HPValue = document.getElementById("HPValue");
        HPValue.textContent = data.stats[0].base_stat;

        const attackElement = document.getElementById("attack");
        attackElement.textContent = "ATTACK";

        const attackValue = document.getElementById("attackValue");
        attackValue.textContent = data.stats[1].base_stat;

        const defenseElement = document.getElementById("defense");
        defenseElement.textContent = "DEFENSE";

        const defenseValue = document.getElementById("defenseValue");
        defenseValue.textContent = data.stats[2].base_stat;

        const specialAttackElement = document.getElementById("specialAttack");
        specialAttackElement.textContent = "SPECIAL ATTACK";

        const specialAttackValue = document.getElementById("specialAttackValue");
        specialAttackValue.textContent = data.stats[3].base_stat;

    })
    .catch(error => console.error("ERRO:", error));

