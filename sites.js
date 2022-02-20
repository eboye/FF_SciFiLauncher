function getBackgroundColor(stringInput) {
    let stringUniqueHash = [...stringInput].reduce((acc, char) => {
        return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    return `hsl(${stringUniqueHash % 360}, 45%, 45%)`;
}

function getShadowColor(stringInput) {
    let stringUniqueHash = [...stringInput].reduce((acc, char) => {
        return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    return `hsl(${stringUniqueHash % 360}, 15%, 15%)`;
}

browser.topSites.get().then((sites) => {
  const topSitesDiv = document.getElementById('topSites');
  sites.forEach((item, i) => {
    const topSite = document.createElement('a');
    topSite.href = item.url;
    const topSiteStrong = document.createElement('strong');
    topSiteStrong.innerText = item.title || item.url;
    topSite.appendChild(topSiteStrong);
    topSite.style = `--rndcolor: linear-gradient(135deg, var(--background) 0%, var(--background) 55%, ${getBackgroundColor(item.title)} 140%); --border: ${getBackgroundColor(item.title)}; --shadow: ${getShadowColor(item.title)}`;
    topSitesDiv.appendChild(topSite);
  });
});
