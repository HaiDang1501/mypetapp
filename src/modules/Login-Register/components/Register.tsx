import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

const Register = () => {
  return (
    <div className="login-register-form">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Username không được bỏ trống!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            hasFeedback
            rules={[
              { required: true, message: "Mật khẩu không được bỏ trống!" },
              {
                min: 8,
                message: "Mật khẩu phải dài hơn 8 ký tự!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button button--css"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
    </div>
  )
}

export default Register
