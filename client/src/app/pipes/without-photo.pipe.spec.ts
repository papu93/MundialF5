import { WithoutPhotoPipe } from './without-photo.pipe';

describe('WithoutPhotoPipe', () => {
  it('create an instance', () => {
    const pipe = new WithoutPhotoPipe();
    expect(pipe).toBeTruthy();
  });
});
