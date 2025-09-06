import { Button,Typography } from "antd";
import { useState } from "react";
import { ShrinkOutlined } from "@ant-design/icons";
const { Title } = Typography;

function ButtonAntd () {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            const result = {
                code:200,
                data:[]
            }
            if (result&&result.code === 200) {
                setLoading(false);
            }
        }, 3000);
    }
    return (
        <>
            <Button 
            type="dashed" 
            loading={loading} 
            onClick={handleClick}
            // danger={loading}
            // disabled={loading}
            href="https://www.google.com/"
            size="large"
            >
                Nội dung
            </Button>
            <Button icon={<ShrinkOutlined rotate={45} spin={true}/>}>Button</Button>

            <Title level={3}>h3 .Ant Design</Title>
        </>
    )
}
export default ButtonAntd;