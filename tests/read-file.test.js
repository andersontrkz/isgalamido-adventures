const fs = require('fs').promises;
const sinon = require('sinon');
const { expect } = require('chai');

const readFileTest = require('../src/actions/read-file')

describe('Testing the action of reading a log file', () => {
  describe('When the file is read successfully', () => {
    describe('The returned response', () => {
      const FILE_CONTENT = 'It is a long established fact that a reader...';

      before(() => {
        sinon.stub(fs, 'readFile').resolves(FILE_CONTENT);
      });

      after(() => {
        fs.readFile.restore();
      });

      it('is a string', async () => {
        const response = await readFileTest('imaginary-file.txt');

        expect(response).to.be.a('string');
      });

      it('is the same as the content of the file', async () => {
        const response = await readFileTest('imaginary-file.txt');

        expect(response).to.be.equal(FILE_CONTENT);
      });
    });
  });

  describe('When file reading fails', () => {
    describe('The returned response', () => {

      before(() => {
        sinon.stub(fs, 'readFile').rejects();
      });

      after(() => {
        fs.readFile.restore();
      });

      it('the answer is equal to null', async () => {
        const response = await readFileTest('imaginary-file.txt');

        expect(response).to.be.equal(null)
      });
    });
  });
});