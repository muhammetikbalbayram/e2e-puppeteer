/**
 * Delete local storage.
 * @param {string}  keys The name of the entry set of local storage.
 */

module.exports = async function () {
    await this.page.evaluateOnNewDocument(()=>{
        localStorage.clear()
    })
};


// module.exports = async function (entrySet) {
//     for (const [key, value] of Object.entries(entrySet)) {
//         await this.page.evaluate((key, value) => {
//             localStorage.setItem(key, value);
//         }, key, value);
//     }
// };