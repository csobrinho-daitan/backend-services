import { isNullOrUndefined }  from '../../utils/isNullOrUndefined';

describe('isNullOrUndefined', () => {
  it('should return true if param is null', ()=> {
    const result = isNullOrUndefined(null);
    expect(result).toBeTruthy();
  });
  it('should return true if param is undefined', ()=> {
    const result = isNullOrUndefined(undefined);
    expect(result).toBeTruthy();
  });
  it('should return false if param is not null', ()=> {
    const result = isNullOrUndefined('null');
    expect(result).toBeFalsy();
  });
  it('should return false if param is not undefined', ()=> {
    const result = isNullOrUndefined(1);
    expect(result).toBeFalsy();
  });
});