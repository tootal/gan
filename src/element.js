import Vue from 'vue'
import {
  Button,
  ButtonGroup,
  Drawer,
  Card,
  Avatar,
  Form,
  FormItem,
  Input,
  Table,
  TableColumn,
  Container,
  Main,
  Footer,
  Menu,
  MenuItem,
  Timeline,
  TimelineItem,
  Image,
  Divider,
  Carousel,
  CarouselItem,
  Message,
  MessageBox
} from 'element-ui';

Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Drawer)
Vue.use(Card)
Vue.use(Avatar)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Container)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Image)
Vue.use(Divider)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
