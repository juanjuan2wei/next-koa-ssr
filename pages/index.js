import Link from 'next/link'
import {Button} from "antd"

export default function Home() {
  return (
    <div>
      <Link href="/api/hello">
        <Button>跳转页面到hello</Button>
      </Link>
    </div>
  )
}
