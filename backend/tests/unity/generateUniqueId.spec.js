const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    const id = generateUniqueId();
    const id2 = generateUniqueId();

    it('Generate an unique ID with lenght 8', () => {
        expect(id).toHaveLength(8);
    }),
    it('Two unique IDs must be diferent', () => {
        expect(id).toEqual(expect.not.stringMatching(id2));
    })
})
