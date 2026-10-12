import{test} from'@playwright/test'
test('Handling frames',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Frames.html')
    
//Single Frames Handled
    const singleFrames = await page.frameLocator('//iframe[@id="singleframe"]')
    await singleFrames.locator('//input[@type="text"]').fill('Handled Single Frame Alert')

//Nested Frames Handling
await page.locator('(//a[@class="analystic"])[2]').click();
const outerFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
const innerFrame = await outerFrame.frameLocator('//iframe[@src="SingleFrame.html"]')
await innerFrame.locator('//input[@type="text"]').fill('Nested Frames Handled')


 await page.waitForTimeout(3000)
})