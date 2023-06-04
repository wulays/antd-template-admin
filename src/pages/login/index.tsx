import styles from './index.module.scss'
import bg from '@/assets/images/login/bg.svg'
import logo from '@/assets/images/logo.png'
import { Form, Input, Checkbox, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import useUserStore from '@/store/modules/user.ts'
import { motion } from 'framer-motion'

export default function Login() {
    const navigate = useNavigate()
    const userStore = useUserStore()

    async function handleLogin(params: userLoginReqType) {
        try {
            await userStore.login(params)
            navigate('/dashboard')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={styles.container}>
            <img className={styles.bg} src={bg} alt="" />
            <motion.div
                animate={{
                    scale: [0.7, 1],
                    opacity: [0.1, 1]
                }}
                className={styles.warp}
            >
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                    <span>Welecome back</span>
                    <span>Hey, Enter your details to get sign in to your account</span>
                </div>
                <Form
                    name="loginForm"
                    initialValues={{ username: 'test', password: 'test', remember: true }}
                    autoComplete="off"
                    style={{ textAlign: 'left' }}
                    onFinish={handleLogin}
                >
                    <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
                        <Input placeholder="账号" />
                    </Form.Item>

                    <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
                        <Input.Password placeholder="密码" />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            登录
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="text" block>
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </motion.div>
        </div>
    )
}
