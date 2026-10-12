import{test} from '@playwright/test'
test('Handling Simple Alert',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
//Simple Alert
        await page.locator('(//a[@class="analystic"])[1]').click();
    page.once('dialog',async(SimpleAlert)=>{
        console.log('The Simple Alert message is:',SimpleAlert.message())
        await SimpleAlert.accept()
    })
    await page.locator('//button[@onclick="alertbox()"]').click();

//confirm Alert
    await page.locator('(//a[@class="analystic"])[2]').click();
    page.once('dialog',async(ConfirmAlert)=>{
        console.log('The Confirm Alert Message is:',ConfirmAlert.message())
        await ConfirmAlert.dismiss()
    })
    await page.locator('(//button[@onclick="confirmbox()"])[1]').click();

//Prombt Alert
    await page.locator('(//a[@class="analystic"])[3]').click();
    page.once('dialog',async(PrombtAlert)=>{
    console.log('The prombt Alert Message is:',PrombtAlert.message())
    await PrombtAlert.accept('Batch3PM')
})
    await page.locator('//button[@onclick="promptbox()"]').click();

    await page.waitForTimeout(3000)
    
})