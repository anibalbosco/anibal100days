document.addEventListener('DOMContentLoaded', function () {
    const nftGallery = document.getElementById('nft-gallery');

    const nfts = [
        {
            title: 'Day 1: #1 Beach-1',
            description: `I came across this little scene at the beach, and I just loved it. It’s amazing how simple things can come together, guided only by nature, to create something so beautiful.
There was this green seaweed, branching out like tiny trees, looking so alive and vibrant. Next to it, there was this bright orange coral that looked like a splash of color against the sand. Scattered around were some small shells, each one shimmering a bit in the light.
Seeing this, it made me think about how nature, without any effort, arranges itself in the most beautiful ways. It’s a small reminder that beauty is everywhere, even in the simplest things, just waiting to be noticed and appreciated.
Be on the lookout for beauty around you; if you open your eyes, it is everywhere.`,
            imgSrc: 'images/1.jpg',
            price: '1 STX',
            marketplaceLink: 'https://stacks.gamma.io/collections/anibal-100-days/1'
        },
                {
            title: 'Day 2: #2 Food-1',
            description: `These frames were shot while preparing school lunch for the kids. Did they ever tell you not to play with your food? Ignore them; food can be fun. After all, you are what you eat, so you might as well eat happy food.`,
            imgSrc: 'images/2.gif',
            price: '1 STX',
            marketplaceLink: 'https://stacks.gamma.io/collections/anibal-100-days/2'
        },
                        {
            title: 'Day 3: #3 Peace-1',
            description: `PEACE is the priority. Peace on war. Piece on war. Piss on war.`,
            imgSrc: 'images/3.jpg',
            price: '1 STX',
            marketplaceLink: 'https://stacks.gamma.io/collections/anibal-100-days/3'
        },
        // Add more NFT objects here for each day
    ];

    nfts.forEach(nft => {
        const nftItem = document.createElement('div');
        nftItem.classList.add('nft-item');

        nftItem.innerHTML = `
            <img src="${nft.imgSrc}" alt="${nft.title}">
            <div class="description">
                <h2>${nft.title}</h2>
                <p>${nft.description}</p>
                <p class="price">Minimum price: ${nft.price}</p>
                <p><a href="${nft.marketplaceLink}" target="_blank" class="marketplace-link">View on Marketplace</a></p>
            </div>
        `;

        nftGallery.appendChild(nftItem);
    });
});
