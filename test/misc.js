import {expect} from 'chai';
import VersionFile from '../lib/index';

describe('Version File Webpack Plugin', () => {
  it('can be instantiated', () => {
    const plugin = new VersionFile();

    expect(plugin).to.exist;
  });

  it('is a function constructor', () => {
    expect(VersionFile).to.be.a('function');
  });

  it('has an apply method', () => {
    const plugin = new VersionFile();

    expect(plugin.apply).to.exist;
  });
});
