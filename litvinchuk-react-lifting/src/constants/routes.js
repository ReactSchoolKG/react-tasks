import HomeContainer from "../containers/Home";
import AboutContainer from "../containers/About/About";

export const PATHS = Object.freeze({
  INDEX: '/',
  ABOUT: '/about',
  ITEMS: '/items',
  ITEM_DETAILS: '/items/:id',
  DASH_BOARD_1 : '/dashboard1',
  DASH_BOARD_2 : '/dashboard2',
  LIFTING : '/lifting',
});

export const ROUTES = Object.freeze([
  {
    path: PATHS.INDEX,
    component: HomeContainer
  },
  {
    path: PATHS.ABOUT,
    component: AboutContainer
  }
]);
