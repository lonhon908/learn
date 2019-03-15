// import a = require('./Functions');
import a from './Functions';
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
    add() {
        return a;
    }
}
export = ZipCodeValidator;