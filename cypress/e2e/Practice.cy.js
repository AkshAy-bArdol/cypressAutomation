describe('Contact Test', () => {
    let data;
    let contactDetails;
    before(() => {
        cy.fixture("loginData").then((userdata) => {
            data = userdata;
        })

        cy.fixture("Contactlist").then((details) => {
            contactDetails = details;
        })

    })


    it('Valid creadentials', () => {
        cy.visit(data.url)
        cy.get("input[name*='email']").type(data.username)
        cy.get("input[name*='password']").type(data.password)
        cy.get("div.ui.fluid.large.blue.submit.button").click()
        cy.title().should('eq', 'Cogmento CRM')
        cy.url().should('eq', data.url);
        cy.get("i.users.icon").trigger('mouseover').get("span:contains('Contacts')").click();
        cy.url().should('eq', 'https://ui.cogmento.com/contacts');
        cy.get("button:contains('Create')").click();
        cy.url().should('eq', 'https://ui.cogmento.com/contacts/new');
        cy.get("input[name*='first_name']").type(contactDetails.name);
        cy.get("input[name*='middle_name']").type(contactDetails.middlename);
        cy.get("input[name*='last_name']").type(contactDetails.lastname);
        cy.get("input[placeholder*='Email address']").type(contactDetails.email);
        /*cy.get("div[name='country'] i[class='dropdown icon']").click();*/

        const textToMatch = "India";
        cy.xpath("//div[@name='country']//span").each(($element) => {
            // Get the text of each element
            const elementText = $element.text();

            if (elementText && elementText === textToMatch) {
 
                $element.click();
            }
        })
        cy.get("input[name*='day']").type("27");
        cy.get("div[name*='month']").click();
        const monthOfBirthday = "June";
        cy.xpath("//div[@class='visible menu transition']/div/span").each(($months) => {
            // Get the text of each element
            const month = $months.text();

            if (month && month === monthOfBirthday) {

                $months.click();
            }
        })
        cy.get("input[name*='year']").type("1996");
        cy.get("button.ui.linkedin.button").click();
        cy.wait(2000);
        cy.get("i.home.icon").trigger('mouseover').click();
        cy.get("i.users.icon").trigger('mouseover').get("span:contains('Contacts')").click();

        const contactName = "Akshay";
        cy.xpath("//div[@class='table-wrapper']//tbody/tr/td[2]/a").each(($names) => {
            // Log the element's text
            $names.invoke('text').then(text => {
                console.log(text);
            });
        });

        cy.xpath("//div[@class='table-wrapper']//tbody/tr/td[2]/a").each(($names) => {
            // Get the text of each element
            const name = $names.text();

            name.then(text => {
                if (text.startsWith(contactName)) {
                    $names.click();
                }
            });
        });

        
    })



})