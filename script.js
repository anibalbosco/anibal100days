document.addEventListener('DOMContentLoaded', function () {
    const nftGallery = document.getElementById('nft-gallery');

    const nfts = [
        {
            title: 'Day 1: #1 Beach-1',
            description: 'A beautiful arrangement of seaweed, coral, and shells, showcasing nature\'s effortless beauty.',
            imgSrc: 'images/1.jpg',
            price: '0.000001 STX',
            marketplaceLink: 'https://stacks.gamma.io/collections/anibal-100-days/1'
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
                <p><a href="${nft.marketplaceLink}" target="_blank">View on Marketplace</a></p>
            </div>
        `;

        nftGallery.appendChild(nftItem);
    });
});
