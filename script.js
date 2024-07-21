document.addEventListener('DOMContentLoaded', function () {
    const nftGallery = document.getElementById('nft-gallery');

    const nfts = [
        {
            title: 'Day 1: Nature\'s Artistry',
            description: 'A beautiful arrangement of seaweed, coral, and shells, showcasing nature\'s effortless beauty.',
            imgSrc: 'path/to/your/image.png',
            price: '0.000001 STX'
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
            </div>
        `;

        nftGallery.appendChild(nftItem);
    });
});
