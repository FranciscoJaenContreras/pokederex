const { db } = require('@vercel/postgres');
const { pokemons } = require('../app/lib/placeholder-data.js');

async function seedPokemons(client) {
  try {
    // Create the "pokemon" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS pokemon (
        pokedex_number INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        type_1 VARCHAR(255) NOT NULL,
        type_2 VARCHAR(255),
        ps INT NOT NULL,
        attack INT NOT NULL,
        defense INT NOT NULL,
        special_attack INT NOT NULL,
        special_defense INT NOT NULL,
        speed INT NOT NULL,
        pre_evolution INT,
        evolution INT
      );
    `;

    console.log(`Created "pokemon" table`);

    // Insert data into the "pokemon" table
    const insertedPokemons = await Promise.all(
      pokemons.map(
        (pokemon) => client.sql`
        INSERT INTO pokemon
        VALUES (
          ${pokemon.pokedex_number}, 
          ${pokemon.name}, 
          ${pokemon.image_url}, 
          ${pokemon.description}, 
          ${pokemon.type_1}, 
          ${pokemon.type_2}, 
          ${pokemon.ps}, 
          ${pokemon.attack}, 
          ${pokemon.defense}, 
          ${pokemon.special_attack}, 
          ${pokemon.special_defense}, 
          ${pokemon.speed}, 
          ${pokemon.pre_evolution}, 
          ${pokemon.evolution}
        )
        ON CONFLICT (pokedex_number) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedPokemons.length} pokemons`);

    return {
      createTable,
      pokemons: insertedPokemons,
    };
  } catch (error) {
    console.error('Error seeding pokemons:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedPokemons(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
