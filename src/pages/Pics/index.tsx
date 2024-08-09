import { request } from '@umijs/max';
import { Image ,Button} from 'antd';
import { useEffect ,useState} from 'react';

 






const MyComponent = () => {
  const [base64, setBase64] = useState('');
  const   getBase64= async () =>  {
    const base64Image = await request<string>("http://www.reeqr.com/pictureBase64",{
      method: 'GET'
    })
    setBase64(base64Image)
  }

  return <>
  <Image
    width={200}
    src={`data:image/jpeg;base64,${base64}`}
  />
  <Button type="primary" onClick={getBase64} >
    获取图片
  </Button>
  </>
  }
;


export default MyComponent;
