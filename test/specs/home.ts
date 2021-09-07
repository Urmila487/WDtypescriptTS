describe('My home testcases', () => {
    it('Verify Title', async () => {
        await browser.url('http://the-internet.herokuapp.com/')
        await browser.maximizeWindow()
        expect(browser).toHaveTitle('The Internet')
        const header = await $('.heading')
        expect(await header.getText()).toEqual('Welcome to the-internet')

        
    });
});