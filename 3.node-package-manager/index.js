const lodash = require('lodash')

const names = ["lakshya","john","terry"]

const captalize = lodash.map(names,lodash.upperCase)

console.log(captalize)