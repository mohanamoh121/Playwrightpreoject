import{test} from '@playwright/test'
test('Handling web Tables',async({page})=>{
    await page.goto('https://tablepress.org/demo/')
    const tableData = await page.locator('//table[@id="tablepress-demo-premium"]//tbody//tr[1]//td[3]').textContent();
console.log(tableData)
const tableRowsData = await page.locator('//table[@id="tablepress-demo-premium"]//tbody//tr[7]').allTextContents();
console.log(tableRowsData)
for(let value of tableRowsData){
    console.log(value)
}
const tableColumnData= await page.locator('//table[@id="tablepress-demo-premium"]//tbody//tr//td[2]').allTextContents();
console.log(tableColumnData)
for(let value of tableColumnData){
    console.log(value)
}
const tableHeaderData = await page.locator('//table[@id="tablepress-demo-premium"]//thead//tr//th').allTextContents
console.log(tableHeaderData)
})