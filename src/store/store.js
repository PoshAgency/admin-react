import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import PostsReducer from "./reducers/PostsReducer";
import thunk from "redux-thunk";
import { AuthReducer } from "./reducers/AuthReducer";
//import rootReducers from './reducers/Index';
import todoReducers from "./reducers/Reducers";
import PagesReducer from "./reducers/PagesReducer";
import BlogsReducer from "./reducers/BlogsReducer";
import { reducer as reduxFormReducer } from "redux-form";
import ProductsReducer from "./reducers/ProductsReducer";
import TeamReducer from "./reducers/TeamReducer";
import CustomersReducer from "./reducers/CustomersReducer";
import MenuItemsReducer from "./reducers/MenuItemsReducer";
import CouponsReducer from "./reducers/CouponsReducer";
import SalesReducer from "./reducers/SalesReducer";
import EmailTemplatesReducers from "./reducers/EmailTemplatesReducer";
import NewsletterReducer from "./reducers/NewsletterReducer";

const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,
  pages: PagesReducer,
  blogs: BlogsReducer,
  products: ProductsReducer,
  coupons: CouponsReducer,
  sales: SalesReducer,
  team: TeamReducer,
  newsletter: NewsletterReducer,
  emailTemplates: EmailTemplatesReducers,
  customers: CustomersReducer,
  menuItems: MenuItemsReducer,
  todoReducers,
  form: reduxFormReducer,
});

export const store = createStore(reducers, composeEnhancers(middleware));
