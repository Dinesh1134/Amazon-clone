import { formatCurrency } from "../script/utils/money.js";

describe('tests suit: formatCurrency', () => {
    it('covert a cents into dollar' , () => {
        expect(formatCurrency('2095')).toEqual('20.95')
    })

    it('work with 0', () => {
        expect(formatCurrency('0')).toEqual('0.00')
    })

    it('round up to the nearest value', () => {
        expect(formatCurrency('2000.5')).toEqual('20.01')
        expect(formatCurrency('2000.4')).toEqual('20.00')
    })

    it('checking the negative number', () => {
        expect(formatCurrency('-2000')).toEqual('-20.00')   
    })
})