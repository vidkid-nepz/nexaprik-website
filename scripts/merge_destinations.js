const fs = require('fs');
const path = require('path');

const destinationsPath = path.join(__dirname, '../data/destinations.json');
const expansion1Path = path.join(__dirname, '../data/destinations_expansion_1.json');
const expansion2Path = path.join(__dirname, '../data/destinations_expansion_2.json');

try {
    const destinations = JSON.parse(fs.readFileSync(destinationsPath, 'utf8'));
    const expansion1 = JSON.parse(fs.readFileSync(expansion1Path, 'utf8'));
    const expansion2 = JSON.parse(fs.readFileSync(expansion2Path, 'utf8'));

    // Create a map of existing slugs to avoid duplicates
    const existingSlugs = new Set(destinations.map(d => d.slug));

    let addedCount = 0;

    [...expansion1, ...expansion2].forEach(dest => {
        if (!existingSlugs.has(dest.slug)) {
            destinations.push(dest);
            existingSlugs.add(dest.slug);
            addedCount++;
        } else {
            console.log(`Skipping duplicate: ${dest.slug}`);
        }
    });

    fs.writeFileSync(destinationsPath, JSON.stringify(destinations, null, 4), 'utf8');
    console.log(`Successfully merged destinations.`);
    console.log(`Added: ${addedCount}`);
    console.log(`Total Destinations: ${destinations.length}`);

} catch (error) {
    console.error('Error merging destinations:', error);
}
