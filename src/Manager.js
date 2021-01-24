const Employee = require('./Employee');
const Util = require('./Util');

class Manager extends Employee {
  #bonuses = 2000;

  get bonuses() {
    return Util.formatCurrency(this.#bonuses);
  }

  get netPay() {
    const finalValue =
      Util.unformatCurrency(super.netPay) + Util.unformatCurrency(this.bonuses);

    return Util.formatCurrency(finalValue);
  }
}

module.exports = Manager;
