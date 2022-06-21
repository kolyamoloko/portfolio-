const path  = require('path');
const { AiOutlineConsoleSql } = require('react-icons/ai');
console.log('Название файла:', path.basename(__filename))
console.log('название файла:', path.dirname(__dirname))
console.log('расширение файла', path.extname(__filename))
console.log('Parse', path.parse(__filename))