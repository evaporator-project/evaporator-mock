import { PlusOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';
import axios from "axios";
import {FC, useEffect} from "react";

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
interface CreateAndUpdateProps {
  record?:any
  updateTable?:any
}
const CreateAndUpdate:FC<CreateAndUpdateProps> = ({record,updateTable}) => {
  const [form] = Form.useForm<{ name: string;endpoint:string;timeout:string;data:string }>();

  useEffect(()=>{
    if (record){
      form.setFieldsValue({
        name:record.name,
        endpoint:record.endpoint,
        timeout:record.timeout,
        data:record.data
      })
    }

  },[record])


  return (
    <DrawerForm<{
      name: string;
    }>
      title={record?'编辑':'新增'}
      form={form}
      trigger={
        <Button type="primary">
          <PlusOutlined />
          新建表单
        </Button>
      }
      autoFocusFirstInput
      drawerProps={{
        destroyOnClose: true,
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        if (record){
          await axios.patch('http://localhost:8080/mock',{
            mockId:record._id,
            ...values
          })
        } else {
          await axios.post('http://localhost:8080/mock',values)
        }
        updateTable()
        // 不返回不会关闭弹框
        return true;
      }}
    >
      <ProForm.Group>
        <ProFormText
          name="name"
          width="md"
          label="名称"
        />

        <ProFormText width="md" name="endpoint" label="Endpoint" />

      </ProForm.Group>
      <ProForm.Group>

        <ProFormDigit
          width="md"
          name="timeout"
          label="延时"
        />
      </ProForm.Group>
      <ProForm.Group>

        <ProFormText width="md" name="data" label="Data" />

      </ProForm.Group>
    </DrawerForm>
  );
};

export default CreateAndUpdate
