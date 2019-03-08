import reducer from './reducer';

test('reducer initial state null', () => {
    const action = { type: 'INCREMENT', value: 10 };
    const state = reducer(undefined, action);
    expect(state).toEqual({ count: 10 });
});

test('reducer increment', () => {
    const initialState = { count: 0 };
    const action = { type: 'INCREMENT', value: 10 };
    const state = reducer(initialState, action);
    expect(state).toEqual({ count: 10 });
});

test('reducer decrement', () => {
    const initialState = { count: 0 };
    const action = { type: 'DECREMENT', value: 20 };
    const state = reducer(initialState, action);
    expect(state).toEqual({ count: -20 });
});
