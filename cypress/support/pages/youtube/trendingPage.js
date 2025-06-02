class trendingPage {
    goToTrending() {
        cy.xpath(`//a[@id="endpoint"][@title="Trending"]`).click();
    }

    listMenuTrendingMovies() {
        cy.xpath(`//yt-tab-shape[@role="tab"][4]`).click();
    }

    goToTrendingMovies() {
        cy.xpath(`//ytd-video-renderer[@class="style-scope ytd-expanded-shelf-contents-renderer"][3]//a[@id="video-title"]`).click();
    }

    assertionPage() {
        cy.xpath(`//div[@id="title"][@class="style-scope ytd-watch-metadata"]//ytd-badge-supported-renderer[@class="style-scope ytd-watch-metadata"]//h1[@class="style-scope ytd-watch-metadata"]//yt-formatted-string[@title="TAMARA TERNYATA MAU HANCURKAN KARIR ARINI! - MENCINTAIMU SEKALI LAGI TRAILER"]`).should('be.visible');
        //cy.xpath(`//h1[@class="style-scope ytd-watch-metadata"]//yt-formatted-string[@title="TAMARA TERNYATA MAU HANCURKAN KARIR ARINI! - MENCINTAIMU SEKALI LAGI TRAILER"]`).should('be.visible');
        cy.xpath(`//div[@id="upload-info"]//yt-formatted-string[@id="text"]//a[@class="yt-simple-endpoint style-scope yt-formatted-string"]`).should('be.visible').should('have.text', 'MNC Pictures');
    }
}

export default new trendingPage();