import { dateFormatterToYear, dateFormatter } from '@Utils/dateFormatter';

describe('dateFormatterToYear()', () => {
  it('should format a date to string in Brazilian format', () => {
    const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
    expect(dateFormatterToYear(date)).toEqual(2020);
  });
  it('should throw error if date is null', () => {
    expect(() => {
      dateFormatterToYear('');
    }).toThrowError();
  });
});

describe('dateFormatter()', () => {
  it('should format a date to string in Brazilian format', () => {
    const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
    expect(dateFormatter(date)).toEqual('20/12/2020');
  });
  it('should throw error if date is null', () => {
    expect(() => {
      dateFormatter('');
    }).toThrowError();
  });
});
