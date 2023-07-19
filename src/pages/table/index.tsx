import styles from './index.module.scss'
import { Button, Input, Select, Table, Tag, Checkbox } from 'antd'
import { useEffect, useState } from 'react'
import type { CheckboxValueType } from 'antd/es/checkbox/Group'

interface IRow {
    key: number
    name: string
    age: number
    state: string
    address: string
}

export default function TablePage() {
    const data: IRow[] = [
        {
            key: 0,
            name: 'a',
            age: 32,
            state: '1',
            address: '西湖区湖底公园1号'
        },
        {
            key: 1,
            name: 'b',
            age: 32,
            state: '1',
            address: '桥洞'
        },
        {
            key: 2,
            name: 'c',
            age: 22,
            state: '0',
            address: '西湖区湖底公园2号'
        },
        {
            key: 3,
            name: 'ac',
            age: 22,
            state: '0',
            address: '西湖区湖底公园2号'
        }
    ]

    const [tableData, setTableData] = useState<IRow[]>([])

    useEffect(() => {
        handleSearch()
    }, [])

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name'
        },
        {
            title: '年龄',
            dataIndex: 'age'
        },
        {
            title: '状态',
            dataIndex: 'state',
            render: (state: string) => (
                <Tag color={state === '1' ? 'success' : 'error'}>{state === '1' ? '有效' : '无效'}</Tag>
            )
        },
        {
            title: '住址',
            dataIndex: 'address'
        }
    ]

    const [searchVal, setSearchVal] = useState({
        keyword: '',
        state: void 0
    })

    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(columns.map((_) => _.dataIndex))

    const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list)
    }

    const handleSearch = () => {
        setTableData(
            data.filter(
                (_) =>
                    (!searchVal.keyword || _.name.includes(searchVal.keyword)) &&
                    (!searchVal.state || _.state === searchVal.state)
            )
        )
    }

    return (
        <div className={styles.container}>
            <ul className="search-list">
                <li>
                    <span>关键字</span>
                    <Input
                        value={searchVal.keyword}
                        placeholder="请输入姓名进行查询"
                        allowClear
                        onChange={(ev) => setSearchVal((state) => ({ ...state, keyword: ev.target.value }))}
                    />
                </li>
                <li>
                    <span>状态</span>
                    <Select
                        defaultValue={searchVal.state}
                        style={{ width: 120 }}
                        onChange={(value) => setSearchVal((state) => ({ ...state, state: value }))}
                        options={[
                            { value: '0', label: '无效' },
                            { value: '1', label: '有效' }
                        ]}
                        allowClear
                        placeholder="全部"
                    />
                </li>
                <li>
                    <Checkbox.Group options={columns.map((_) => _.dataIndex)} value={checkedList} onChange={onChange} />
                </li>
                <li>
                    <Button type="primary" onClick={handleSearch}>
                        查询
                    </Button>
                </li>
            </ul>

            <Table
                size="small"
                bordered
                dataSource={tableData}
                columns={columns.filter((_) => checkedList.includes(_.dataIndex))}
            />
        </div>
    )
}
