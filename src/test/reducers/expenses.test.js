import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove an expense by id', () => {
  const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id });
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove an expense if id not found', () => {
  const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '-1' });
  expect(state).toEqual(expenses);
});
// ADD_EXPENSE
test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'Laptop',
    note: '',
    amount: 20000,
    createdAt: moment()
      .add(1, 'day')
      .valueOf()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});
// EDIT_EXPENSE
test('should edit an expense', () => {
  const amount = 2320000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description: 'Hopefully has been edited',
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toEqual(amount);
});

test('should not edit an expense if id not found', () => {
  const amount = 12011;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});