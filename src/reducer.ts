
interface StateProps {
  count: number
}

type ActionProps = {type: 'INCREMENT'} | {type: 'DECREMENT'}| {type: 'RESTART'}

export  function Reducer(state: StateProps, action: ActionProps) : StateProps {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESTART':
      return {count: 0};
    default:
      throw new Error('Ação desconhecia')
  }
}