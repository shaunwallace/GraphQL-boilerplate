import base from '../src';

describe('a suite', () => {
    it('runs a spec', () => {
        expect(true).toEqual(true);
    });

    it('should return true', () => {
        expect(base()).toEqual(true);
    });
});
