class filterItemPage {
    searchItems() {
        cy.xpath(`//input[@id="twotabsearchtextbox"]`).type('chair');
        cy.xpath(`//div[@class="nav-right"]//input[@type="submit"]`).click();
    }

    sortFeatureItems() {
        cy.get('#a-autoid-0-announce').click();
        cy.xpath(`//div[@class="a-popover-inner"]//li[3]`).click();
        cy.xpath(`//div[@class="s-main-slot s-result-list s-search-results sg-row"]//div[@role="listitem"][3]`).click();
    }

    assertionPage() {
        cy.xpath(`//div[@id="title_feature_div"]//div[@id="titleSection"]//h1[@id="title"]//span[@id="productTitle"]`, { timeout: 20000 })
          .should('be.visible')
          .invoke('text')
          .should('contain', 'Office Chair Recliner Leather');
        cy.xpath(`//div[@id="corePrice_feature_div"]//div[@data-csa-c-type="widget"]//span[@class="a-price-whole"]`).should('be.visible');
    }
}

export default new filterItemPage();