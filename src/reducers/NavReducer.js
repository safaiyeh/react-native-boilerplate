import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const INITIAL_STATE = AppNavigator.router
                        .getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));


const navReducer = (state = INITIAL_STATE, action) => {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default navReducer;
