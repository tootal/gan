import Vue from 'vue'
import {
  Button,
  ButtonGroup,
  Drawer,
  Card,
  Container,
  Main,
  Footer,
  Menu,
  MenuItem,
  Image,
  Carousel,
  CarouselItem,
  Message,
  MessageBox
} from 'element-ui';

Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Drawer)
Vue.use(Card)
Vue.use(Container)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Image)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.prototype.$message = Message;
Vue.prototype.$prompt = MessageBox.prompt;
