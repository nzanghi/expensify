import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '1001' });
  expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '1001' });
});

test('should setup edit expense action object', () => {
  const action = editExpense(1001, { description: 'Edited Expense', amount: 1000 });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 1001,
    updates: { description: 'Edited Expense', amount: 1000 }
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense({ description: 'Add', note: 'testing', amount: 2000, createdAt: 100 });
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: 'Add',
      note: 'testing',
      amount: 2000,
      createdAt: 100
    }
  });
});

test('should setup add expense with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});
