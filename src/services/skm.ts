import { http_get, http_post } from './index';
import { BASE_API_ROOT } from '@/config/index';


export default class SkmService {
  public static async get_list() {
    const result = await http_get({api: './static/skm/list.json'});
    // const result = await http_get({api: 'http://127.0.0.1:3000/search'});
    return result.data;
  }
  // 登陆接口
  public static async signin(userData:object) {
    const result = await http_post({api: 'http://127.0.0.1:3000/login',data:userData})
    return result.data
  }
  public static async search(){
    const result = await http_get({api: 'http://127.0.0.1:3000/search'})
    return result.data
  }
  public static async islogin(){
    const result = await http_get({api: 'http://127.0.0.1:3000/islogin'})
    return result.data
  }
  public static async register(registerData:object){
    const result = await http_post({api: 'http://127.0.0.1:3000/register',data:registerData})
    return result.data
  }

}
