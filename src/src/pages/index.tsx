import {
  history,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'umi';
import { Button } from 'antd';
export default function IndexPage() {
  const history = useHistory();
  function goLogin() {
    history.push('/beforeLogin');
 }
  return (
    <div>
      <h1>hh</h1>
     <Button onClick={goLogin}>去登录</Button>
    </div>
  );
}
