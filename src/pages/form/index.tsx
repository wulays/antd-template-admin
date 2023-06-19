import { Button, Checkbox, Form, Input } from 'antd'

import styles from './index.module.scss'

export default function FormPage() {
    const checkboxList = [
        { label: '苹果', value: 1 },
        { label: '香蕉', value: 2 },
        { label: '西瓜', value: 3 },
        { label: '菠萝', value: 4 }
    ]

    return (
        <div className={styles.container}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true, checkboxlist: [1] }}
                autoComplete="off"
            >
                <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码！' }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="最喜欢的水果"
                    name="checkboxlist"
                    rules={[{ required: true, message: '请至少选择一项！' }]}
                >
                    <Checkbox.Group options={checkboxList} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
