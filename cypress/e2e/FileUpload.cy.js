import 'cypress-file-upload'

describe('File Uploads', () => {

    it('Single File upload', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('DemoCy.txt')
        cy.get("#file-submit").click()
        cy.wait(1000)
        cy.get("div[class='example'] h3").should("have.text","File Uploaded!")
    })

    it('File-Rename', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({ filePath: 'DemoCy.txt', fileName: 'Demo' })
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")
    })

    it('File-dragdrop', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile('DemoCy.txt', { subjectType: 'drag-n-drop' })
        cy.wait(3000)
        cy.get("div.dz-filename>span").contains("DemoCy.txt")
    })

    it.only('File-multple', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(["DemoCy.txt","DemoCy1.txt"])
        cy.wait(3000)
    })
})