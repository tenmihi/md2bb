class Replacer {
  constructor () {
    this.rules = []
  }

  setRules(rules) {
    this.rules = rules
  }

  reg_match (reg, text) {
    let reg_exp = new RegExp(reg)
    return reg_exp.exec(text)
  }

  parse (text) {
    this.rules.forEach(({regex, replacement}) => {
      text = text.replace(regex, replacement)
    })
    return text
  }
}

export default Replacer
